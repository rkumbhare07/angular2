"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var ErrorDirective = (function () {
    function ErrorDirective(ele, renderer) {
        this.ele = ele;
        this.renderer = renderer;
    }
    ErrorDirective.prototype.onMouseEnter = function () {
        this.setBackgroundColor('white');
    };
    ErrorDirective.prototype.onMouseLeave = function () {
        this.setBackgroundColor('red');
    };
    ErrorDirective.prototype.setBackgroundColor = function (color) {
        this.renderer.setElementStyle(this.ele.nativeElement, 'backgroundColor', color);
    };
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ErrorDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ErrorDirective.prototype, "onMouseLeave", null);
    ErrorDirective = __decorate([
        core_1.Directive({
            selector: '[error]'
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(core_1.Renderer)), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ErrorDirective);
    return ErrorDirective;
}());
exports.ErrorDirective = ErrorDirective;
//# sourceMappingURL=error.directive.js.map