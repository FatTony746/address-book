import { Component, OnInit } from '@angular/core';
import { SIDE_SHEET_SLIDE_ANIMATION } from './side-sheet/animations/side-sheet-slide/side-sheet-slide.animation';
import { SIDE_SHEET_SIZE } from './side-sheet/enums/side-sheet-size.enum';
import { SideSheetState } from './side-sheet/models/side-sheet-state';
import { SideSheetRendererService } from './side-sheet/services/side-sheet-renderer.service';
import { SideSheetStateService } from './side-sheet/services/side-sheet.state.service';
import { APP_CONSTS } from './_core/consts/app.consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SIDE_SHEET_SLIDE_ANIMATION]
})
export class AppComponent implements OnInit {
  public title = 'contacts-nuvalence';
  public readonly portalOutletId = APP_CONSTS.PORTAL_OUTLET_ID;

  public sideSheetState: SideSheetState;
  public sideSheetSizeClassName: string;

  private readonly smallSideSheetClassName = 'small-overlay-container';
  private readonly largeSideSheetClassName = 'large-overlay-container';

  
  constructor(private sideSheetStateService: SideSheetStateService,
              private sideSheetRendererService: SideSheetRendererService) {}

  ngOnInit() {
    this.sideSheetStateService.sideSheetState$
        .subscribe(this.onSideSheetStateUpdated);
  }

  public closeOverlay = () => {
    this.sideSheetStateService.closeOverlay();
  }

  private onSideSheetStateUpdated = (sideSheetState: SideSheetState) => {
    if (sideSheetState) {
        this.sideSheetState = sideSheetState;
    }

    sideSheetState.sideSheetSize ?
        this.setSideSheetSize(sideSheetState.sideSheetSize) :
        this.setSideSheetSize(SIDE_SHEET_SIZE.SMALL);
  }

  private setSideSheetSize = (sideSheetSize: SIDE_SHEET_SIZE) => {
      sideSheetSize === SIDE_SHEET_SIZE.SMALL ?
          this.sideSheetSizeClassName = this.smallSideSheetClassName :
          this.sideSheetSizeClassName = this.largeSideSheetClassName;
  }
}
