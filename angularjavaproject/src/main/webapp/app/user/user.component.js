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
var user_service_1 = require('./user.service');
var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.title = "Angular 2 Application - User";
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.get().subscribe(function (users) { _this.users = users; }, function (error) { console.error(error); }, function () { console.log(_this.users); });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: 'app/user/view/user.html'
        }),
        __param(0, core_1.Inject(user_service_1.UserService)), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map