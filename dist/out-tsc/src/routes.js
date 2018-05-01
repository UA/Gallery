"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gallery_component_1 = require("./app/gallery/gallery.component");
var image_detail_component_1 = require("./app/image-detail/image-detail.component");
exports.appRoutes = [
    { path: 'gallery', component: gallery_component_1.GalleryComponent },
    { path: 'image/:id', component: image_detail_component_1.ImageDetailComponent },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map