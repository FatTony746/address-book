import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";

@Directive({
    selector: '[appInfiniteScrollContainer]'
})
export class InfiniteScrollContainerDirective {

    @Input() isLoading: boolean;
    @Output() onScrolledToBottom: EventEmitter<void> = new EventEmitter<void>();

    constructor(private element: ElementRef){}

    @HostListener('scroll') onScroll() {
        if (this.element.nativeElement.offsetHeight + this.element.nativeElement.scrollTop >= this.element.nativeElement.scrollHeight) {
            if (!this.isLoading) {
                this.onScrolledToBottom.emit();
            }
        }
    }
}