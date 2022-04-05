import { ComponentType } from '@angular/cdk/portal';
import { SIDE_SHEET_SIZE } from '../enums/side-sheet-size.enum';
import { SideSheetSubmitAction } from './side-sheet-submit-action';

export class SideSheetState {
    public sideSheetSize: SIDE_SHEET_SIZE;
    public isSideSheetOpen: boolean;
    public sideSheetAnimationState: string;
    public sideSheetComponent: ComponentType<any>;
    public sideSheetComponentData: any;
    public sideSheetSubmitAction: SideSheetSubmitAction;
}