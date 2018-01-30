webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_public_component__ = __webpack_require__("../../../../../src/app/components/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_public_home_home_component__ = __webpack_require__("../../../../../src/app/components/public/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_public_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/public/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_public_login_login_component__ = __webpack_require__("../../../../../src/app/components/public/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_public_forgotpassword_forgotpassword_component__ = __webpack_require__("../../../../../src/app/components/public/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_public_forgotpassword_resetpassword_component__ = __webpack_require__("../../../../../src/app/components/public/forgotpassword/resetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guard_guard_admin__ = __webpack_require__("../../../../../src/app/guard/guard-admin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_testimonial_testimonial_component__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_testimonial_testimonial_add_component__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_testimonial_testimonial_detail_component__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_team_team_component__ = __webpack_require__("../../../../../src/app/components/admin/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_team_team_add_component__ = __webpack_require__("../../../../../src/app/components/admin/team/team-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_team_team_detail_component__ = __webpack_require__("../../../../../src/app/components/admin/team/team-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_order_order_component__ = __webpack_require__("../../../../../src/app/components/admin/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_order_order_detail_component__ = __webpack_require__("../../../../../src/app/components/admin/order/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guard_guard_member__ = __webpack_require__("../../../../../src/app/guard/guard-member.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_member_member_component__ = __webpack_require__("../../../../../src/app/components/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_member_order_order_component__ = __webpack_require__("../../../../../src/app/components/member/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_member_order_order_detail_component__ = __webpack_require__("../../../../../src/app/components/member/order/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_member_order_order_add_component__ = __webpack_require__("../../../../../src/app/components/member/order/order-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Public Components






//Admin Components










//Member Components





var publicRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_public_public_component__["a" /* PublicComponent */],
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_public_home_home_component__["a" /* HomeComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__components_public_signup_signup_component__["a" /* SignupComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_public_login_login_component__["a" /* LoginComponent */] },
            { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_6__components_public_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */] },
            { path: 'resetpassword/:hash', component: __WEBPACK_IMPORTED_MODULE_7__components_public_forgotpassword_resetpassword_component__["a" /* ResetpasswordComponent */] }
        ]
    }
];
var adminRoutes = [
    {
        path: 'admin',
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_guard_admin__["a" /* GuardAdmin */]],
        component: __WEBPACK_IMPORTED_MODULE_8__components_admin_admin_component__["a" /* AdminComponent */],
        children: [
            { path: '', redirectTo: 'order', pathMatch: 'full' },
            { path: 'testimonial', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_testimonial_testimonial_component__["a" /* TestimonialComponent */] },
            { path: 'testimonial/add', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_testimonial_testimonial_add_component__["a" /* TestimonialAddComponent */] },
            { path: 'testimonial/:uid', component: __WEBPACK_IMPORTED_MODULE_12__components_admin_testimonial_testimonial_detail_component__["a" /* TestimonialDetailComponent */] },
            { path: 'team', component: __WEBPACK_IMPORTED_MODULE_13__components_admin_team_team_component__["a" /* TeamComponent */] },
            { path: 'team/add', component: __WEBPACK_IMPORTED_MODULE_14__components_admin_team_team_add_component__["a" /* TeamAddComponent */] },
            { path: 'team/:uid', component: __WEBPACK_IMPORTED_MODULE_15__components_admin_team_team_detail_component__["a" /* TeamDetailComponent */] },
            { path: 'order', component: __WEBPACK_IMPORTED_MODULE_16__components_admin_order_order_component__["a" /* OrderAdminComponent */] },
            { path: 'order/:uid', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_order_order_detail_component__["a" /* OrderDetailAdminComponent */] }
        ]
    }
];
var memberRoutes = [
    {
        path: 'member',
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_member__["a" /* GuardMember */]],
        component: __WEBPACK_IMPORTED_MODULE_19__components_member_member_component__["a" /* MemberComponent */],
        children: [
            { path: '', redirectTo: 'order', pathMatch: 'full' },
            { path: 'order', component: __WEBPACK_IMPORTED_MODULE_20__components_member_order_order_component__["a" /* OrderMemberComponent */] },
            { path: 'order/add', component: __WEBPACK_IMPORTED_MODULE_22__components_member_order_order_add_component__["a" /* OrderAddMemberComponent */] },
            { path: 'order/:uid', component: __WEBPACK_IMPORTED_MODULE_21__components_member_order_order_detail_component__["a" /* OrderDetailMemberComponent */] }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(publicRoutes),
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(memberRoutes),
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(adminRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cloudinary_angular_5_x__ = __webpack_require__("../../../../@cloudinary/angular-5.x/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cloudinary_angular_5_x___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__cloudinary_angular_5_x__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cloudinary_core__ = __webpack_require__("../../../../cloudinary-core/cloudinary-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cloudinary_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cloudinary_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_message_message_service__ = __webpack_require__("../../../../../src/app/components/admin/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_public_header_header_component__ = __webpack_require__("../../../../../src/app/components/public/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_public_home_home_component__ = __webpack_require__("../../../../../src/app/components/public/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guard_guard_admin__ = __webpack_require__("../../../../../src/app/guard/guard-admin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guard_guard_member__ = __webpack_require__("../../../../../src/app/guard/guard-member.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guard_authentication_service__ = __webpack_require__("../../../../../src/app/guard/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_public_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/public/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_public_signup_user_service__ = __webpack_require__("../../../../../src/app/components/public/signup/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_public_login_login_component__ = __webpack_require__("../../../../../src/app/components/public/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_public_login_login_service__ = __webpack_require__("../../../../../src/app/components/public/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_public_forgotpassword_forgotpassword_component__ = __webpack_require__("../../../../../src/app/components/public/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_public_forgotpassword_resetpassword_component__ = __webpack_require__("../../../../../src/app/components/public/forgotpassword/resetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_public_forgotpassword_forgotpassword_service__ = __webpack_require__("../../../../../src/app/components/public/forgotpassword/forgotpassword.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_public_forgotpassword_resetpassword_service__ = __webpack_require__("../../../../../src/app/components/public/forgotpassword/resetpassword.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_member_member_component__ = __webpack_require__("../../../../../src/app/components/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_admin_testimonial_testimonial_component__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_admin_testimonial_testimonial_add_component__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_admin_testimonial_testimonial_detail_component__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_admin_testimonial_testimonial_service__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_admin_team_team_component__ = __webpack_require__("../../../../../src/app/components/admin/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_admin_team_team_add_component__ = __webpack_require__("../../../../../src/app/components/admin/team/team-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_admin_team_team_detail_component__ = __webpack_require__("../../../../../src/app/components/admin/team/team-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_admin_team_team_service__ = __webpack_require__("../../../../../src/app/components/admin/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_public_home_home_team_component__ = __webpack_require__("../../../../../src/app/components/public/home/home-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_public_home_home_testimonials_component__ = __webpack_require__("../../../../../src/app/components/public/home/home-testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_admin_header_header_component__ = __webpack_require__("../../../../../src/app/components/admin/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_member_header_header_component__ = __webpack_require__("../../../../../src/app/components/member/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_public_public_component__ = __webpack_require__("../../../../../src/app/components/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_logout_logout_component__ = __webpack_require__("../../../../../src/app/shared/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_logout_logout_service__ = __webpack_require__("../../../../../src/app/shared/logout/logout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_member_order_order_component__ = __webpack_require__("../../../../../src/app/components/member/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_member_order_order_detail_component__ = __webpack_require__("../../../../../src/app/components/member/order/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_member_order_order_add_component__ = __webpack_require__("../../../../../src/app/components/member/order/order-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_member_order_order_service__ = __webpack_require__("../../../../../src/app/components/member/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_admin_order_order_component__ = __webpack_require__("../../../../../src/app/components/admin/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_admin_order_order_detail_component__ = __webpack_require__("../../../../../src/app/components/admin/order/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_admin_order_order_service__ = __webpack_require__("../../../../../src/app/components/admin/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_public_home_home_team_service__ = __webpack_require__("../../../../../src/app/components/public/home/home-team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_public_home_home_testimonial_service__ = __webpack_require__("../../../../../src/app/components/public/home/home-testimonial.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__cloudinary_angular_5_x__["CloudinaryModule"].forRoot({ Cloudinary: __WEBPACK_IMPORTED_MODULE_6_cloudinary_core__["Cloudinary"] }, { cloud_name: 'dfjnd1tqe' })
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                /*HttpClientInMemoryWebApiModule.forRoot(
                  InMemoryDataService, { dataEncapsulation: false }
                )*/
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_public_header_header_component__["a" /* HeaderPublicComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_public_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_public_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_public_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_member_member_component__["a" /* MemberComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_admin_testimonial_testimonial_component__["a" /* TestimonialComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_admin_testimonial_testimonial_add_component__["a" /* TestimonialAddComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_admin_testimonial_testimonial_detail_component__["a" /* TestimonialDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_public_home_home_testimonials_component__["a" /* TestimonialHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_admin_team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_admin_team_team_add_component__["a" /* TeamAddComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_admin_team_team_detail_component__["a" /* TeamDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_public_home_home_team_component__["a" /* TeamHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_public_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_public_forgotpassword_resetpassword_component__["a" /* ResetpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_admin_header_header_component__["a" /* HeaderAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_public_public_component__["a" /* PublicComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_member_header_header_component__["a" /* HeaderMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_39__shared_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_member_order_order_component__["a" /* OrderMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_member_order_order_detail_component__["a" /* OrderDetailMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_member_order_order_add_component__["a" /* OrderAddMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_admin_order_order_component__["a" /* OrderAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_admin_order_order_detail_component__["a" /* OrderDetailAdminComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__guard_guard_admin__["a" /* GuardAdmin */],
                __WEBPACK_IMPORTED_MODULE_14__guard_guard_member__["a" /* GuardMember */],
                __WEBPACK_IMPORTED_MODULE_15__guard_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_9__components_admin_message_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_17__components_public_signup_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_19__components_public_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_22__components_public_forgotpassword_forgotpassword_service__["a" /* ForgotPasswordService */],
                __WEBPACK_IMPORTED_MODULE_23__components_public_forgotpassword_resetpassword_service__["a" /* ResetPasswordService */],
                __WEBPACK_IMPORTED_MODULE_29__components_admin_testimonial_testimonial_service__["a" /* TestimonialService */],
                __WEBPACK_IMPORTED_MODULE_33__components_admin_team_team_service__["a" /* TeamService */],
                __WEBPACK_IMPORTED_MODULE_40__shared_logout_logout_service__["a" /* LogoutService */],
                __WEBPACK_IMPORTED_MODULE_44__components_member_order_order_service__["a" /* OrderServiceMember */],
                __WEBPACK_IMPORTED_MODULE_47__components_admin_order_order_service__["a" /* OrderServiceAdmin */],
                __WEBPACK_IMPORTED_MODULE_48__components_public_home_home_team_service__["a" /* TeamServicePublic */],
                __WEBPACK_IMPORTED_MODULE_49__components_public_home_home_testimonial_service__["a" /* TestimonialServicePublic */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<header-admin></header-admin>\r\n\r\n<main role=\"main\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md fixed-top\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"./order\">\r\n      <img src=\"assets/images/logo.png\" alt=\"TheCaliCampTeaches\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"icon-bars\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mx-auto\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"./order\">Order</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"./testimonial\">Testimonials</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"./team\">Team</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <link-logout></link-logout>\r\n        </li>\r\n      </ul>\r\n      <div>\r\n        <ul class=\"social-media\">\r\n          <li>\r\n            <a href=\"#\" class=\"icon-facebook\"></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"icon-pinterest2\"></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"icon-tripadvisor\"></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderAdminComponent = (function () {
    function HeaderAdminComponent() {
    }
    HeaderAdminComponent.prototype.ngOnInit = function () {
    };
    HeaderAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderAdminComponent);
    return HeaderAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/message/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages.length = 0;
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/order/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div *ngIf=\"order\">\r\n            <h1>Order Detail</h1>\r\n            <p>\r\n              <button class=\"btn btn-default\" [routerLink]=\"['../../order']\">Back</button>\r\n            </p>\r\n            <div class=\"flex-video\">\r\n              <cl-video public-id=\"{{order.video.public_id}}\" controls=\"true\" ></cl-video>\r\n            </div>\r\n\r\n            <h2>{{order.title}}</h2>\r\n            <p><small>{{order.created | date:'MM.dd.yyyy' }}</small></p>\r\n            <p>{{order.userComment}}</p>\r\n\r\n            <h2>Comments you added</h2>\r\n            <div *ngIf=\"!order.comments || !order.comments.length\">\r\n              <div class=\"alert alert-warning\" role=\"alert\">\r\n                Add your first comment below.\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"order.comments\">\r\n              <div *ngFor=\"let comment of order.comments\">\r\n                <div class=\"alert alert-secondary\" role=\"alert\">\r\n                  <small>{{comment.created | date:'MM.dd.yyyy' }}</small>\r\n                  <p>{{comment.comment}}</p>\r\n                  <a (click)=\"deleteComment(comment.id)\" class=\"delete-comment icon icon-cross\"></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <form (ngSubmit)=\"addComment(comment.value)\" *ngIf=\"!success\">\r\n              <div class=\"form-group\">\r\n                <textarea type=\"text\" class=\"form-control {{error && error.comment && 'is-invalid'}}\" placeholder=\"Comment\" id=\"comment\" #comment required></textarea>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.comment}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n                <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Create</button>\r\n                <a\r\n                  (click)=sendCommentMail()\r\n                  class=\"btn btn-default float-right\"\r\n                  *ngIf=\"order.comments && order.comments.length\">\r\n                  Send Mail\r\n                </a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/order/order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__("../../../../../src/app/components/admin/order/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetailAdminComponent = (function () {
    function OrderDetailAdminComponent(orderService, route) {
        this.orderService = orderService;
        this.route = route;
        this.error = {};
    }
    OrderDetailAdminComponent.prototype.ngOnInit = function () {
        this.getOrder();
    };
    OrderDetailAdminComponent.prototype.getOrder = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('uid');
        this.orderService.getOrder(id)
            .subscribe(function (order) { return _this.order = order[0]; });
    };
    OrderDetailAdminComponent.prototype.addComment = function (comment) {
        var _this = this;
        this.isSubmitting = true;
        var id = this.route.snapshot.paramMap.get('uid');
        this.orderService.updateOrder(id, comment)
            .subscribe(function (order) {
            _this.isSubmitting = false;
            _this.error = [];
            if (order.errors) {
                order.errors.forEach(function (e) { return _this.error[e.param] = e.msg; });
            }
            else {
                _this.getOrder();
                __WEBPACK_IMPORTED_MODULE_2_jquery___default()('#comment').val("");
            }
        });
    };
    OrderDetailAdminComponent.prototype.deleteComment = function (commentId) {
        var orderId = this.route.snapshot.paramMap.get('uid');
        this.orderService.deleteComment(orderId, commentId).subscribe();
        this.getOrder();
    };
    OrderDetailAdminComponent.prototype.sendCommentMail = function () {
        var orderId = this.route.snapshot.paramMap.get('uid');
        this.orderService.sendCommentMail(orderId).subscribe();
        this.getOrder();
    };
    OrderDetailAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-detail-order',
            template: __webpack_require__("../../../../../src/app/components/admin/order/order-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderServiceAdmin */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], OrderDetailAdminComponent);
    return OrderDetailAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"base-container\">\n      <h1>Orders</h1>\n      <div *ngIf=\"!orders || !orders.length\">\n        <div class=\"alert alert-warning\" role=\"alert\">\n          No orders yet.\n        </div>\n      </div>\n      <div *ngIf=\"orders && orders.length\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>State</th>\n                <th>Title</th>\n                <th>Comment</th>\n                <th>Date</th>\n                <th></th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders\">\n                <td>\n                  <span class=\"badge badge-success\" *ngIf=\"order.orderState === 'new'\">new</span>\n                  <span class=\"badge badge-warning\" *ngIf=\"order.orderState === 'progress'\">in progress</span>\n                  <span class=\"badge badge-secondary\" *ngIf=\"order.orderState === 'done'\">done</span>\n                </td>\n                <td>{{order.title}}</td>\n                <td>{{order.userComment}}</td>\n                <td>{{order.created | date:'MM.dd.yyyy' }}</td>\n                <td><a [routerLink]=\"['./', order.id]\">Detail</a></td>\n                <td>\n                  <button class=\"interface-button\" href=\"#\" title=\"delete order\"\n                  (click)=\"delete(order)\"><span class=\"icon-cross\"></span></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__("../../../../../src/app/components/admin/order/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderAdminComponent = (function () {
    function OrderAdminComponent(orderService) {
        this.orderService = orderService;
    }
    OrderAdminComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    OrderAdminComponent.prototype.getOrders = function () {
        var _this = this;
        this.orderService.getOrders()
            .subscribe(function (order) { return _this.orders = order; });
    };
    OrderAdminComponent.prototype.delete = function (order) {
        this.orders = this.orders.filter(function (t) { return t !== order; });
        this.orderService.deleteOrder(order).subscribe();
    };
    OrderAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-order',
            template: __webpack_require__("../../../../../src/app/components/admin/order/order.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderServiceAdmin */]])
    ], OrderAdminComponent);
    return OrderAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/order/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderServiceAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_message_message_service__ = __webpack_require__("../../../../../src/app/components/admin/message/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
    withCredentials: true
};
var OrderServiceAdmin = (function () {
    function OrderServiceAdmin(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.orderUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/orderadmin"; // URL to web api
    }
    /** GET orderes from the server */
    OrderServiceAdmin.prototype.getOrders = function () {
        var _this = this;
        return this.http.get(this.orderUrl, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (orderes) { return _this.log("fetched orderes"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getOrderes', [])));
    };
    /** GET order by id. Return `undefined` when id not found */
    OrderServiceAdmin.prototype.getOrderNo404 = function (id) {
        var _this = this;
        var url = this.orderUrl + "/?id=" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* map */])(function (orderes) { return orderes[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " order id=" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getOrder id=" + id)));
    };
    /** GET order by id. Will 404 if id not found */
    OrderServiceAdmin.prototype.getOrder = function (id) {
        var _this = this;
        var url = this.orderUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched order id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getOrder id=" + id)));
    };
    /** DELETE: delete the order from the server */
    OrderServiceAdmin.prototype.deleteOrder = function (order) {
        var _this = this;
        var id = typeof order === 'number' ? order : order.id;
        var url = this.orderUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("deleted order id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deleteOrder')));
    };
    /** PUT: update the testimonial on the server */
    OrderServiceAdmin.prototype.updateOrder = function (orderId, comment) {
        var _this = this;
        var url = this.orderUrl + "/" + orderId;
        return this.http.put(url, JSON.stringify({ comment: comment }), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log('update'); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('updateTestimonial')));
    };
    OrderServiceAdmin.prototype.deleteComment = function (orderId, commentId) {
        var _this = this;
        var url = this.orderUrl + "/" + orderId + "/" + commentId;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("deleted comment id=" + commentId); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deleteComment')));
    };
    /** PUT: update the testimonial on the server */
    OrderServiceAdmin.prototype.sendCommentMail = function (orderId) {
        var _this = this;
        var url = this.orderUrl + "/mail/" + orderId;
        return this.http.put(url, {}, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log('update'); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('updateTestimonial')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    OrderServiceAdmin.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a OrderService message with the MessageService */
    OrderServiceAdmin.prototype.log = function (message) {
        this.messageService.add('OrderService: ' + message);
    };
    OrderServiceAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__admin_message_message_service__["a" /* MessageService */]])
    ], OrderServiceAdmin);
    return OrderServiceAdmin;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/team/team-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <h1>Add Team</h1>\r\n          <p>\r\n            <button class=\"btn btn-default\" [routerLink]=\"['../../team']\">Back</button>\r\n          </p>\r\n          <div *ngIf=\"success\">\r\n            <div class=\"alert alert-success\" role=\"alert\">\r\n              Team created <a [routerLink]=\"['../../team']\">Back to List</a>\r\n            </div>\r\n          </div>\r\n          <form (ngSubmit)=\"add(firstname.value, lastname.value, email.value, location.value, onlineState.value)\" *ngIf=\"!success\" enctype=\"multipart/form-data\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control {{error && error.firstname && 'is-invalid'}}\" #firstname placeholder=\"Firstname\" required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.firstname}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control {{error && error.lastname && 'is-invalid'}}\" placeholder=\"Lastname\" #lastname required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.lastname}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control {{error && error.email && 'is-invalid'}}\" placeholder=\"E-Mail\" #email required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.email}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control {{error && error.location && 'is-invalid'}}\" placeholder=\"Loction\" #location required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.location}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"file\" class=\"form-control {{error && error.file && 'is-invalid'}}\" id=\"image\" name=\"image\">\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.file}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <select #onlineState class=\"form-control\">\r\n                <option value=\"true\">Online</option>\r\n                <option value=\"false\">Offline</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.onlineState}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n              <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Create</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/team/team-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_service__ = __webpack_require__("../../../../../src/app/components/admin/team/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamAddComponent = (function () {
    function TeamAddComponent(teamService) {
        this.teamService = teamService;
        this.error = {};
    }
    TeamAddComponent.prototype.ngOnInit = function () {
    };
    TeamAddComponent.prototype.add = function (firstname, lastname, email, location, onlineState) {
        var _this = this;
        this.isSubmitting = true;
        var formData = new FormData();
        var file = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#image")[0].files[0];
        formData.append('image', file);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('email', email);
        formData.append('location', location);
        formData.append('onlineState', onlineState);
        this.teamService.addTeam(formData)
            .subscribe(function (team) {
            _this.isSubmitting = false;
            _this.error = [];
            if (team.errors) {
                team.errors.forEach(function (e) { return _this.error[e.param] = e.msg; });
            }
            else {
                _this.success = true;
            }
        });
    };
    TeamAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team-add',
            template: __webpack_require__("../../../../../src/app/components/admin/team/team-add.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__team_service__["a" /* TeamService */]])
    ], TeamAddComponent);
    return TeamAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/team/team-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"team\">\r\n            <h1>Edit Team</h1>\r\n            <p>\r\n              <button class=\"btn btn-default\" [routerLink]=\"['../../team']\">Back</button>\r\n            </p>\r\n            <div *ngIf=\"success\">\r\n              <div class=\"alert alert-success\" role=\"alert\">\r\n                Team updated <a [routerLink]=\"['../../team']\">Back to List</a>\r\n              </div>\r\n            </div>\r\n            <form (ngSubmit)=\"update(firstname.value, lastname.value, email.value, location.value, onlineState.value)\" *ngIf=\"!success\" enctype=\"multipart/form-data\">\r\n              <div class=\"form-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control {{error && error.firstname && 'is-invalid'}}\"\r\n                  name=\"firstname\"\r\n                  [(ngModel)]=\"team.firstname\"\r\n                  #firstname\r\n                  placeholder=\"Firstname\"\r\n                  required>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.firstname}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control {{error && error.lastname && 'is-invalid'}}\"\r\n                  name=\"lastname\"\r\n                  [(ngModel)]=\"team.lastname\"\r\n                  placeholder=\"Lastname\"\r\n                  #lastname\r\n                  required>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.lastname}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input\r\n                  type=\"email\"\r\n                  class=\"form-control {{error && error.email && 'is-invalid'}}\"\r\n                  name=\"email\"\r\n                  [(ngModel)]=\"team.email\"\r\n                  placeholder=\"E-Mail\"\r\n                  #email\r\n                  required>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.email}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control {{error && error.location && 'is-invalid'}}\"\r\n                  name=\"location\"\r\n                  [(ngModel)]=\"team.location\"\r\n                  placeholder=\"Location\"\r\n                  #location\r\n                  required>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.location}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" *ngIf=\"team.image\">\r\n                <cl-image public-id=\"{{team.image.public_id}}\" >\r\n                  <cl-transformation height=\"150\" width=\"150\" crop=\"thumb\" gravity=\"face\"></cl-transformation>\r\n                </cl-image>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"file\" class=\"form-control {{error && error.file && 'is-invalid'}}\" id=\"image\" name=\"image\">\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.file}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <select #onlineState class=\"form-control\">\r\n                  <option value=\"true\" [selected]=\"team.onlineState ? true : null\">Online</option>\r\n                  <option value=\"false\" [selected]=\"team.onlineState ? null : true\">Offline</option>\r\n                </select>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.onlineState}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n                <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Edit</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/team/team-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_service__ = __webpack_require__("../../../../../src/app/components/admin/team/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamDetailComponent = (function () {
    function TeamDetailComponent(teamService, route) {
        this.teamService = teamService;
        this.route = route;
        this.error = {};
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        this.getTeam();
    };
    TeamDetailComponent.prototype.getTeam = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('uid');
        this.teamService.getTeam(id)
            .subscribe(function (team) { return _this.team = team; });
    };
    TeamDetailComponent.prototype.update = function (firstname, lastname, email, location, onlineState) {
        var _this = this;
        this.isSubmitting = true;
        var formData = new FormData();
        var file = __WEBPACK_IMPORTED_MODULE_2_jquery___default()("#image")[0].files[0];
        formData.append('id', this.team.id);
        formData.append('image', file);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('email', email);
        formData.append('location', location);
        formData.append('onlineState', onlineState);
        this.teamService.updateTeam(formData)
            .subscribe(function (team) {
            _this.isSubmitting = false;
            _this.error = [];
            if (team.errors) {
                team.errors.forEach(function (e) { return _this.error[e.param] = e.msg; });
            }
            else {
                _this.success = true;
            }
        });
    };
    TeamDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team-detail',
            template: __webpack_require__("../../../../../src/app/components/admin/team/team-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <h1>Team</h1>\r\n      <p><button class=\"btn\" [routerLink]=\"['./add']\">New Team</button></p>\r\n      <div *ngIf=\"teams && teams.length\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>Firstname</th>\r\n                <th>Lastname</th>\r\n                <th>Email</th>\r\n                <th>Location</th>\r\n                <th></th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let team of teams\">\r\n                <td>{{team.firstname}}</td>\r\n                <td>{{team.lastname}}</td>\r\n                <td>{{team.email}}</td>\r\n                <td>{{team.location}}</td>\r\n                <td><a [routerLink]=\"['./', team.id]\">Detail</a></td>\r\n                <td>\r\n                  <button class=\"interface-button\" href=\"#\" title=\"delete team\"\r\n                  (click)=\"delete(team)\"><span class=\"icon-cross\"></span></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("../../../../../src/app/components/admin/team/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = (function () {
    function TeamComponent(teamService) {
        this.teamService = teamService;
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams()
            .subscribe(function (team) { return _this.teams = team; });
    };
    TeamComponent.prototype.delete = function (team) {
        this.teams = this.teams.filter(function (t) { return t !== team; });
        this.teamService.deleteTeam(team).subscribe();
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/components/admin/team/team.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/team/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message_service__ = __webpack_require__("../../../../../src/app/components/admin/message/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    withCredentials: true
};
var TeamService = (function () {
    function TeamService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.teamUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/team"; // URL to web api
    }
    /** GET teames from the server */
    TeamService.prototype.getTeams = function () {
        var _this = this;
        return this.http.get(this.teamUrl, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (teams) { return _this.log("fetched teames"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getTeames', [])));
    };
    /** GET team by id. Return `undefined` when id not found */
    TeamService.prototype.getTeamNo404 = function (id) {
        var _this = this;
        var url = this.teamUrl + "/?id=" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* map */])(function (teames) { return teames[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " team id=" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getTeam id=" + id)));
    };
    /** GET team by id. Will 404 if id not found */
    TeamService.prototype.getTeam = function (id) {
        var _this = this;
        var url = this.teamUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched team id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getTeam id=" + id)));
    };
    //////// Save methods //////////
    /** POST: add a new team to the server */
    TeamService.prototype.addTeam = function (team) {
        var _this = this;
        return this.http.post(this.teamUrl, team, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (team) { return _this.log("add"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('addTeam')));
    };
    /** DELETE: delete the team from the server */
    TeamService.prototype.deleteTeam = function (team) {
        var _this = this;
        var id = typeof team === 'number' ? team : team.id;
        var url = this.teamUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("deleted team id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deleteTeam')));
    };
    /** PUT: update the team on the server */
    TeamService.prototype.updateTeam = function (team) {
        var _this = this;
        var url = this.teamUrl + "/" + team.get('id');
        return this.http.put(url, team, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log('update'); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('updateTeam')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TeamService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a TeamService message with the MessageService */
    TeamService.prototype.log = function (message) {
        this.messageService.add('TeamService: ' + message);
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__message_message_service__["a" /* MessageService */]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/testimonial/testimonial-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <h1>Add Testimonial</h1>\r\n          <p>\r\n            <button class=\"btn btn-default\" [routerLink]=\"['../../testimonial']\">Back</button>\r\n          </p>\r\n          <div *ngIf=\"success\">\r\n            <div class=\"alert alert-success\" role=\"alert\">\r\n              Testimonial created <a [routerLink]=\"['../../testimonial']\">Back to List</a>\r\n            </div>\r\n          </div>\r\n          <form (ngSubmit)=\"add(firstname.value, lastname.value, quote.value, onlineState.value)\" *ngIf=\"!success\" enctype=\"multipart/form-data\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control {{error && error.firstname && 'is-invalid'}}\" #firstname placeholder=\"Firstname\" required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.firstname}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control {{error && error.lastname && 'is-invalid'}}\" placeholder=\"Lastname\" #lastname required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.lastname}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <textarea class=\"form-control {{error && error.quote && 'is-invalid'}}\" placeholder=\"Quote\" #quote required></textarea>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.quote}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"file\" class=\"form-control {{error && error.file && 'is-invalid'}}\" id=\"image\" name=\"image\">\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.file}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <select #onlineState class=\"form-control\">\r\n                <option value=\"true\">Online</option>\r\n                <option value=\"false\">Offline</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.onlineState}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n              <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Create</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/testimonial/testimonial-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testimonial_service__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestimonialAddComponent = (function () {
    function TestimonialAddComponent(testimonialService) {
        this.testimonialService = testimonialService;
        this.error = {};
    }
    TestimonialAddComponent.prototype.ngOnInit = function () {
    };
    TestimonialAddComponent.prototype.add = function (firstname, lastname, quote, onlineState) {
        var _this = this;
        this.isSubmitting = true;
        var formData = new FormData();
        var file = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#image")[0].files[0];
        formData.append('image', file);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('quote', quote);
        formData.append('onlineState', onlineState);
        this.testimonialService.addTestimonial(formData)
            .subscribe(function (testimonial) {
            _this.isSubmitting = false;
            _this.error = [];
            if (testimonial.errors) {
                testimonial.errors.forEach(function (e) { return _this.error[e.param] = e.msg; });
            }
            else {
                _this.success = true;
            }
        });
    };
    TestimonialAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testimonial-add',
            template: __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial-add.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__testimonial_service__["a" /* TestimonialService */]])
    ], TestimonialAddComponent);
    return TestimonialAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/testimonial/testimonial-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"testimonial\">\r\n            <h1>Edit Testimonial</h1>\r\n            <p>\r\n              <button class=\"btn btn-default\" [routerLink]=\"['../../testimonial']\">Back</button>\r\n            </p>\r\n            <div *ngIf=\"success\">\r\n              <div class=\"alert alert-success\" role=\"alert\">\r\n                Testimonial updated <a [routerLink]=\"['../../testimonial']\">Back to List</a>\r\n              </div>\r\n            </div>\r\n            <form (ngSubmit)=\"update(firstname.value, lastname.value, quote.value, onlineState.value)\" *ngIf=\"!success\" enctype=\"multipart/form-data\">\r\n              <div class=\"form-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control {{error && error.firstname && 'is-invalid'}}\"\r\n                  name=\"firstname\"\r\n                  [(ngModel)]=\"testimonial.firstname\"\r\n                  #firstname\r\n                  placeholder=\"Firstname\"\r\n                  required>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.firstname}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control {{error && error.lastname && 'is-invalid'}}\"\r\n                  name=\"lastname\"\r\n                  [(ngModel)]=\"testimonial.lastname\"\r\n                  placeholder=\"Lastname\"\r\n                  #lastname\r\n                  required>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.lastname}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <textarea\r\n                  class=\"form-control {{error && error.quote && 'is-invalid'}}\"\r\n                  name=\"quote\"\r\n                  [(ngModel)]=\"testimonial.quote\"\r\n                  placeholder=\"Quote\"\r\n                  #quote\r\n                  required></textarea>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.quote}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" *ngIf=\"testimonial.image\">\r\n                <cl-image public-id=\"{{testimonial.image.public_id}}\" >\r\n                  <cl-transformation height=\"150\" width=\"150\" crop=\"thumb\" gravity=\"face\"></cl-transformation>\r\n                </cl-image>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"file\" class=\"form-control {{error && error.file && 'is-invalid'}}\" id=\"image\" name=\"image\">\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.file}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <select #onlineState class=\"form-control\">\r\n                  <option value=\"true\" [selected]=\"testimonial.onlineState ? true : null\">Online</option>\r\n                  <option value=\"false\" [selected]=\"testimonial.onlineState ? null : true\">Offline</option>\r\n                </select>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.onlineState}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n                <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Edit</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/testimonial/testimonial-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__testimonial_service__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestimonialDetailComponent = (function () {
    function TestimonialDetailComponent(testimonialService, route) {
        this.testimonialService = testimonialService;
        this.route = route;
        this.error = {};
    }
    TestimonialDetailComponent.prototype.ngOnInit = function () {
        this.getTestimonial();
    };
    TestimonialDetailComponent.prototype.getTestimonial = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('uid');
        this.testimonialService.getTestimonial(id)
            .subscribe(function (testimonial) { return _this.testimonial = testimonial; });
    };
    TestimonialDetailComponent.prototype.update = function (firstname, lastname, quote, onlineState) {
        var _this = this;
        this.isSubmitting = true;
        var formData = new FormData();
        var file = __WEBPACK_IMPORTED_MODULE_2_jquery___default()("#image")[0].files[0];
        formData.append('id', this.testimonial.id);
        formData.append('image', file);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('quote', quote);
        formData.append('onlineState', onlineState);
        this.testimonialService.updateTestimonial(formData)
            .subscribe(function (testimonial) {
            _this.isSubmitting = false;
            _this.error = [];
            if (testimonial.errors) {
                testimonial.errors.forEach(function (e) { return _this.error[e.param] = e.msg; });
            }
            else {
                _this.success = true;
            }
        });
    };
    TestimonialDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testimonial-detail',
            template: __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__testimonial_service__["a" /* TestimonialService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TestimonialDetailComponent);
    return TestimonialDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/testimonial/testimonial.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <h1>Testimonials</h1>\r\n      <p><button class=\"btn\" [routerLink]=\"['./add']\">New Testimonial</button></p>\r\n      <div *ngIf=\"testimonials && testimonials.length\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>Firstname</th>\r\n                <th>Lastname</th>\r\n                <th>Quote</th>\r\n                <th></th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let testimonial of testimonials\">\r\n                <td>{{testimonial.firstname}}</td>\r\n                <td>{{testimonial.lastname}}</td>\r\n                <td>{{testimonial.quote}}</td>\r\n                <td><a [routerLink]=\"['./', testimonial.id]\">Detail</a></td>\r\n                <td>\r\n                  <button class=\"interface-button\" href=\"#\" title=\"delete testimonial\"\r\n                  (click)=\"delete(testimonial)\"><span class=\"icon-cross\"></span></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/testimonial/testimonial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testimonial_service__ = __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialComponent = (function () {
    function TestimonialComponent(testimonialService) {
        this.testimonialService = testimonialService;
    }
    TestimonialComponent.prototype.ngOnInit = function () {
        this.getTestimonials();
    };
    TestimonialComponent.prototype.getTestimonials = function () {
        var _this = this;
        this.testimonialService.getTestimonials()
            .subscribe(function (testimonials) { return _this.testimonials = testimonials; });
    };
    TestimonialComponent.prototype.delete = function (testmonial) {
        this.testimonials = this.testimonials.filter(function (t) { return t !== testmonial; });
        this.testimonialService.deleteTestimonial(testmonial).subscribe();
    };
    TestimonialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__("../../../../../src/app/components/admin/testimonial/testimonial.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__testimonial_service__["a" /* TestimonialService */]])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/testimonial/testimonial.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message_service__ = __webpack_require__("../../../../../src/app/components/admin/message/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    withCredentials: true
};
var TestimonialService = (function () {
    function TestimonialService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.testimonialUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/testimonial"; // URL to web api
    }
    /** GET testimoniales from the server */
    TestimonialService.prototype.getTestimonials = function () {
        var _this = this;
        return this.http.get(this.testimonialUrl, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (testimoniales) { return _this.log("fetched testimoniales"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getTestimoniales', [])));
    };
    /** GET testimonial by id. Return `undefined` when id not found */
    TestimonialService.prototype.getTestimonialNo404 = function (id) {
        var _this = this;
        var url = this.testimonialUrl + "/?id=" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* map */])(function (testimoniales) { return testimoniales[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " testimonial id=" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getTestimonial id=" + id)));
    };
    /** GET testimonial by id. Will 404 if id not found */
    TestimonialService.prototype.getTestimonial = function (id) {
        var _this = this;
        var url = this.testimonialUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched testimonial id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getTestimonial id=" + id)));
    };
    //////// Save methods //////////
    /** POST: add a new testimonial to the server */
    TestimonialService.prototype.addTestimonial = function (testimonial) {
        var _this = this;
        return this.http.post(this.testimonialUrl, testimonial, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (testimonial) { return _this.log("add"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('addTestimonial')));
    };
    /** DELETE: delete the testimonial from the server */
    TestimonialService.prototype.deleteTestimonial = function (testimonial) {
        var _this = this;
        var id = typeof testimonial === 'number' ? testimonial : testimonial.id;
        var url = this.testimonialUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("deleted testimonial id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deleteTestimonial')));
    };
    /** PUT: update the testimonial on the server */
    TestimonialService.prototype.updateTestimonial = function (testimonial) {
        var _this = this;
        var url = this.testimonialUrl + "/" + testimonial.get('id');
        return this.http.put(url, testimonial, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log('update'); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('updateTestimonial')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TestimonialService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a TestimonialService message with the MessageService */
    TestimonialService.prototype.log = function (message) {
        this.messageService.add('TestimonialService: ' + message);
    };
    TestimonialService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__message_message_service__["a" /* MessageService */]])
    ], TestimonialService);
    return TestimonialService;
}());



/***/ }),

/***/ "../../../../../src/app/components/member/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md fixed-top\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"./order\">\r\n      <img src=\"assets/images/logo.png\" alt=\"TheCaliCampTeaches\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"icon-bars\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mx-auto\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"./order\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <link-logout></link-logout>\r\n        </li>\r\n      </ul>\r\n      <div>\r\n        <ul class=\"social-media\">\r\n          <li>\r\n            <a href=\"#\" class=\"icon-facebook\"></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"icon-pinterest2\"></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"icon-tripadvisor\"></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/member/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderMemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderMemberComponent = (function () {
    function HeaderMemberComponent() {
    }
    HeaderMemberComponent.prototype.ngOnInit = function () {
    };
    HeaderMemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-member',
            template: __webpack_require__("../../../../../src/app/components/member/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderMemberComponent);
    return HeaderMemberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<header-member></header-member>\r\n\r\n<main role=\"main\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberComponent = (function () {
    function MemberComponent() {
    }
    MemberComponent.prototype.ngOnInit = function () {
    };
    MemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member',
            template: __webpack_require__("../../../../../src/app/components/member/member.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/member/order/order-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <h1>Add Video</h1>\r\n          <p>\r\n            <button class=\"btn btn-default\" [routerLink]=\"['../../order']\">Back</button>\r\n          </p>\r\n          <div *ngIf=\"success\">\r\n            <div class=\"alert alert-success\" role=\"alert\">\r\n              Video uploaded <a [routerLink]=\"['../../order']\">Back to List</a>\r\n            </div>\r\n          </div>\r\n          <form (ngSubmit)=\"add(title.value, userComment.value)\" *ngIf=\"!success\" enctype=\"multipart/form-data\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control {{error && error.title && 'is-invalid'}}\" #title placeholder=\"Title\" required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.title}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <textarea type=\"text\" class=\"form-control {{error && error.userComment && 'is-invalid'}}\" placeholder=\"Comment\" #userComment required></textarea>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.lastname}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"file\" class=\"form-control {{error && error.video && 'is-invalid'}}\" id=\"video\" name=\"video\">\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.video}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n              <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Create</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/member/order/order-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderAddMemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_service__ = __webpack_require__("../../../../../src/app/components/member/order/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderAddMemberComponent = (function () {
    function OrderAddMemberComponent(orderService) {
        this.orderService = orderService;
        this.error = {};
    }
    OrderAddMemberComponent.prototype.ngOnInit = function () {
    };
    OrderAddMemberComponent.prototype.add = function (title, userComment) {
        var _this = this;
        this.isSubmitting = true;
        var formData = new FormData();
        var video = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#video")[0].files[0];
        formData.append('video', video);
        formData.append('title', title);
        formData.append('userComment', userComment);
        formData.append('state', "new");
        this.orderService.addOrder(formData)
            .subscribe(function (order) {
            _this.isSubmitting = false;
            _this.error = [];
            if (order.errors) {
                order.errors.forEach(function (e) { return _this.error[e.param] = e.msg; });
            }
            else {
                _this.success = true;
            }
        });
    };
    OrderAddMemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-order',
            template: __webpack_require__("../../../../../src/app/components/member/order/order-add.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderServiceMember */]])
    ], OrderAddMemberComponent);
    return OrderAddMemberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/member/order/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div *ngIf=\"order\">\r\n            <h1>Order Detail</h1>\r\n            <p>\r\n              <button class=\"btn btn-default\" [routerLink]=\"['../../order']\">Back</button>\r\n            </p>\r\n            <div class=\"flex-video\">\r\n              <cl-video public-id=\"{{order.video.public_id}}\" controls=\"true\" ></cl-video>\r\n            </div>\r\n\r\n            <h2>{{order.title}}</h2>\r\n            <p><small>{{order.created | date:'MM.dd.yyyy' }}</small></p>\r\n            <p>{{order.userComment}}</p>\r\n\r\n            <h2>Comments from our Surfguide</h2>\r\n            <div *ngIf=\"!order.comments || !order.comments.length\">\r\n              <div class=\"alert alert-warning\" role=\"alert\">\r\n                This video has no comments yet. We will do it ASAP.\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"order.comments\">\r\n              <div *ngFor=\"let comment of order.comments\">\r\n                <div class=\"alert alert-secondary\" role=\"alert\">\r\n                  <small>{{comment.created | date:'MM.dd.yyyy' }}</small>\r\n                  <p>{{comment.comment}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/member/order/order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailMemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_service__ = __webpack_require__("../../../../../src/app/components/member/order/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDetailMemberComponent = (function () {
    function OrderDetailMemberComponent(orderService, route) {
        this.orderService = orderService;
        this.route = route;
    }
    OrderDetailMemberComponent.prototype.ngOnInit = function () {
        this.getOrder();
    };
    OrderDetailMemberComponent.prototype.getOrder = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('uid');
        this.orderService.getOrder(id)
            .subscribe(function (order) { return _this.order = order[0]; });
    };
    OrderDetailMemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-order',
            template: __webpack_require__("../../../../../src/app/components/member/order/order-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderServiceMember */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], OrderDetailMemberComponent);
    return OrderDetailMemberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/member/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"base-container\">\n      <h1>Your Orders</h1>\n      <p>Welcome to your memberarea.<br/>\n      Please use the button below to place your first order.</p>\n      <p><button class=\"btn\" [routerLink]=\"['./add']\">New Order</button></p>\n      <div *ngIf=\"orders && orders.length\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th></th>\n                <th>Title</th>\n                <th>Comment</th>\n                <th>Date</th>\n                <th></th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders\">\n                <td>\n                  <span class=\"badge badge-success\" *ngIf=\"order.hasUnreadComment\">New Comment</span>\n                </td>\n                <td>{{order.title}}</td>\n                <td>{{order.userComment}}</td>\n                <td>{{order.created | date:'MM.dd.yyyy' }}</td>\n                <td><a [routerLink]=\"['./', order.id]\">Detail</a></td>\n                <td>\n                  <button class=\"interface-button\" href=\"#\" title=\"delete order\"\n                  (click)=\"delete(order)\"><span class=\"icon-cross\"></span></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/member/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderMemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__("../../../../../src/app/components/member/order/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderMemberComponent = (function () {
    function OrderMemberComponent(orderService) {
        this.orderService = orderService;
    }
    OrderMemberComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    OrderMemberComponent.prototype.getOrders = function () {
        var _this = this;
        this.orderService.getOrders()
            .subscribe(function (order) { return _this.orders = order; });
    };
    OrderMemberComponent.prototype.delete = function (order) {
        this.orders = this.orders.filter(function (t) { return t !== order; });
        this.orderService.deleteOrder(order).subscribe();
    };
    OrderMemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__("../../../../../src/app/components/member/order/order.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderServiceMember */]])
    ], OrderMemberComponent);
    return OrderMemberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/member/order/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderServiceMember; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_message_message_service__ = __webpack_require__("../../../../../src/app/components/admin/message/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    withCredentials: true
};
var OrderServiceMember = (function () {
    function OrderServiceMember(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.orderUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/order"; // URL to web api
    }
    /** GET orderes from the server */
    OrderServiceMember.prototype.getOrders = function () {
        var _this = this;
        return this.http.get(this.orderUrl, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (orderes) { return _this.log("fetched orderes"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getOrderes', [])));
    };
    /** GET order by id. Return `undefined` when id not found */
    OrderServiceMember.prototype.getOrderNo404 = function (id) {
        var _this = this;
        var url = this.orderUrl + "/?id=" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* map */])(function (orderes) { return orderes[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " order id=" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getOrder id=" + id)));
    };
    /** GET order by id. Will 404 if id not found */
    OrderServiceMember.prototype.getOrder = function (id) {
        var _this = this;
        var url = this.orderUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched order id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getOrder id=" + id)));
    };
    //////// Save methods //////////
    /** POST: add a new order to the server */
    OrderServiceMember.prototype.addOrder = function (order) {
        var _this = this;
        return this.http.post(this.orderUrl, order, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (order) { return _this.log("add"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('addOrder')));
    };
    /** DELETE: delete the order from the server */
    OrderServiceMember.prototype.deleteOrder = function (order) {
        var _this = this;
        var id = typeof order === 'number' ? order : order.id;
        var url = this.orderUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("deleted order id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deleteOrder')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    OrderServiceMember.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a OrderService message with the MessageService */
    OrderServiceMember.prototype.log = function (message) {
        this.messageService.add('OrderService: ' + message);
    };
    OrderServiceMember = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__admin_message_message_service__["a" /* MessageService */]])
    ], OrderServiceMember);
    return OrderServiceMember;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/forgotpassword/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"register\">\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <h1>Forgot your Password</h1>\r\n          <p>Please enter your email</p>\r\n          <div *ngIf=\"success\">\r\n            <div class=\"alert alert-success\" role=\"alert\">\r\n              Mail sent. Please check your email and click the link in it.\r\n            </div>\r\n          </div>\r\n          <form (ngSubmit)=\"forgot(email.value)\" *ngIf=\"!success\">\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" class=\"form-control {{error && error.email && 'is-invalid'}}\" id=\"email-login\" #email placeholder=\"name@example.com\" required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.email}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n              <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Reset</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/forgotpassword/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forgotpassword_service__ = __webpack_require__("../../../../../src/app/components/public/forgotpassword/forgotpassword.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotpasswordComponent = (function () {
    function ForgotpasswordComponent(forgotPasswordService) {
        this.forgotPasswordService = forgotPasswordService;
        this.error = {};
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () { };
    ForgotpasswordComponent.prototype.forgot = function (email) {
        var _this = this;
        this.isSubmitting = true;
        this.forgotPasswordService.forgot(email)
            .then(function (response) {
            _this.isSubmitting = false;
            _this.error = [];
            if (response.errors) {
                response.errors.forEach(function (e) { return _this.error[e.param] = e.msg; });
            }
            else {
                _this.success = true;
            }
        })
            .catch(function (err) { return console.error(err); });
    };
    ForgotpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__("../../../../../src/app/components/public/forgotpassword/forgotpassword.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__forgotpassword_service__["a" /* ForgotPasswordService */]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/forgotpassword/forgotpassword.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
    withCredentials: true
};
var ForgotPasswordService = (function () {
    function ForgotPasswordService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/forgotpassword";
    }
    /** POST: add a new hero to the server */
    ForgotPasswordService.prototype.forgot = function (email) {
        var data = {
            email: email
        };
        return this.http
            .post(this.url, JSON.stringify(data), httpOptions)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ForgotPasswordService.prototype.handleError = function (error) {
        //console.error('An error occurred', console.log(error)); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ForgotPasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ForgotPasswordService);
    return ForgotPasswordService;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/forgotpassword/resetpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"register\">\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div *ngIf=\"!showForm\">\r\n            <div class=\"alert alert-danger\">\r\n              <strong>Ups!</strong> This link is no longer valid. Please resend the <a routerLink=\"/forgotpassword\">Link</a>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showForm\">\r\n            <h1>Change your Password</h1>\r\n            <p>Please enter your new password</p>\r\n            <div *ngIf=\"success\">\r\n              <div class=\"alert alert-success\" role=\"alert\">\r\n                <strong>Success!</strong> Password changed. You can now <a routerLink=\"/login\">Login</a>\r\n              </div>\r\n            </div>\r\n            <form (ngSubmit)=\"resetPassword(password.value)\" *ngIf=\"!success\">\r\n              <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control {{error && error.email && 'is-invalid'}}\" id=\"password\" #password placeholder=\"Your password\" required>\r\n                <div class=\"invalid-feedback\">\r\n                  {{error && error.password}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n                <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Change</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/forgotpassword/resetpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetpassword_service__ = __webpack_require__("../../../../../src/app/components/public/forgotpassword/resetpassword.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetpasswordComponent = (function () {
    function ResetpasswordComponent(resetPasswordService, route) {
        this.resetPasswordService = resetPasswordService;
        this.route = route;
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
        this.checkHash();
    };
    ResetpasswordComponent.prototype.checkHash = function () {
        var _this = this;
        var hash = this.route.snapshot.paramMap.get('hash');
        this.resetPasswordService.checkHash(hash)
            .then(function (visible) { return visible.showForm ? _this.showForm = true : _this.showForm = false; });
    };
    ResetpasswordComponent.prototype.resetPassword = function (password) {
        var _this = this;
        this.isSubmitting = true;
        var hash = this.route.snapshot.paramMap.get('hash');
        this.resetPasswordService.resetPassword(hash, password)
            .then(function (reseted) {
            _this.isSubmitting = false;
            return reseted.updated ? _this.success = true : _this.success = false;
        });
    };
    ResetpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__("../../../../../src/app/components/public/forgotpassword/resetpassword.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__resetpassword_service__["a" /* ResetPasswordService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/forgotpassword/resetpassword.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
    withCredentials: true
};
var ResetPasswordService = (function () {
    function ResetPasswordService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/resetpassword";
    }
    ResetPasswordService.prototype.checkHash = function (hash) {
        return this.http
            .get(this.url + "/" + hash, httpOptions)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ResetPasswordService.prototype.resetPassword = function (hash, password) {
        var data = {
            password: password
        };
        return this.http
            .post(this.url + "/" + hash, JSON.stringify(data), httpOptions)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ResetPasswordService.prototype.handleError = function (error) {
        //console.error('An error occurred', console.log(error)); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ResetPasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ResetPasswordService);
    return ResetPasswordService;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md fixed-top\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\">\r\n      <img src=\"assets/images/logo.png\" alt=\"TheCaliCampTeaches\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"icon-bars\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mx-auto\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/signup\">Signup</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n      </ul>\r\n      <div>\r\n        <ul class=\"social-media\">\r\n          <li>\r\n            <a href=\"#\" class=\"icon-facebook\"></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"icon-pinterest2\"></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"icon-tripadvisor\"></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderPublicComponent = (function () {
    function HeaderPublicComponent() {
    }
    HeaderPublicComponent.prototype.ngOnInit = function () {
    };
    HeaderPublicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-public',
            template: __webpack_require__("../../../../../src/app/components/public/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderPublicComponent);
    return HeaderPublicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/home/home-team.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"team\">\r\n  <div class=\"container\">\r\n    <div class=\"heading\">\r\n      <h1>Our Team</h1>\r\n      <span class=\"icon-cross\"></span>\r\n    </div>\r\n    <div class=\"row justify-content-md-center\">\r\n      <div class=\"col-lg-3\" *ngFor=\"let team of teams\">\r\n        <div class=\"team-holder active\">\r\n          <div class=\"img-holder\">\r\n            <div *ngIf=\"team.image\">\r\n              <cl-image public-id=\"{{team.image.public_id}}\" >\r\n                <cl-transformation height=\"203\" width=\"203\" crop=\"thumb\" gravity=\"face\"></cl-transformation>\r\n              </cl-image>\r\n            </div>\r\n          </div>\r\n          <h2>{{team.firstname}} {{team.lastname}}</h2>\r\n          <div class=\"mail\">\r\n            <span><a href=\"mailto: {{team.email}}\">{{team.email}}</a></span>\r\n          </div>\r\n          <div>\r\n            <span class=\"icon-waves\"></span>\r\n          </div>\r\n          <div class=\"location\">\r\n            <span class=\"icon-location\"></span>\r\n            <span>{{team.location}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/home/home-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_team_service__ = __webpack_require__("../../../../../src/app/components/public/home/home-team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamHomeComponent = (function () {
    function TeamHomeComponent(teamService) {
        this.teamService = teamService;
    }
    TeamHomeComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamHomeComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams()
            .subscribe(function (teams) { return _this.teams = teams; });
    };
    TeamHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'team-home',
            template: __webpack_require__("../../../../../src/app/components/public/home/home-team.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__home_team_service__["a" /* TeamServicePublic */]])
    ], TeamHomeComponent);
    return TeamHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/home/home-team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamServicePublic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_message_message_service__ = __webpack_require__("../../../../../src/app/components/admin/message/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    withCredentials: true
};
var TeamServicePublic = (function () {
    function TeamServicePublic(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.teamUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/teampublic"; // URL to web api
    }
    /** GET teames from the server */
    TeamServicePublic.prototype.getTeams = function () {
        var _this = this;
        return this.http.get(this.teamUrl, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (teams) { return _this.log("fetched teames"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getTeames', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TeamServicePublic.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a TeamService message with the MessageService */
    TeamServicePublic.prototype.log = function (message) {
        this.messageService.add('TeamService: ' + message);
    };
    TeamServicePublic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__admin_message_message_service__["a" /* MessageService */]])
    ], TeamServicePublic);
    return TeamServicePublic;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/home/home-testimonial.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialServicePublic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_message_message_service__ = __webpack_require__("../../../../../src/app/components/admin/message/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    withCredentials: true
};
var TestimonialServicePublic = (function () {
    function TestimonialServicePublic(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.testimonialUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/testimonialpublic"; // URL to web api
    }
    /** GET testimoniales from the server */
    TestimonialServicePublic.prototype.getTestimonials = function () {
        var _this = this;
        return this.http.get(this.testimonialUrl, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (testimoniales) { return _this.log("fetched testimoniales"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getTestimoniales', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TestimonialServicePublic.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a TestimonialService message with the MessageService */
    TestimonialServicePublic.prototype.log = function (message) {
        this.messageService.add('TestimonialService: ' + message);
    };
    TestimonialServicePublic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__admin_message_message_service__["a" /* MessageService */]])
    ], TestimonialServicePublic);
    return TestimonialServicePublic;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/home/home-testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"news\">\r\n  <div class=\"container\">\r\n    <div class=\"heading\">\r\n      <h1>Testimonials</h1>\r\n      <span class=\"icon-cross\"></span>\r\n    </div>\r\n    <div class=\"row justify-content-md-center\">\r\n      <div class=\"col-md-4\" *ngFor=\"let testimonial of testimonials\">\r\n        <div class=\"news-holder\">\r\n          <div class=\"img-holder\">\r\n            <div *ngIf=\"testimonial.image\">\r\n              <cl-image public-id=\"{{testimonial.image.public_id}}\" >\r\n                <cl-transformation height=\"203\" width=\"270\" crop=\"fill\"></cl-transformation>\r\n              </cl-image>\r\n            </div>\r\n          </div>\r\n          <div class=\"txt-holder\">\r\n            <h2>{{testimonial.firstname}} {{testimonial.lastname}}</h2>\r\n            <p>{{testimonial.quote}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--<div class=\"btn-holder-center\">\r\n      <a href=\"#\" class=\"btn\">View all Posts</a>\r\n    </div>-->\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/home/home-testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_testimonial_service__ = __webpack_require__("../../../../../src/app/components/public/home/home-testimonial.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialHomeComponent = (function () {
    function TestimonialHomeComponent(testimonialService) {
        this.testimonialService = testimonialService;
    }
    TestimonialHomeComponent.prototype.ngOnInit = function () {
        this.getTestimonials();
    };
    TestimonialHomeComponent.prototype.getTestimonials = function () {
        var _this = this;
        this.testimonialService.getTestimonials()
            .subscribe(function (testimonials) { return _this.testimonials = testimonials; });
    };
    TestimonialHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'testimonial-home',
            template: __webpack_require__("../../../../../src/app/components/public/home/home-testimonials.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__home_testimonial_service__["a" /* TestimonialServicePublic */]])
    ], TestimonialHomeComponent);
    return TestimonialHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"intro\">\r\n  <div class=\"container\">\r\n    <h1>Ride every wave as if it's your last</h1>\r\n    <h2>We love the motion of the ocean</h2>\r\n  </div>\r\n</section>\r\n<section class=\"product\">\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <img src=\"assets/images/surfboard.jpg\" alt=\"Surfboard\">\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <h1>Better surfing with Video-Coaching</h1>\r\n          <p>Easy to ride, care free surfing craft that's fun for everyone, paddles well, super fast down the line and great for any level of surfing depending on who rides it. The Donny Stoker, a rework on design from stokesys first ever pro model. A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.</p>\r\n          <ol>\r\n            <li>Upload your surf video</li>\r\n            <li>Get feedback to become a better surfer</li>\r\n            <li>For just $99 per 5 minutes</li>\r\n          </ol>\r\n          <a href=\"#\" class=\"btn\">Buy now</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"about-us\">\r\n  <div class=\"left-col\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"txt-holder\">\r\n          <div class=\"heading\">\r\n            <h1>We are Surfers co.</h1>\r\n            <span class=\"icon-cross\"></span>\r\n          </div>\r\n          <p>Lorem ipsum dolor sit amet, aeneam consectetur adipiscing elit. Fusce iaculis feugiat arcunum fermentum hendrerit. Suspendisse auctor labor nisi, et interdum diam facilisis, aliquam pulvinar semi egetis belle sollicitudin ut. Nullam tincidun finibustus scelerisque.</p>\r\n          <a href=\"#\">Read more</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"video-holder\">\r\n          <div class=\"play-button-holder\">\r\n            <a href=\"#\" class=\"play-button icon-play2\"></a>\r\n          </div>\r\n          <img src=\"assets/images/video-placeholder.jpg\" alt=\"Video\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<team-home></team-home>\r\n\r\n<testimonial-home></testimonial-home>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/public/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"register\">\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <h1>Login</h1>\r\n          <p>Login to see your videos</p>\r\n          <form (ngSubmit)=\"login(email.value, password.value)\">\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" class=\"form-control {{error && error.email && 'is-invalid'}}\" id=\"email-login\" #email placeholder=\"name@example.com\" required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.email}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" class=\"form-control {{error && error.password && 'is-invalid'}}\" id=\"password-login\" #password placeholder=\"Password\" required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.password}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n              <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Sign in</button>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <a routerLink=\"/forgotpassword\">Forgot pasword?</a>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/components/public/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.error = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.isSubmitting = true;
        var user = {
            email: email,
            password: password
        };
        this.loginService.login(user)
            .then(function (response) {
            _this.isSubmitting = false;
            _this.error = [];
            if (response.errors) {
                response.errors.forEach(function (e) { return _this.error[e.param] = e.msg; });
            }
            else if (response && response.admin) {
                _this.router.navigateByUrl('/admin');
            }
            else {
                _this.router.navigateByUrl('/member');
            }
        })
            .catch(function (err) { return console.error(err); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/public/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
    withCredentials: true
};
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/login"; // URL to web api
    }
    /** POST: add a new hero to the server */
    LoginService.prototype.login = function (user) {
        return this.http
            .post(this.url, JSON.stringify(user), httpOptions)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        //console.error('An error occurred', console.log(error)); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/public.component.html":
/***/ (function(module, exports) {

module.exports = "<header-public></header-public>\r\n\r\n<main role=\"main\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicComponent = (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public',
            template: __webpack_require__("../../../../../src/app/components/public/public.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"register\">\r\n  <div class=\"container\">\r\n    <div class=\"base-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <h1>Register</h1>\r\n          <p>Register here for your video.</p>\r\n          <div *ngIf=\"success\">\r\n            <div class=\"alert alert-success\" role=\"alert\">\r\n              You created your account, you can now <a routerLink=\"/login\">Login</a>\r\n            </div>\r\n          </div>\r\n          <form (ngSubmit)=\"add(salutation.value, lastname.value, firstname.value, email.value, password.value)\" *ngIf=\"!success\">\r\n            <div class=\"form-group\">\r\n              <select #salutation class=\"form-control\">\r\n                <option value=\"Mr.\">Mr</option>\r\n                <option value=\"Ms.\">Ms</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control {{error && error.firstname && 'is-invalid'}}\" id=\"firstname\" #firstname placeholder=\"Firstname\" required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.firstname}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control {{error && error.lastname && 'is-invalid'}}\" id=\"lastname\" placeholder=\"Lastname\" #lastname required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.lastname}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" class=\"form-control {{error && error.email && 'is-invalid'}}\" id=\"email\" placeholder=\"name@example.com\" #email required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.email}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" class=\"form-control {{error && error.password && 'is-invalid'}}\" id=\"password\" placeholder=\"Password\" #password required>\r\n              <div class=\"invalid-feedback\">\r\n                {{error && error.password}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button *ngIf=\"isSubmitting\" class=\"btn btn-default\" disabled><img src=\"assets/images/ajax-loader.gif\" /> Loading...</button>\r\n              <button *ngIf=\"!isSubmitting\" type=\"submit\" class=\"btn\">Register</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/components/public/signup/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.error = {};
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.add = function (salutation, lastname, firstname, email, password) {
        var _this = this;
        this.isSubmitting = true;
        var user = {
            salutation: salutation,
            lastname: lastname,
            firstname: firstname,
            email: email,
            password: password
        };
        this.userService.addUser(user)
            .then(function (response) {
            _this.isSubmitting = false;
            _this.error = [];
            if (response.errors) {
                response.errors.forEach(function (e) { return _this.error[e.param] = e.msg; });
            }
            else {
                _this.success = true;
            }
        })
            .catch(function (err) { return console.error(err); });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/public/signup/signup.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public/signup/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
    withCredentials: true
};
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/signup"; // URL to web api
    }
    /** POST: add a new hero to the server */
    UserService.prototype.addUser = function (user) {
        return this.http
            .post(this.url, JSON.stringify(user), httpOptions)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        //console.error('An error occurred', console.log(error)); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/guard/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
    withCredentials: true
};
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/authcheck"; // URL to web api
    }
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.http
            .get(this.url, httpOptions)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        //console.error('An error occurred', console.log(error)); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/guard/guard-admin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/guard/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
    withCredentials: true
};
var GuardAdmin = (function () {
    function GuardAdmin(router, http, authenticationService) {
        this.router = router;
        this.http = http;
        this.authenticationService = authenticationService;
    }
    GuardAdmin.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authenticationService.isAuthenticated()
            .then(function (response) {
            if (response && response.loggedIn && response.admin) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        })
            .catch(function (err) {
            _this.router.navigate(['/login']);
            return false;
        });
    };
    GuardAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], GuardAdmin);
    return GuardAdmin;
}());



/***/ }),

/***/ "../../../../../src/app/guard/guard-member.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardMember; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/guard/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
    withCredentials: true
};
var GuardMember = (function () {
    function GuardMember(router, http, authenticationService) {
        this.router = router;
        this.http = http;
        this.authenticationService = authenticationService;
    }
    GuardMember.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authenticationService.isAuthenticated()
            .then(function (response) {
            if (response && response.loggedIn) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        })
            .catch(function (err) {
            _this.router.navigate(['/login']);
            return false;
        });
    };
    GuardMember = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], GuardMember);
    return GuardMember;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <nav>\r\n          <ul>\r\n            <li><span class=\"icon-waves\"></span><a href=\"#\">About</a></li>\r\n            <li><span class=\"icon-waves\"></span><a href=\"#\">Boards</a></li>\r\n            <li><span class=\"icon-waves\"></span><a href=\"#\">Accessoires</a></li>\r\n            <li><span class=\"icon-waves\"></span><a href=\"#\">Blog</a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <nav>\r\n          <ul>\r\n            <li><span class=\"icon-waves\"></span><a href=\"#\">Technology</a></li>\r\n            <li><span class=\"icon-waves\"></span><a href=\"#\">Team</a></li>\r\n            <li><span class=\"icon-waves\"></span><a href=\"#\">Dealers</a></li>\r\n            <li><span class=\"icon-waves\"></span><a href=\"#\">Contact us</a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"nl-form\">\r\n          <h2>Subscribe to our newsletter</h2>\r\n          <form action=\"#\">\r\n            <div class=\"form-holder\">\r\n              <span class=\"icon-mail-envelope-closed\"></span>\r\n              <input type=\"email\" placeholder=\"Your e-mail\" class=\"form-element\">\r\n              <button type=\"submit\" class=\"btn\">\r\n                <span class=\"icon-arrow-right2\"></span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <ul class=\"copyright\">\r\n          <li>© 2017 Surfers Co.</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link logout\" (click)=\"logout()\">Logout</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logout_service__ = __webpack_require__("../../../../../src/app/shared/logout/logout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(router, logoutService) {
        this.router = router;
        this.logoutService = logoutService;
    }
    LogoutComponent.prototype.ngOnInit = function () { };
    LogoutComponent.prototype.logout = function () {
        var _this = this;
        this.logoutService.logout()
            .then(function (response) {
            _this.router.navigateByUrl('/home');
        })
            .catch(function (err) { return console.error(err); });
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'link-logout',
            template: __webpack_require__("../../../../../src/app/shared/logout/logout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__logout_service__["a" /* LogoutService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/logout/logout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
    withCredentials: true
};
var LogoutService = (function () {
    function LogoutService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + "/api/logout"; // URL to web api
    }
    /** POST: add a new hero to the server */
    LogoutService.prototype.logout = function () {
        return this.http
            .get(this.url, httpOptions)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    LogoutService.prototype.handleError = function (error) {
        //console.error('An error occurred', console.log(error)); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LogoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LogoutService);
    return LogoutService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiURL: "https://coach.thecalicamp.com"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map