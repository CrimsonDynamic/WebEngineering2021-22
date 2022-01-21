function getViewportWidth() {
    return window.innerWidth ||
    document.documentElement.clientWidth;
   }
function getViewportHeight() {
    return window.innerHeight ||
    document.documentElement.clientHeight;
}
console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()}px 
und die Viewport-Höhe beträgt: ${getViewportHeight()}px`)