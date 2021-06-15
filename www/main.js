(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/starki/proyectos/jMaps/src/main.ts */"zUnb");


/***/ }),

/***/ "7mpd":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");












function CalendarComponent_div_4_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_div_4_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const x_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r5.ghostSpeed = x_r4; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "fast_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Velocidad x ", x_r4, "");
} }
const _c0 = function () { return [1, 8, 16, 32, 50]; };
function CalendarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function CalendarComponent_div_4_Template_mat_slider_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.inputSlider($event); })("onTouched", function CalendarComponent_div_4_Template_mat_slider_onTouched_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onTouched($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-menu", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CalendarComponent_div_4_button_13_Template, 5, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.ghostTimeStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", false)("invert", false)("max", ctx_r0.entrenamientoLocations.length)("ngModel", ctx_r0.SliderValue)("min", 1)("step", 1)("tickInterval", 1)("vertical", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));
} }
function CalendarComponent_div_5_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_div_5_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const entrenamiento_r10 = ctx_r15.$implicit; const i_r11 = ctx_r15.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.view(entrenamiento_r10, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Ver Entrenamiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CalendarComponent_div_5_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_div_5_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const entrenamiento_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.stopPaintGhost(entrenamiento_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Parar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CalendarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "hiking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-card-actions", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_div_5_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const entrenamiento_r10 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.delete(entrenamiento_r10.start); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CalendarComponent_div_5_button_23_Template, 5, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CalendarComponent_div_5_button_24_Template, 5, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entrenamiento_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0\u00A0 ", entrenamiento_r10.fecha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entrenamiento_r10.tiempo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", entrenamiento_r10.pasos, " pasos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entrenamiento_r10.distancia);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entrenamiento_r10.velocidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !entrenamiento_r10.play);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", entrenamiento_r10.play);
} }
moment__WEBPACK_IMPORTED_MODULE_1__["locale"]('es-us');
class CalendarComponent {
    constructor(appService) {
        this.Entrenamientos = [];
        this.SliderValue = 0;
        //url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
        this.url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        this.SliderChanging = false;
        this.value_ant = 0;
        this.formatLabel = (value) => {
            if (value != this.value_ant && value < this.entrenamientoLocations.length) {
                this.hora = new Date(this.entrenamientoLocations[value].time).toTimeString().substr(0, 8);
            }
            else {
                this.hora = new Date(this.entrenamientoLocations[this.entrenamientoLocations.length - 1].time).toTimeString().substr(0, 5);
            }
            return this.hora;
        };
        this.IndexClick = 0;
        this.ghostTime = new Date();
        this.ghostStartPos = 0;
        this.ghostTimeStr = "";
        this.arr = [];
        this.ghostSpeed = 8;
        this.endTime = "";
        this.startTime = "";
        this.appService = appService;
    }
    onTouched(e) {
        console.log(e);
    }
    inputSlider(e) {
        console.log(e);
        this.SliderChanging = true;
        clearTimeout(this.timeSlider);
        this.timeSlider = setTimeout(() => {
            this.SliderChange(e);
            this.SliderChanging = false;
        }, 250);
    }
    ngOnDestroy() {
        clearInterval(this.MapInterval);
        clearTimeout(this.timeSlider);
        if (this.Entrenamientos.length)
            this.Entrenamientos[this.IndexClick].play = false;
    }
    SliderChange(e) {
        if (this.entrenamientoLocations.length <= e.value) {
            this.SliderChanging = false;
            return;
        }
        let temp = [];
        this.map.remove();
        this.drawMap();
        this.ghostMark = "";
        this.arr = [];
        this.ghostMark = "";
        clearInterval(this.MapInterval);
        this.MapInterval = "";
        this.ghostTime = new Date(this.entrenamientoLocations[e.value].time);
        for (let x = 0; x < e.value; x++) {
            let location = this.entrenamientoLocations[x];
            let pos = [location.latitude, location.longitude];
            temp.push(pos);
        }
        L.polyline(temp, { color: 'blue', weight: 4, opacity: 0.2 }).addTo(this.map);
        this.ghostStartPos = e.value;
        this.startPaintGhost();
        this.SliderChanging = false;
        console.log(e);
    }
    getEntrenamientos() {
        let tmp = this.appService.localSt.retrieve('entrenamientos');
        tmp.forEach(element => {
            //  if(element.distancia)
            this.Entrenamientos.push(element);
        });
        console.log(this.Entrenamientos);
        this.Entrenamientos.forEach(entrenamiento => {
            let fecha = new Date(entrenamiento.start);
            entrenamiento.fecha = moment__WEBPACK_IMPORTED_MODULE_1__(fecha).format('LL');
            entrenamiento.pasos = entrenamiento.pasos + entrenamiento.pasos_acumulados;
            let miliseg = entrenamiento.stop - entrenamiento.start - (entrenamiento.paused_time * 1000);
            entrenamiento.tiempo = new Date(miliseg).toISOString().substr(11, 8);
            let kmTotales = 0;
            let i = 0;
            /*REMOVER LUEGO */
            for (let x = 0; x < entrenamiento.Locations.length; x++) {
                let pos1 = entrenamiento.Locations[x];
                let pos2 = entrenamiento.Locations[x + 1];
                if ((x + 1) < entrenamiento.Locations.length) {
                    kmTotales += this.appService.getDistanceFromLatLonInKm(pos1.latitude, pos1.longitude, pos2.latitude, pos2.longitude);
                }
            }
            /*REMOVER LUEGO */
            console.log(kmTotales + 'KM');
            entrenamiento.distancia = kmTotales.toFixed(2) + 'Km';
            //entrenamiento.velocidad=entrenamiento.velocidad_promedio/3.6;
            entrenamiento.velocidad = (entrenamiento.velocidad_promedio / 1000 * 3.6).toFixed(2) + ' K/h';
        });
    }
    ngOnInit() {
        this.getEntrenamientos();
        this.drawMap();
        this.appService.onEntrenamientoChange().subscribe(data => {
            console.log(data);
            switch (data.action) {
                case 'stop':
                    this.getEntrenamientos();
                    break;
            }
        });
    }
    delete(start) {
        let arr = [];
        this.IndexClick = 0;
        for (let x = 0; x < this.Entrenamientos.length; x++)
            if (this.Entrenamientos[x].start != start) {
                arr.push(this.Entrenamientos[x]);
            }
        this.Entrenamientos = arr;
        this.appService.localSt.store('entrenamientos', this.Entrenamientos);
    }
    view(entrenamiento, index) {
        if (this.IndexClick != index) {
            this.Entrenamientos[this.IndexClick].play = false;
        }
        this.IndexClick = index;
        entrenamiento.play = true;
        this.entrenamientoLocations = entrenamiento.Locations;
        this.ghostStartPos = 0;
        this.arr = [];
        this.ghostMark = "";
        clearInterval(this.MapInterval);
        this.MapInterval = "";
        setTimeout(() => {
            if (this.map)
                this.map.remove();
            this.drawMap();
            this.startPaintGhost();
            setTimeout(() => {
                document.getElementsByTagName('mat-drawer-content')[0].scrollTo(0, 0);
            }, 100);
        }, 100);
    }
    stopPaintGhost(entrenamiento) {
        entrenamiento.play = false;
        clearInterval(this.MapInterval);
        this.MapInterval = "";
    }
    startPaintGhost() {
        if (!this.entrenamientoLocations.length)
            return;
        this.ghostTime = new Date(this.entrenamientoLocations[this.ghostStartPos].time);
        this.startTime = new Date(this.entrenamientoLocations[0].time).toTimeString().substr(0, 8);
        this.endTime = new Date(this.entrenamientoLocations[this.entrenamientoLocations.length - 1].time).toTimeString().substr(0, 8);
        this.MapInterval = setInterval(() => {
            this.ghostTime.setMilliseconds(this.ghostTime.getMilliseconds() + 20 * this.ghostSpeed);
            if (this.ghostStartPos < this.entrenamientoLocations.length - 1) {
                let location = this.entrenamientoLocations[this.ghostStartPos];
                let posTime = new Date(this.entrenamientoLocations[this.ghostStartPos].time);
                this.ghostTimeStr = this.ghostTime.toTimeString().substr(0, 8);
                //console.log(this.ghostTimeStr);
                if (this.ghostTime >= posTime) {
                    if (!this.ghostMark) {
                        this.ghostMark = L.marker([location.latitude, location.longitude], {
                            title: 'sadasdasd',
                            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
                                iconSize: [25, 41],
                                iconAnchor: [13, 41],
                                iconUrl: 'assets/marker-icon.png',
                            }),
                        }).addTo(this.map);
                        //this.ghostMark.setRotationAngle(180);
                    }
                    else {
                        let pos = [location.latitude, location.longitude];
                        this.ghostMark.setLatLng(pos);
                        let obj = document.getElementById("agujasRep");
                        if (obj) {
                            obj.style.transform = "rotate(" + location.bearing + "deg)";
                        }
                        this.ghostMark.bindTooltip('⌚' + this.ghostTimeStr + ' ⚙' + (location.speed * 3.6).toFixed(2) + 'Km/h').openTooltip();
                        //this.ghostMark.setRotationAngle(180);
                        //this.ghostMark.setZoom(7)
                        this.map.panTo(this.ghostMark.getLatLng(), { maxZoom: 10 });
                        // L.circle(pos, {radius: 1500,color:(pos[0]*10).toFixed(0)}).addTo(this.map);
                        //this.SliderValue=this.index;
                        this.ghostStartPos++;
                        if (!this.SliderChanging)
                            this.SliderValue = this.ghostStartPos;
                        this.arr.push(this.ghostMark.getLatLng());
                        if (this.arr.length == 2) {
                            let polyline = L.polyline(this.arr, { color: 'blue', weight: 4, opacity: 0.2 }).addTo(this.map);
                            this.arr = [this.arr[1]];
                        }
                    }
                }
            }
            else {
                this.Entrenamientos[this.IndexClick].play = false;
            }
        }, 20);
    }
    drawMap() {
        this.map = new L.map('map_calendar');
        // create the tile layer with correct attribution
        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(this.url, { minZoom: 0, maxZoom: 20, attribution: osmAttrib });
        this.map.setView(new L.LatLng(-31.388246158367238, -64.48196783165659), 15);
        this.layer = this.map.addLayer(osm);
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], decls: 6, vars: 3, consts: [[2, "height", "50%", 3, "hidden"], ["id", "map_calendar", 2, "height", "100%"], ["src", "assets/compassFondo.svg", 1, "CompassFondo"], ["id", "agujasRep", "src", "assets/brujula.svg", 1, "CompassAgujas"], [4, "ngIf"], ["style", "margin: 5px;", 4, "ngFor", "ngForOf"], [2, "position", "absolute"], [2, "position", "absolute", "left", "40%"], [2, "position", "absolute", "right", "13%"], ["aria-labelledby", "example-name-label", 2, "width", "85%", "z-index", "20000", 3, "disabled", "invert", "max", "ngModel", "min", "step", "tickInterval", "vertical", "input", "onTouched"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 2, "position", "absolute", "right", "10px", "margin-top", "5px", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [2, "margin", "5px"], [1, "example-card"], [2, "font-size", "20px", "width", "100%", "padding-bottom", "20px"], [1, "icon-border"], [2, "display", "flex"], [2, "font-size", "16px", "width", "30%", "padding-bottom", "0px"], [2, "font-size", "16px", "width", "30%", "text-align", "right"], [2, "text-align", "right"], [2, "text-align", "right", "width", "100%"], ["mat-button", "", "mat-raised-button", "", "color", "warn", 3, "click"], ["mat-list-icon", ""], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "click"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 3, "click"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CalendarComponent_div_4_Template, 14, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CalendarComponent_div_5_Template, 25, 7, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.entrenamientoLocations);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.entrenamientoLocations);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.Entrenamientos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"]], styles: [".icon-border[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 100px;\n  padding: 5px;\n  vertical-align: middle;\n}\n\n.myCSSClass[_ngcontent-%COMP%] {\n  background: green;\n  border: 2px solid cyan;\n}\n\n.leaflet-tooltip-left.myCSSClass[_ngcontent-%COMP%]::before {\n  border-left-color: cyan;\n}\n\n.leaflet-tooltip-right.myCSSClass[_ngcontent-%COMP%]::before {\n  border-right-color: cyan;\n}\n\n.CompassFondo[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100px;\n  right: 0;\n  margin-right: 10px;\n}\n\n.CompassAgujas[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100px;\n  top: 7px;\n  right: 0;\n  margin-right: 9px;\n}\n\n.mapButton[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 80px;\n  right: 20px;\n  z-index: 100000;\n}\n\n  .leaflet-tooltip {\n  font-size: 14px;\n}\n\n .mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label {\n  width: 50px;\n  height: 50px;\n  top: -60px;\n  right: -25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVBO0VBRUksaUJBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVFO0VBQ0UsdUJBQUE7QUFDSjs7QUFDRTtFQUNFLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUFvQixhQUFBO0VBQWMsWUFBQTtFQUFlLFFBQUE7RUFBUyxrQkFBQTtBQU85RDs7QUFKQTtFQUNJLGtCQUFBO0VBQW9CLGFBQUE7RUFBYyxZQUFBO0VBQWMsUUFBQTtFQUFRLFFBQUE7RUFBUyxpQkFBQTtBQVlyRTs7QUFWQTtFQUNJLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxXQUFBO0VBQVksZUFBQTtBQWdCbEQ7O0FBYkE7RUFDSSxlQUFBO0FBZ0JKOztBQWRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWlCRiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmljb24tYm9yZGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm15Q1NTQ2xhc3Mge1xuICAgIFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN5YW5cbiAgfVxuICAubGVhZmxldC10b29sdGlwLWxlZnQubXlDU1NDbGFzczo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogY3lhbjtcbiAgfVxuICAubGVhZmxldC10b29sdGlwLXJpZ2h0Lm15Q1NTQ2xhc3M6OmJlZm9yZSB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBjeWFuO1xuICB9XG4uQ29tcGFzc0ZvbmRve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMTAwMDt3aWR0aDogMTAwcHg7ICByaWdodDowOyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5Db21wYXNzQWd1amFze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMTAwMDt3aWR0aDogMTAwcHg7IHRvcDo3cHg7cmlnaHQ6MDsgbWFyZ2luLXJpZ2h0OjlweDtcbn1cbi5tYXBCdXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDgwcHg7IHJpZ2h0OiAyMHB4O3otaW5kZXg6IDEwMDAwMDtcbn1cblxuOjpuZy1kZWVwIC5sZWFmbGV0LXRvb2x0aXAge1xuICAgIGZvbnQtc2l6ZTogMTRweDsgICAgXG59XG46Om5nLWRlZXAubWF0LXNsaWRlcjpub3QoLm1hdC1zbGlkZXItZGlzYWJsZWQpLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IC02MHB4O1xuICByaWdodDogLTI1cHg7XG4gIFxufVxuIl19 */"] });


/***/ }),

/***/ "9ixo":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 34, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "assets/remo.jpg", "alt", "Photo of a Shiba Inu"], [2, "font-size", "20px", "font-weight", "400"], ["mat-button", ""]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mis Pr\u00E1cticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "por Juan F. Calvo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Una aplicaci\u00F3n para ayudarte a entrenar!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Simple de usar! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Registra todos los eventos de tu entrenamiento! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Puedes visualizarlas despues de entrenar! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " No utiliza tus datos! (solo el mapa) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " No requiere Registrarse! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " No tiene Publicidad! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Utiliza mapa: https://www.openstreetmap.org/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Que lo disfrutes! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Me gusta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Comparir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('icon.png');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2luaWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");





moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('es-us');
function reverse(s) {
    return s.split("").reverse().join("");
}
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
class AppService {
    constructor(localSt) {
        this.localSt = localSt;
        this.subjectLocation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.subjectSteps = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.subjectEntrenamiento = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.Entrenamientos = [];
        console.log('Se construye  AppService!');
        if (this.localSt.retrieve('Entrenamientos')) {
            this.Entrenamientos = this.localSt.retrieve('Entrenamientos');
        }
        else {
            this.localSt.store('Entrenamientos', []);
        }
        if (this.localSt.retrieve('entrenamiento'))
            this.entrenamiento = this.localSt.retrieve('entrenamiento');
        else {
            this.entrenamiento = { start: new Date(), stop: new Date(), started: false, paused: false, pasos: 0, pasos_acumulados: 0, distancia: "", velocidad_promedio: 0, Locations: [] };
            this.localSt.store('entrenamiento', this.entrenamiento);
        }
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    setBackgroundGeolocationTitle(title) {
        BackgroundGeolocation.tiles;
    }
    setEntrenamientoStop() {
        this.entrenamiento.started = false;
        this.entrenamiento.stop = new Date().getTime();
        this.Entrenamientos.push(this.entrenamiento);
        this.localSt.store('Entrenamientos', this.Entrenamientos);
        this.entrenamiento = { start: new Date(), stop: new Date(), started: false, paused: false, pasos: 0, pasos_acumulados: 0, distancia: "", velocidad_promedio: 0, Locations: [] };
        this.localSt.store('entrenamiento', this.entrenamiento);
        this.stopBackGroundGeoLocation();
        this.sendEntrenamiento('stop');
    }
    setEntrenamientoPause() {
        this.entrenamiento.started = true;
        this.entrenamiento.paused = !this.entrenamiento.paused;
        if (!this.entrenamiento.paused) {
            this.startBackGroundGeoLocation();
            // this.getPasos();
        }
        else {
            this.entrenamiento.pasos_acumulados += this.entrenamiento.pasos;
            this.entrenamiento.pasos = 0;
            this.stopBackGroundGeoLocation();
        }
        this.sendEntrenamiento('pause');
        this.localSt.store('entrenamiento', this.entrenamiento);
    }
    getEntrenamiento(propiedad) {
        if (propiedad)
            return this.entrenamiento[propiedad];
        return this.entrenamiento;
    }
    setEntrenamientoStart() {
        /* this.entrenamiento.started=true;
        this.entrenamiento.paused_time=0;
        this.entrenamiento.paused=false;
        this.entrenamiento.start=new Date().getTime();
        this.entrenamiento.stop=""; */
        this.entrenamiento = { paused_time: 0, start: new Date().getTime(), stop: new Date().getTime(), started: true, paused: false, pasos: 0, pasos_acumulados: 0, distancia: "", velocidad_promedio: 0, Locations: [] };
        this.sendEntrenamiento('start');
        this.localSt.store('entrenamiento', this.entrenamiento);
        this.startBackGroundGeoLocation();
    }
    getPasos() {
        //only for IPHONE
        var successHandler = function (pedometerData) {
            console.log("getPasos", pedometerData);
        };
        var options = {
            "startDate": this.entrenamiento.start,
            "endDate": new Date()
        };
        pedometer.queryData(successHandler, (onError) => { console.log(onError); }, options);
    }
    ngOnInit() {
        console.log('Se Inicia  AppService!');
    }
    isRecog() {
        let successCallback = (d) => {
            console.log("sussess isRec");
        };
        let errorCallback = () => {
            console.log("error");
        };
        window.plugins.speechRecognition.isRecognitionAvailable(successCallback, errorCallback);
    }
    Parar() {
        window.plugins.speechRecognition.stopListening((a) => { console.log(a); }, () => { console.log("saff"); });
    }
    Parser(frase) {
        let palabras = frase.split(' ');
        let saluda = 0;
        let a = 0;
        let nombre = "";
        let decir = "";
        let quien = 0;
        let es = 0;
        palabras.forEach(palabra => {
            if (editDistance(palabra, 'saluda') < 2)
                saluda = 1;
            if (editDistance(palabra, 'a') < 2)
                a = 1;
            if (saluda == 1 && a == 1) {
                nombre = palabra;
            }
            if (editDistance(palabra, 'que') < 2)
                quien = 1;
            if (editDistance(palabra, 'haces') < 5)
                es = 1;
            if (quien == 1 && es == 1) {
                nombre = palabra;
            }
            console.log("posibles palabras:" + palabra);
        });
        if (saluda && a && nombre) {
            this.textToSpeech("Buenas noches " + nombre + ", que la disfrutes");
            return true;
        }
        if (quien && es && nombre) {
            this.textToSpeech("Que onda " + nombre + "!,dejá eso y tirate un pedo!");
            return true;
        }
        return false;
    }
    Escuchar() {
        window.plugins.speechRecognition.requestPermission(() => { console.log("fdsf"); }, () => { console.log("dsff"); });
        let options = {
            language: "es-AR"
        };
        let successCallback = (text) => {
            console.log(text);
            let frase = "" + text[0];
            let si = false;
            text.forEach((element) => {
                if (editDistance('quién es perches', element) < 2) {
                    this.textToSpeech("Perches, es mi amigo Gay");
                    si = true;
                    return;
                }
                else if (editDistance('quién es fede', element) < 2) {
                    this.textToSpeech("Fede, es mi amigo Gay");
                    si = true;
                }
                else if (editDistance('qué hora es', element) < 2) {
                    let time = new Date();
                    let h = time.getHours();
                    let m = time.getMinutes();
                    let son = "son";
                    if (h == 1)
                        son = "es";
                    if (h == 12 || h == 1 || h == 2) {
                        this.textToSpeech(son + " las " + h + " y " + m + ", es la hora de volver a sus casitas");
                    }
                    else {
                        this.textToSpeech(son + " las " + h + " y " + m);
                    }
                    si = true;
                }
                else {
                    si = this.Parser(element);
                }
            });
            if (!si)
                this.textToSpeech("Y al revés:" + reverse("" + text[0]));
        };
        window.plugins.speechRecognition.startListening(successCallback, () => { console.log('errorss'); }, options);
    }
    sendSteps(message) {
        this.subjectSteps.next({ data: message });
    }
    sendLocation(message) {
        this.subjectLocation.next({ info: message });
    }
    sendEntrenamiento(action) {
        this.subjectEntrenamiento.next({ info: this.entrenamiento, action: action });
    }
    clearMessages() {
        this.subjectLocation.next();
    }
    onStepsChange() {
        return this.subjectSteps.asObservable();
    }
    onEntrenamientoChange() {
        return this.subjectEntrenamiento.asObservable();
    }
    onLocationChange() {
        return this.subjectLocation.asObservable();
    }
    getStatus() {
        return "ok";
    }
    verConfig() {
        BackgroundGeolocation.showAppSettings();
    }
    setTextBackGround(text) {
        if (BackgroundGeolocation)
            BackgroundGeolocation.getConfig((a => {
                a.notificationText = text;
                BackgroundGeolocation.configure(a);
            }));
    }
    StartServiceMobile() {
        BackgroundGeolocation.configure({
            startOnBoot: false,
            locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
            desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
            stationaryRadius: 2,
            distanceFilter: 2,
            notificationsEnabled: true,
            notificationTitle: 'Seguimiento en segundo plano',
            notificationText: '00:00:00',
            debug: _angular_compiler__WEBPACK_IMPORTED_MODULE_1__["TemplateParseResult"],
            interval: 2000,
            fastestInterval: 3000,
            activitiesInterval: 5000,
            stopOnTerminate: false // enable this to clear background location settings when the app terminates
        });
        BackgroundGeolocation.on('location', (location) => {
            console.log(location);
            //('Vel: '+(data.speed).toFixed(2)+'M/s Prom:'+(this.velocidad_promedio/index).toFixed(2)+'M/s Dist:'+(this.velocidad_promedio*3.6/1000).toFixed(2)+'Km')
            this.sendLocation(location);
            this.entrenamiento.Locations.push(location);
            let index = 0;
            this.entrenamiento.velocidad_promedio = 0;
            let kmTotales = 0;
            for (let x = 0; x < this.entrenamiento.Locations.length; x++) {
                let pos1 = this.entrenamiento.Locations[x];
                let pos2 = this.entrenamiento.Locations[x + 1];
                if ((x + 1) < this.entrenamiento.Locations.length) {
                    kmTotales += this.getDistanceFromLatLonInKm(pos1.latitude, pos1.longitude, pos2.latitude, pos2.longitude);
                }
            }
            //this.entrenamiento.distancia=(this.entrenamiento.velocidad_promedio*3.6/1000).toFixed(2)+'Km';
            this.entrenamiento.distancia = kmTotales.toFixed(2) + 'Km';
            this.localSt.store('entrenamiento', this.entrenamiento);
            this.sendEntrenamiento('newPosition');
            // handle your locations here
            // to perform long running operation on iOS
            // you need to create background task
        });
        BackgroundGeolocation.on('stationary', (stationaryLocation) => {
            console.log("Stationary");
            console.log(stationaryLocation);
            // handle stationary locations here
        });
        BackgroundGeolocation.checkStatus((status) => {
            console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
            console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
            console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);
            // you don't need to check status before start (this is just the example)
            if (!status.isRunning) {
                this.entrenamiento.paused = true;
                this.sendEntrenamiento('checkStatus');
            }
        });
        navigator.accelerometer.getCurrentAcceleration((data) => {
            console.log(data);
        }, () => {
            console.log('errrorrr acee');
        });
        function onSuccess(acceleration) {
            console.log('Acceleration X: ' + acceleration.x + '\n' +
                'Acceleration Y: ' + acceleration.y + '\n' +
                'Acceleration Z: ' + acceleration.z + '\n' +
                'Timestamp: ' + acceleration.timestamp + '\n');
        }
        function onError() {
            alert('onError!');
        }
        var options = { frequency: 3000 }; // Update every 3 seconds
        var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        //        navigator.accelerometer.clearWatch(watchID);
    }
    startBackGroundGeoLocation() {
        BackgroundGeolocation.checkStatus((status) => {
            console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
            console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
            console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);
            if (!status.authorization) {
                this.checkAuth();
            }
            // you don't need to check status before start (this is just the example)
            if (!status.isRunning) {
                BackgroundGeolocation.start(); //triggers start on start event
                var successHandler = (pedometerData) => {
                    // this.sendSteps(pedometerData);
                    console.log(pedometerData);
                    this.entrenamiento.pasos = pedometerData.numberOfSteps;
                };
                var onError = (e) => {
                    console.log(e);
                };
                pedometer.startPedometerUpdates(successHandler, onError);
            }
        });
        BackgroundGeolocation.startTask(function (taskKey) {
            console.log(taskKey);
        });
    }
    stopBackGroundGeoLocation() {
        BackgroundGeolocation.checkStatus((status) => {
            console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
            console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
            console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);
            // you don't need to check status before start (this is just the example)
            if (status.isRunning) {
                BackgroundGeolocation.stop(); //triggers start on start event
                pedometer.stopPedometerUpdates((success) => {
                    console.log("stop", success);
                }, (error) => {
                    console.log("stop", error);
                });
            }
        });
    }
    checkAuth() {
        BackgroundGeolocation.on('authorization', function (status) {
            console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
            if (status !== BackgroundGeolocation.AUTHORIZED) {
                // we need to set delay or otherwise alert may not be shown
                setTimeout(function () {
                    var showSettings = confirm('App requires location tracking permission. Would you like to open app settings?');
                    if (showSettings) {
                        return BackgroundGeolocation.showAppSettings();
                    }
                }, 1000);
            }
        });
    }
    textToSpeech(text, rate = 1) {
        TTS
            .speak({
            text: text,
            locale: 'es-AR',
            rate: rate
        }).then(function (a) {
            console.log(a);
            console.log("se dijo" + text);
        }, function (reason) {
            console.log(reason);
        });
    }
    getEntrenamientos(location) {
        let tmp = this.localSt.retrieve('entrenamientos');
        let Entrenamientos = [];
        tmp.forEach(element => {
            //  if(element.distancia)
            Entrenamientos.push(element);
        });
        Entrenamientos.forEach(entrenamiento => {
            let fecha = new Date(entrenamiento.start);
            entrenamiento.fecha = moment__WEBPACK_IMPORTED_MODULE_2__(fecha).format('LL');
            entrenamiento.fecha_corta = moment__WEBPACK_IMPORTED_MODULE_2__(fecha).format('MMM D');
            entrenamiento.pasos = entrenamiento.pasos + entrenamiento.pasos_acumulados;
            entrenamiento.inArea = false;
            let miliseg = entrenamiento.stop - entrenamiento.start - (entrenamiento.paused_time * 1000);
            entrenamiento.tiempo = new Date(miliseg).toISOString().substr(11, 8);
            if (entrenamiento.Locations.length && location) {
                let LaPos = entrenamiento.Locations[0];
                let mts = this.getDistanceFromLatLonInKm(LaPos.latitude, LaPos.longitude, location.latitude, location.longitude) * 1000;
                if (mts < 80)
                    entrenamiento.inArea = true;
            }
            let kmTotales = 0;
            let i = 0;
            /*REMOVER LUEGO */
            for (let x = 0; x < entrenamiento.Locations.length; x++) {
                let pos1 = entrenamiento.Locations[x];
                let pos2 = entrenamiento.Locations[x + 1];
                //Medir Distancia 
                if ((x + 1) < entrenamiento.Locations.length) {
                    kmTotales += this.getDistanceFromLatLonInKm(pos1.latitude, pos1.longitude, pos2.latitude, pos2.longitude);
                }
            }
            /*REMOVER LUEGO */
            entrenamiento.distancia = kmTotales.toFixed(2) + 'Km';
            //entrenamiento.velocidad=entrenamiento.velocidad_promedio/3.6;
            entrenamiento.velocidad = (entrenamiento.velocidad_promedio / 1000 * 3.6).toFixed(2) + ' K/h';
        });
        console.log(Entrenamientos);
        return Entrenamientos;
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GepA":
/*!*********************************************************!*\
  !*** ./src/app/entrenamientos/entrenamientos.module.ts ***!
  \*********************************************************/
/*! exports provided: EntrenamientosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrenamientosModule", function() { return EntrenamientosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _entrenamientos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrenamientos.component */ "oprC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const thisRoute = [
    {
        path: 'entrenamientos',
        component: _entrenamientos_component__WEBPACK_IMPORTED_MODULE_1__["EntrenamientosComponent"]
    }
];
class EntrenamientosModule {
}
EntrenamientosModule.ɵfac = function EntrenamientosModule_Factory(t) { return new (t || EntrenamientosModule)(); };
EntrenamientosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: EntrenamientosModule });
EntrenamientosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__["LeafletModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(thisRoute)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](EntrenamientosModule, { declarations: [_entrenamientos_component__WEBPACK_IMPORTED_MODULE_1__["EntrenamientosComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__["LeafletModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "MpVM":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/*! exports provided: InicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.component */ "9ixo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const thisRoute = [
    {
        path: 'inicio',
        component: _inicio_component__WEBPACK_IMPORTED_MODULE_1__["InicioComponent"]
    }
];
class InicioModule {
}
InicioModule.ɵfac = function InicioModule_Factory(t) { return new (t || InicioModule)(); };
InicioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: InicioModule });
InicioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(thisRoute)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](InicioModule, { declarations: [_inicio_component__WEBPACK_IMPORTED_MODULE_1__["InicioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "O51e":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.component */ "7mpd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const thisRoute = [
    {
        path: 'calendar',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"]
    }
];
class CalendarModule {
}
CalendarModule.ɵfac = function CalendarModule_Factory(t) { return new (t || CalendarModule)(); };
CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CalendarModule });
CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(thisRoute)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CalendarModule, { declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");














function AppComponent_mat_list_option_29_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_mat_list_option_29_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Iniciar Entrenamiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_list_option_30_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_mat_list_option_30_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.pause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pausar Entrenamiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_list_option_31_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_mat_list_option_31_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.pause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reanudar Entrenamiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_list_option_32_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_mat_list_option_32_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.stop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Finalizar Entrenamiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(appService, localSt, router, route) {
        this.localSt = localSt;
        this.router = router;
        this.route = route;
        this.title = 'jMaps';
        this.List = [];
        this.appService = appService;
    }
    ngOnDestroy() {
        console.log('Destroy app component');
    }
    ngOnInit() {
        //for Test
        //window.plugins.insomnia.allowSleepAgain()
        console.log("appStart");
        let entre = this.localSt.retrieve('entrenamiento');
        if (entre.started)
            this.router.navigate(['/entrenamientos']);
        let parent = this;
        document.addEventListener("deviceready", () => {
            console.log(parent);
            document.addEventListener("backbutton", (onBackKeyDown) => {
                console.log(onBackKeyDown);
                console.log(parent);
                switch (parent.router['location'].path()) {
                    case '/calendar':
                        break;
                }
            }, false);
            window.plugins.insomnia.keepAwake();
            window.addEventListener("deviceorientationabsolute", (event) => {
                //console.log(event);
                let obj = document.getElementById("agujas");
                if (obj) {
                    obj.style.transform = "rotate(" + event.alpha + "deg)";
                }
                // process event.alpha, event.beta and event.gamma
            }, true);
            console.log(device);
            console.log(navigator.compass);
            this.appService.StartServiceMobile();
            this.appService.checkAuth();
            this.router.navigate(['/inicio']);
            //if(this.localSt.retrieve('started'))
        }, false);
    }
    checkAuth() {
        this.appService.verConfig();
        this.appService.checkAuth();
    }
    stop() {
        this.router.navigate(['/entrenamientos']);
        this.appService.setEntrenamientoStop();
    }
    start() {
        this.router.navigate(['/entrenamientos']);
        this.appService.setEntrenamientoStart();
    }
    pause() {
        this.appService.setEntrenamientoPause();
    }
    testDecir(que) {
        this.appService.textToSpeech(que);
    }
    escuchar() {
        this.appService.Escuchar();
    }
    parar() {
        this.appService.Parar();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 65, vars: 11, consts: [[1, "full-container", 3, "hasBackdrop"], [1, "menu-container", 3, "mode", "click"], ["drawer", ""], [1, "menu-card"], ["mat-card-avatar", "", 1, "menu-header-image"], [3, "multiple"], ["shoes", ""], [3, "routerLink"], ["mat-list-icon", ""], [3, "click", 4, "ngIf"], [3, "click"], ["color", "primary"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "menu-icon", 3, "click"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_mat_drawer_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-selection-list", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "directions_run");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Entrenamiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Hist\u00F3rico de actividades");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AppComponent_mat_list_option_29_Template, 6, 0, "mat-list-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AppComponent_mat_list_option_30_Template, 5, 0, "mat-list-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AppComponent_mat_list_option_31_Template, 5, 0, "mat-list-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AppComponent_mat_list_option_32_Template, 6, 0, "mat-list-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-list-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_option_click_33_listener() { return ctx.checkAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-list-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_option_click_38_listener() { return ctx.escuchar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "mic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Comandos de voz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-toolbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-menu", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_50_listener() { return ctx.checkAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "voicemail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Check Auth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Entrenamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", "Over");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/entrenamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.appService.getEntrenamiento("started"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appService.getEntrenamiento("started") && !ctx.appService.getEntrenamiento("paused"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appService.getEntrenamiento("started") && ctx.appService.getEntrenamiento("paused"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appService.getEntrenamiento("started"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListOption"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.full-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.menu-card[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n\n.menu-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n  .mat-toolbar-row, .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n  .mat-list-base .mat-list-item .mat-list-item-content, .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n  .mat-list-base .mat-list-item .mat-list-item-content-reverse, .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content-reverse[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFFRjs7QUFFQTtFQUNFLGFBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5mdWxsLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWVudS1jYXJkIHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgLy9oZWlnaHQ6IDk1JTtcbn1cblxuLm1lbnUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG46Om5nLWRlZXAgLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBwYWRkaW5nOiAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudCwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogMDsgIFxufVxuXG46Om5nLWRlZXAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudC1yZXZlcnNlLCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQtcmV2ZXJzZSB7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _entrenamientos_entrenamientos_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entrenamientos/entrenamientos.module */ "GepA");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__["NgxWebstorageModule"].forRoot(),
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _entrenamientos_entrenamientos_module__WEBPACK_IMPORTED_MODULE_12__["EntrenamientosModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__["NgxWebstorageModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _entrenamientos_entrenamientos_module__WEBPACK_IMPORTED_MODULE_12__["EntrenamientosModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "oprC":
/*!************************************************************!*\
  !*** ./src/app/entrenamientos/entrenamientos.component.ts ***!
  \************************************************************/
/*! exports provided: EntrenamientosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrenamientosComponent", function() { return EntrenamientosComponent; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_rotatedmarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-rotatedmarker */ "qLfE");
/* harmony import */ var leaflet_rotatedmarker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_rotatedmarker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");













function EntrenamientosComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EntrenamientosComponent_div_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.clearGhost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "pets");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.ghostInfo, " ");
} }
function EntrenamientosComponent_button_9_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "radio_button_checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EntrenamientosComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EntrenamientosComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const entrenamiento_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.setGhost(entrenamiento_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "hiking");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EntrenamientosComponent_button_9_mat_icon_4_Template, 2, 0, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entrenamiento_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", entrenamiento_r13.fecha_corta, " ", entrenamiento_r13.distancia, " \u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", entrenamiento_r13.inArea);
} }
function EntrenamientosComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EntrenamientosComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.stopPaintGhost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Parar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EntrenamientosComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EntrenamientosComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.seguirLimites = !ctx_r19.seguirLimites; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "near_me_disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "No seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EntrenamientosComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EntrenamientosComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.seguirLimites = !ctx_r21.seguirLimites; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "near_me");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EntrenamientosComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EntrenamientosComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.startEntrenamiento(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Iniciar Entrenamiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EntrenamientosComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EntrenamientosComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.pauseEntrenamiento(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pausar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EntrenamientosComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EntrenamientosComponent_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.pauseEntrenamiento(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Reanudar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EntrenamientosComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EntrenamientosComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.stopEntrenamiento(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Finalizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class EntrenamientosComponent {
    constructor(appService, http) {
        this.http = http;
        this.showLayer = true;
        this.seguirLimites = true;
        this.tiempoEntrenamiento = "00:00:00";
        this.Locations = [];
        this.EntrenamientosHistory = [];
        this.ghostLocations = [];
        this.y = 0.01;
        this.x = 0.02;
        this.arr = [];
        //url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
        this.url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"])(this.url, { maxZoom: 16, attribution: '...' }),
                Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])([-31.389366, -64.494915], {
                    icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"])({
                        iconSize: [25, 41],
                        iconAnchor: [13, 41],
                        iconUrl: 'assets/marker-icon.png',
                        shadowUrl: 'assets/marker-shadow.png'
                    })
                }),
            ],
            zoom: 15,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])(-31.388246158367238, -64.48196783165659)
        };
        this.distanciaEntrenamiento = "0.0 Km";
        this.pasosEntrenamiento = "0 pasos";
        this.velocidadEntrenamiento = "Velocidad:0 M/s";
        this.mapHeight = 300;
        this.ghostInfo = "";
        this.index = 0;
        this.ghostTime = new Date();
        this.ghostStartPos = 0;
        this.ghostTimeStr = "";
        this.appService = appService;
    }
    ngOnDestroy() {
        clearInterval(this.TimerEntrenamiento);
        clearInterval(this.TimeCurrentLocation);
    }
    startEntrenamiento() {
        this.mark = "";
        this.map.remove();
        this.drawMap();
        this.Locations = [];
        this.appService.setEntrenamientoStart();
        if (this.ghostLocations)
            this.startPaintGhost();
    }
    clearGhost() {
        this.ghostLocations = [];
        this.ghostInfo = "";
    }
    setGhost(entrenamiento) {
        this.ghostLocations = entrenamiento.Locations;
        this.ghostInfo = entrenamiento.fecha_corta + ' Distancia:' + entrenamiento.distancia;
    }
    stopEntrenamiento() {
        this.appService.setEntrenamientoStop();
    }
    pauseEntrenamiento() {
        this.appService.setEntrenamientoPause();
    }
    getCurrentLocation() {
        navigator.geolocation.getCurrentPosition((p) => {
            this.currentLocation = p.coords;
            if (!this.lastPosition)
                this.lastPosition = { latitude: 0, longitude: 0 };
            let mts = this.appService.getDistanceFromLatLonInKm(this.lastPosition.latitude, this.lastPosition.longitude, this.currentLocation.latitude, this.currentLocation.longitude) * 1000;
            if (mts > 50)
                this.EntrenamientosHistory = this.appService.getEntrenamientos(this.currentLocation);
            this.lastPosition = p.coords;
            console.log(p);
        });
    }
    drawMap() {
        this.map = new L.map('map');
        // create the tile layer with correct attribution
        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(this.url, { minZoom: 0, maxZoom: 20, attribution: osmAttrib });
        this.map.setView(new L.LatLng(-31.388246158367238, -64.48196783165659), 15);
        this.layer = this.map.addLayer(osm);
    }
    ngOnInit() {
        this.mapHeight = window.innerHeight - 200;
        document.getElementById("map").style.height = this.mapHeight + 'px';
        this.entrenamiento = this.appService.getEntrenamiento();
        this.Locations = this.appService.getEntrenamiento('Locations');
        this.TimerEntrenamiento = setInterval(() => {
            this.entrenamiento = this.appService.getEntrenamiento();
            if (this.entrenamiento.started) {
                if (this.entrenamiento.paused)
                    this.entrenamiento.paused_time++;
                let miliseg = (((new Date()).getTime() - new Date(this.entrenamiento.start).getTime())) - this.entrenamiento.paused_time * 1000;
                this.distanciaEntrenamiento = this.entrenamiento.distancia;
                this.tiempoEntrenamiento = new Date(miliseg).toISOString().substr(11, 8);
                if (this.entrenamiento.paused) {
                    this.pasosEntrenamiento = this.entrenamiento.pasos_acumulados + " pasos";
                }
                else {
                    this.appService.setTextBackGround('🕑 ' + this.tiempoEntrenamiento + '  🚣🏾 ' + this.distanciaEntrenamiento);
                    this.pasosEntrenamiento = (this.entrenamiento.pasos_acumulados + this.entrenamiento.pasos) + " pasos";
                }
            }
        }, 1000);
        this.drawMap();
        this.dibuja();
        this.appService.onEntrenamientoChange().subscribe(data => {
            console.log(data);
            switch (data.action) {
                case 'stop':
                    break;
            }
            this.entrenamiento = data.info;
        });
        this.appService.onLocationChange().subscribe(data => {
            console.log("Location:", data);
            this.Locations.push(data.info);
            if (data.info.speed)
                this.velocidadEntrenamiento = (data.info.speed).toFixed(2) + ' M/s';
            this.dibuja();
        });
        this.appService.onStepsChange().subscribe(data => {
            console.log("Steps:", data);
        });
        setTimeout(() => {
            this.getCurrentLocation(); //llama a Service GetEntrenamientos Si la posición cambia
        }, 1000);
        this.TimeCurrentLocation = setInterval(() => {
            this.getCurrentLocation();
        }, 1000 * 60);
    }
    stopPaintGhost() {
        //this.index=0;
        clearInterval(this.MapInterval);
        this.MapInterval = "";
    }
    startPaintGhost() {
        clearInterval(this.MapInterval);
        this.map.remove();
        this.arr = [];
        this.drawMap();
        this.ghostMark = "";
        this.ghostStartPos = 0;
        this.index = 0;
        this.ghostTime = new Date(this.ghostLocations[this.ghostStartPos].time);
        this.MapInterval = setInterval(() => {
            this.ghostTime.setMilliseconds(this.ghostTime.getMilliseconds() + 1000);
            if (this.index < this.ghostLocations.length - 1) {
                let location = this.ghostLocations[this.index];
                let posTime = new Date(this.ghostLocations[this.index].time);
                this.ghostTimeStr = this.ghostTime.toTimeString().substr(0, 8);
                console.log(this.ghostTimeStr);
                if (this.ghostTime >= posTime) {
                    if (!this.ghostMark) {
                        this.ghostMark = L.marker([location.latitude, location.longitude], {
                            title: 'sadasdasd',
                            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"])({
                                iconSize: [25, 41],
                                iconAnchor: [13, 41],
                                iconUrl: 'assets/marker-icon-ghost.png',
                            }),
                        }).addTo(this.map);
                        //this.ghostMark.setRotationAngle(180);
                    }
                    else {
                        let pos = [location.latitude, location.longitude];
                        this.ghostMark.setLatLng(pos);
                        //this.ghostMark.setRotationAngle(180);
                        //this.ghostMark.setZoom(7)
                        // this.map.panTo(this.ghostMark.getLatLng(),{maxZoom:10});
                        // L.circle(pos, {radius: 1500,color:(pos[0]*10).toFixed(0)}).addTo(this.map);
                        this.index++;
                        this.ghostStartPos = this.index;
                        if (this.index == 100) {
                            let distanse = this.ghostMark.getLatLng().distanceTo(L.latLng(-31.388246158367238, -64.4819678316565));
                            let km = (distanse / 1000).toFixed(0);
                            this.appService.textToSpeech("Distancia, " + km + " kilómetros");
                        }
                        this.arr.push(this.ghostMark.getLatLng());
                        if (this.arr.length == 2) {
                            let polyline = L.polyline(this.arr, { color: 'blue', weight: 4, opacity: 0.2 }).addTo(this.map);
                            this.arr = [this.arr[1]];
                        }
                    }
                }
            }
        }, 1000);
    }
    dibuja(location) {
        if (this.Locations.length) {
            let mark = this.Locations[this.Locations.length - 1];
            if (!this.mark) {
                this.mark = L.marker([mark.latitude, mark.longitude], {
                    icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"])({
                        iconSize: [25, 41],
                        iconAnchor: [13, 41],
                        iconUrl: 'assets/marker-icon.png',
                    }),
                }).addTo(this.map);
            }
            else {
                this.mark.setLatLng([mark.latitude, mark.longitude]);
                //this.mark.setRotationAngle(180*((Math.sin(this.x*this.x)+(this.y*this.y))+Math.cos((this.x*this.x)+(this.y*this.y))));
                //this.map.setZoom(20)
                if (this.seguirLimites)
                    this.map.panTo(this.mark.getLatLng(), { maxZoom: 6 });
            }
        }
        let arr = [];
        this.Locations.forEach(location => {
            arr.push([location.latitude, location.longitude]);
        });
        L.polyline(arr, { color: 'red', weight: 2, opacity: 0.5 }).addTo(this.map);
    }
}
EntrenamientosComponent.ɵfac = function EntrenamientosComponent_Factory(t) { return new (t || EntrenamientosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
EntrenamientosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EntrenamientosComponent, selectors: [["app-entrenamientos"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], decls: 42, vars: 15, consts: [["id", "map"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 1, "mapButton", 3, "matMenuTriggerFor"], ["class", "mapFantasma", 4, "ngIf"], ["src", "assets/compassFondo.svg", 1, "CompassFondo"], ["id", "agujas", "src", "assets/brujula.svg", 1, "CompassAgujas"], ["menuEnt", "matMenu"], ["mat-menu-item", "", "color", "accent", 3, "click", 4, "ngFor", "ngForOf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [2, "position", "absolute", "width", "100%", "bottom", "0"], [1, "example-card"], [2, "display", "flex"], [2, "font-size", "40px", "padding-bottom", "20px"], [2, "font-size", "30px", "width", "100%", "text-align", "right"], [2, "font-size", "20px"], [2, "position", "absolute", "padding-right", "20px", "; font-size", "20px", "right", "0", "text-align", "right"], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], [2, "text-align", "center", "width", "100%"], ["mat-button", "", "mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "mapFantasma"], [2, "right", "-5px", "position", "absolute", "top", "-8px"], ["mat-icon-button", "", 3, "click"], [1, "centered-div"], ["mat-menu-item", "", "color", "accent", 3, "click"], [1, "icon-border"], ["style", "position: absolute;right:0px;top:12px;", "class", "icon-border", 4, "ngIf"], [1, "icon-border", 2, "position", "absolute", "right", "0px", "top", "12px"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "click"], ["mat-list-icon", ""], ["mat-button", "", "mat-raised-button", "", "color", "warn", 3, "click"]], template: function EntrenamientosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EntrenamientosComponent_div_4_Template, 9, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EntrenamientosComponent_button_9_Template, 5, 3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "pets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Selecciona ruta Fantasma");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, EntrenamientosComponent_button_17_Template, 5, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, EntrenamientosComponent_button_18_Template, 5, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, EntrenamientosComponent_button_19_Template, 5, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, EntrenamientosComponent_button_35_Template, 5, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, EntrenamientosComponent_button_38_Template, 5, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, EntrenamientosComponent_button_39_Template, 5, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, EntrenamientosComponent_button_41_Template, 5, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ghostInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.EntrenamientosHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.MapInterval);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.seguirLimites);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.seguirLimites);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.tiempoEntrenamiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.distanciaEntrenamiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.velocidadEntrenamiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pasosEntrenamiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.entrenamiento && !ctx.entrenamiento.started);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.entrenamiento && ctx.entrenamiento.started && !ctx.entrenamiento.paused);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.entrenamiento && ctx.entrenamiento.started && ctx.entrenamiento.paused);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.entrenamiento && ctx.entrenamiento.started);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"]], styles: [".mapButton[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  z-index: 100000;\n}\n\n.mapFantasma[_ngcontent-%COMP%] {\n  background-color: darkslategrey;\n  opacity: 0.6;\n  position: absolute;\n  bottom: 20px;\n  z-index: 100000;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered-div[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 5px;\n}\n\n.CompassFondo[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100px;\n  right: 0;\n  margin-right: 10px;\n}\n\n.CompassAgujas[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100px;\n  top: 7px;\n  right: 0;\n  margin-right: 9px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n\n.example-custom-date-class[_ngcontent-%COMP%] {\n  background: orange;\n  border-radius: 100%;\n}\n\n  .leaflet-bottom {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VudHJlbmFtaWVudG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFdBQUE7RUFBWSxlQUFBO0FBSWxEOztBQUZBO0VBQ0UsK0JBQUE7RUFBZ0MsWUFBQTtFQUNoQyxrQkFBQTtFQUFvQixZQUFBO0VBQWUsZUFBQTtFQUNuQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVFGOztBQU5BO0VBRUUsWUFBQTtFQUNBLFlBQUE7QUFRRjs7QUFKQTtFQUNJLGtCQUFBO0VBQW9CLGFBQUE7RUFBYyxZQUFBO0VBQWUsUUFBQTtFQUFTLGtCQUFBO0FBVzlEOztBQVJBO0VBQ0ksa0JBQUE7RUFBb0IsYUFBQTtFQUFjLFlBQUE7RUFBYyxRQUFBO0VBQVEsUUFBQTtFQUFTLGlCQUFBO0FBZ0JyRTs7QUFiQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFnQko7O0FBYkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBZ0JKOztBQWJBO0VBQ0ksYUFBQTtBQWdCSiIsImZpbGUiOiJlbnRyZW5hbWllbnRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXBCdXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIwcHg7IHJpZ2h0OiAyMHB4O3otaW5kZXg6IDEwMDAwMDtcbn1cbi5tYXBGYW50YXNtYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtvcGFjaXR5OiAwLjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMHB4OyA7ei1pbmRleDogMTAwMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNlbnRlcmVkLWRpdiB7XG4gIFxuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgXG59XG5cbi5Db21wYXNzRm9uZG97XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAxMDAwO3dpZHRoOiAxMDBweDsgIHJpZ2h0OjA7IG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLkNvbXBhc3NBZ3VqYXN7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAxMDAwO3dpZHRoOiAxMDBweDsgdG9wOjdweDtyaWdodDowOyBtYXJnaW4tcmlnaHQ6OXB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cblxuICAuZXhhbXBsZS1jdXN0b20tZGF0ZS1jbGFzcyB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIH1cbiAgXG46Om5nLWRlZXAgLmxlYWZsZXQtYm90dG9tICB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar/calendar.module */ "O51e");
/* harmony import */ var _inicio_inicio_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.module */ "MpVM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
            _inicio_inicio_module__WEBPACK_IMPORTED_MODULE_2__["InicioModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
        _inicio_inicio_module__WEBPACK_IMPORTED_MODULE_2__["InicioModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map