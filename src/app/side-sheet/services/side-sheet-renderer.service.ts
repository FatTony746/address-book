import { ComponentPortal, ComponentType, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { APP_CONSTS } from '../../_core/consts/app.consts';
import { SideSheetState } from '../models/side-sheet-state';
import { SideSheetStateService } from './side-sheet.state.service';

@Injectable()
export class SideSheetRendererService {

    private sideSheetElementRef: Element;
    private sideSheetContentOutlet: DomPortalOutlet;

    private readonly sideSheetElementId = APP_CONSTS.PORTAL_OUTLET_ID;

    constructor(private applicationRef: ApplicationRef,
                private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector,
                private sideSheetStateService: SideSheetStateService) {

        this.setContentOutlet();

        this.sideSheetStateService.sideSheetState$.subscribe(this.onSideSheetStateUpdate);
    }

    private setContentOutlet = () => {
        this.sideSheetElementRef = this.getSideSheetContainerElement();

        this.sideSheetContentOutlet = new DomPortalOutlet(
            this.sideSheetElementRef,
            this.componentFactoryResolver,
            this.applicationRef,
            this.injector
        );
    }

    private getSideSheetContainerElement = () => {
        return document.querySelector('#' + this.sideSheetElementId);
    }

    private onSideSheetStateUpdate = (updatedSideSheetStateData: SideSheetState) => {
        if (updatedSideSheetStateData.isSideSheetOpen && !this.sideSheetContentOutlet?.hasAttached()) {
            this.mountComponent(updatedSideSheetStateData.sideSheetComponent, updatedSideSheetStateData.sideSheetComponentData);
        }
        else {
            this.unmountCurrentComponent();
        }
    }

    private mountComponent = (component: ComponentType<any>, sideSheetData: any) => {
        if (!this.sideSheetContentOutlet.outletElement) {
            this.setContentOutlet();
        }

        const injector = sideSheetData ?
            new PortalInjector(this.injector, new WeakMap([[APP_CONSTS.SIDE_SHEET_DATA, sideSheetData]])) :
            undefined;

        const componentPortal = new ComponentPortal(
            component,
            undefined,
            injector
        );

        this.sideSheetContentOutlet.attach(componentPortal);
    }

    private unmountCurrentComponent = () => {
        if (this.sideSheetContentOutlet && this.sideSheetContentOutlet.hasAttached()) {
            this.sideSheetContentOutlet.detach();
        }
    }
}