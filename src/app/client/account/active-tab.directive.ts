import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({ selector: '[activeTab]' })
export class ActiveTabDirective {

    @HostBinding('class')
    active = '';

    @HostListener('click')
    onClick() {

        this.active = "active"
    }

}