"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanResult = void 0;
var barcode_1 = require("./barcode");
var recognizedText_1 = require("./recognizedText");
/**
 * A result of a scanning operation on an image.
 */
var ScanResult = /** @class */ (function () {
    /**
     * @hidden
     *
     * Create a ScanResult instance.
     *
     * @param barcodes The list of barcodes found in the image.
     * @param texts The list of texts found in the image.
     * @param imageData The image data given as a byte array, formatted accordingly to the set settings.
     * @param imageSettings The configuration object defining the properties of the processed image.
     */
    function ScanResult(barcodes, texts, imageData, imageSettings) {
        var _this = this;
        this.barcodes = [];
        barcodes.forEach(function (barcode) {
            _this.barcodes.push(barcode_1.Barcode.createFromWASMResult(barcode));
        });
        this.texts = [];
        texts.forEach(function (text) {
            _this.texts.push(recognizedText_1.RecognizedText.createFromWASMResult(text));
        });
        this.imageData = imageData;
        this.imageSettings = imageSettings;
        this.rejectedCodes = new Set();
        this.rejectedTexts = new Set();
    }
    /**
     * Prevent playing a sound, vibrating or flashing the GUI for a particular code.
     * If all codes and texts in the result are rejected (or no barcode/text is present), sound, vibration and GUI
     * flashing will be suppressed.
     *
     * Rejected codes will still be part of the [[ScanResult.barcodes]] property like all other codes.
     *
     * @param barcode The barcode to be rejected.
     */
    ScanResult.prototype.rejectCode = function (barcode) {
        this.rejectedCodes.add(barcode);
    };
    /**
     * Prevent playing a sound, vibrating or flashing the GUI for a particular text.
     * If all codes and texts in the result are rejected (or no barcode/text is present), sound, vibration and GUI
     * flashing will be suppressed.
     *
     * Rejected texts will still be part of the [[ScanResult.texts]] property like all other texts.
     *
     * @param text The text to be rejected.
     */
    ScanResult.prototype.rejectText = function (text) {
        this.rejectedTexts.add(text);
    };
    return ScanResult;
}());
exports.ScanResult = ScanResult;
//# sourceMappingURL=scanResult.js.map