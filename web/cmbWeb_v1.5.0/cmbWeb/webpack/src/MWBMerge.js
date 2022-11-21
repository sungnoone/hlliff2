//1. MWBScanner_wa <<<<<<<<<<<>>>>>>>>>>>

/*
Changelog: https://cmbdn.cognex.com/download/changelog/cmb/cmbweb-web-assembly
*/

 var CONSTANTS = {
	/** @name Grayscale image size range
	 ** @{ */
	MWB_GRAYSCALE_LENX_MIN :      10,
	MWB_GRAYSCALE_LENX_MAX :      5000,
	MWB_GRAYSCALE_LENY_MIN :      10,
	MWB_GRAYSCALE_LENY_MAX :      5000,
	/** @} */


	/** @brief  Code39 decoder flags value: require checksum check
	*/
	MWB_CFG_CODE39_REQUIRE_CHECKSUM :  0x2,
	/**/

	/** @brief  Code39 decoder flags value: don't require stop symbol - can lead to false results
	*/
	MWB_CFG_CODE39_DONT_REQUIRE_STOP : 0x4,
	/**/

	/** @brief  Code39 decoder flags value: decode full ASCII
	*/
	MWB_CFG_CODE39_EXTENDED_MODE :      0x8,
	/**/
	
	/** @brief  Code39 decoder flags value: Try decoding result to CODE32. if failed, Code39 will return
	*/
	MWB_CFG_CODE39_CODE32_ENABLED :      0x10,
	/**/

	/** @brief  Code39 decoder flags value: ADD 'A' prefix to Code32 result
	*/
	MWB_CFG_CODE39_CODE32_PREFIX :      0x20,
	/**/


	/** @brief  Code93 decoder flags value: decode full ASCII
	*/
	MWB_CFG_CODE93_EXTENDED_MODE :      0x8,
	/**/


	/** @brief  Code25 decoder flags value: require checksum check
	*/
	MWB_CFG_CODE25_REQ_CHKSUM :        0x1,
	/**/


	/** @brief  Code11 decoder flags value: require checksum check
	* Requires single checksum. Set by default.
	*/
	MWB_CFG_CODE11_REQ_SINGLE_CHKSUM:         0x1,
	/**/
	
	/** @brief  Code11 decoder flags value: require checksum check
	* Requires double checksum.
	*/
	MWB_CFG_CODE11_REQ_DOUBLE_CHKSUM:         0x2,
	/**/

	/** @brief  MSI Plessey decoder flags value: require checksum check
	* Use mod 10 checksum. Set by default.
	*/
	MWB_CFG_MSI_REQ_10_CHKSUM :                 0x01,
	/**/
	
	/** @brief  MSI Plessey decoder flags value: require checksum check
	* Use mod 10 mod 10 checksum.
	*/
	MWB_CFG_MSI_REQ_1010_CHKSUM :               0x02,
	/**/
	
	/** @brief  MSI Plessey decoder flags value: require checksum check
	* Use mod 11 checksum (IBM algorithm).
	*/
	MWB_CFG_MSI_REQ_11_IBM_CHKSUM :             0x04,
	/**/
	
	/** @brief  MSI Plessey decoder flags value: require checksum check
	* Use mod 11 checksum (NCR algorithm).
	*/
	MWB_CFG_MSI_REQ_11_NCR_CHKSUM :             0x08,
	/**/
	
	/** @brief  MSI Plessey decoder flags value: require checksum check
	* Use mod 11 mod 10 checksum (IBM algorithm).
	*/
	MWB_CFG_MSI_REQ_1110_IBM_CHKSUM :           0x10,
	/**/
	
	/** @brief  MSI Plessey decoder flags value: require checksum check
	* Use mod 11 mod 10 checksum (NCR algorithm)
	*/
	MWB_CFG_MSI_REQ_1110_NCR_CHKSUM :           0x20,
	/**/


	/** @brief  Codabar decoder flags value: include start/stop symbols in result
	*/
	MWB_CFG_CODABAR_INCLUDE_STARTSTOP :        0x1,
	/**/


	/** @brief  Datamatrix decoder flags value: enable DPM mode
	  */
	MWB_CFG_DM_DPM_MODE :      0x2,
	/**/


	/** @brief  Telepen decoder flags
	 */
	MWB_CFG_TELEPEN_FORCE_NUMERIC :      0x1,
	/**/


	/** @brief  Barcode decoder param types
	*/
	MWB_PAR_ID_ECI_MODE :            0x08,
	MWB_PAR_ID_RESULT_PREFIX :       0x10,
	MWB_PAR_ID_VERIFY_LOCATION :	 0x20,
	
	/** Scan color: working for Datamatrix currently
	*/
	MWB_PAR_ID_SCAN_COLOR :			 0x40,
	/**/


	/** @brief  Barcode param values
	* Default for ECI (ECI is DM only)
	*/
	MWB_PAR_VALUE_ECI_DISABLED :    0x00, //default
	MWB_PAR_VALUE_ECI_ENABLED :     0x01,
	/**/
	
	/** @brief  Barcode param values
	* Default for result prefix (all symbologies except DataBar / RSS)
	*/
	MWB_PAR_VALUE_RESULT_PREFIX_NEVER :   0x00, //default
	MWB_PAR_VALUE_RESULT_PREFIX_ALWAYS :  0x01,
	/** Default for result prefix for DataBar / RSS only
	*/
	MWB_PAR_VALUE_RESULT_PREFIX_DEFAULT : 0x02,
	/**/
	
	MWB_PAR_VALUE_VERIFY_LOCATION_OFF :   0x00,
	MWB_PAR_VALUE_VERIFY_LOCATION_ON :  0x01,
	
	MWB_PAR_VALUE_COLOR_NORMAL :  		0x01,
	MWB_PAR_VALUE_COLOR_INVERTED :  	0x02,
	
	/** @brief  Barcode param values
	* Default for color (all symbologies)
	*/
	MWB_PAR_VALUE_COLOR_BOTH :  		0x04, //default
	/**/


	/** @brief  UPC/EAN decoder disable addons detection
	*/
	MWB_CFG_EANUPC_DISABLE_ADDON :  0x1,
	MWB_CFG_EANUPC_DONT_EXPAND_UPCE :   0x2,
	/**/


	/** @brief  Global decoder flags value: apply sharpening on input image
	*/
	MWB_CFG_GLOBAL_HORIZONTAL_SHARPENING :          0x01,
	MWB_CFG_GLOBAL_VERTICAL_SHARPENING :            0x02,
	MWB_CFG_GLOBAL_SHARPENING :                     0x03,
	
	/** @brief  Global decoder flags value: apply rotation on input image
	*/
	MWB_CFG_GLOBAL_ROTATE90 :                       0x04,
	MWB_CFG_GLOBAL_ROTATE180:                       0x08,


	/** @brief  Global decoder flags value: calculate location for 1D barcodeTypes (Code128, Code93, Code39 supported)
	*/
	MWB_CFG_GLOBAL_CALCULATE_1D_LOCATION   :  0x10,

	/** @brief  Global decoder flags value: fail 1D decode if result is not confirmed by location expanding (Code128, Code93, Code39 supported)
	*/
	MWB_CFG_GLOBAL_VERIFY_1D_LOCATION    :   0x20,
	
	/** @brief  Global decoder flags value: fail decode if result is not touching the center of viewfinder (2D + Code128, Code93, Code39 supported)
	* 1D locaiton flags will be enabled automatically with this one
	*/
	MWB_CFG_GLOBAL_USE_CENTRIC_SCANNING  :   0x40,
	
	/** @brief  Global decoder flags value: disable some image pre-processing, suitable for devices with weak CPU
	  */
	MWB_CFG_GLOBAL_DISABLE_PREPROCESSING :            0x80,
	
	/** @brief  Global decoder flags value: Enable multiple barcode detection in single image
	  */
	MWB_CFG_GLOBAL_ENABLE_MULTI :                    0x100,
	
	/** @brief  Global decoder flags value: multiple scan lines density
	  */
	MWB_CFG_GLOBAL_SCANLINESx2 :                    0x200,
	MWB_CFG_GLOBAL_SCANLINESx4 :                    0x400,
	MWB_CFG_GLOBAL_SCANLINESx8 :                    0x800,


	/** @brief  Code39 decoder flags value: require checksum check
	*/
	MWB_CFG_CODE39_REQ_CHKSUM            :    0x2,
	/**/


	/**
	* @name Bit mask identifiers for supported decoder types
	* @{ */
	MWB_CODE_MASK_NONE :             0x00000000,
	MWB_CODE_MASK_QR :               0x00000001,
	MWB_CODE_MASK_DM :               0x00000002,
	MWB_CODE_MASK_RSS :              0x00000004,
	MWB_CODE_MASK_39 :               0x00000008,
	MWB_CODE_MASK_EANUPC :           0x00000010,
	MWB_CODE_MASK_128 :              0x00000020,
	MWB_CODE_MASK_PDF :              0x00000040,
	MWB_CODE_MASK_AZTEC :            0x00000080,
	MWB_CODE_MASK_25 :               0x00000100,
	MWB_CODE_MASK_93 :               0x00000200,
	MWB_CODE_MASK_CODABAR :          0x00000400,
	MWB_CODE_MASK_DOTCODE :          0x00000800,
	MWB_CODE_MASK_11 :               0x00001000,
	MWB_CODE_MASK_MSI :              0x00002000,
	MWB_CODE_MASK_MAXICODE:          0x00004000,
	MWB_CODE_MASK_POSTAL:            0x00008000,
	MWB_CODE_MASK_TELEPEN:           0x00010000,
	MWB_CODE_MASK_ALL :              0x00ffffff,
	/** @} */


	/**
	* @name Bit mask identifiers for RSS decoder types
	* @{ */
	MWB_SUBC_MASK_RSS_14 :           0x00000001,
	MWB_SUBC_MASK_RSS_14_STACK :     0x00000002,
	MWB_SUBC_MASK_RSS_LIM :          0x00000004,
	MWB_SUBC_MASK_RSS_EXP :          0x00000008,
	/** @} */


	/**
	* @name Bit mask identifiers for QR decoder types
	* @{ */
	MWB_SUBC_MASK_QR_STANDARD :      0x00000001,
	MWB_SUBC_MASK_QR_MICRO    :      0x00000002,
	/** @} */
	

	/**
	* @name Bit mask identifiers for PDF decoder types
	* @{ */
	MWB_SUBC_MASK_PDF_STANDARD :      0x00000001,
	MWB_SUBC_MASK_PDF_MICRO    :      0x00000002,
	/** @} */


	/**
	* @name Bit mask identifiers for Code 2 of 5 decoder types
	* @{ */
	MWB_SUBC_MASK_C25_INTERLEAVED :  0x00000001,
	MWB_SUBC_MASK_C25_STANDARD :     0x00000002,
	MWB_SUBC_MASK_C25_ITF14 :        0x00000004,
	MWB_SUBC_MASK_C25_IATA  :        0x00000008,
	MWB_SUBC_MASK_C25_MATRIX :       0x00000010,
	MWB_SUBC_MASK_C25_COOP   :       0x00000020,
	MWB_SUBC_MASK_C25_INVERTED:      0x00000040,
	/** @} */


	/**
	* @name Bit mask identifiers for POSTAL decoder types
	* @{ */
	MWB_SUBC_MASK_POSTAL_POSTNET :   0x00000001,
	MWB_SUBC_MASK_POSTAL_PLANET  :   0x00000002,
	MWB_SUBC_MASK_POSTAL_IM      :   0x00000004,
	MWB_SUBC_MASK_POSTAL_ROYAL   :   0x00000008,
	MWB_SUBC_MASK_POSTAL_AUSTRALIAN :0x00000010,
	/** @} */


	/**
	* @name Bit mask identifiers for UPC/EAN decoder types
	* @{ */
	MWB_SUBC_MASK_EANUPC_EAN_13 :    0x00000001,
	MWB_SUBC_MASK_EANUPC_EAN_8 :     0x00000002,
	MWB_SUBC_MASK_EANUPC_UPC_A :     0x00000004,
	MWB_SUBC_MASK_EANUPC_UPC_E :     0x00000008,
	MWB_SUBC_MASK_EANUPC_UPC_E1 :    0x00000010,
	/** @} */


	/**
	* @name Bit mask identifiers for 1D scanning direction
	* @{ */
	MWB_SCANDIRECTION_HORIZONTAL :   0x00000001,
	MWB_SCANDIRECTION_VERTICAL :     0x00000002,
	MWB_SCANDIRECTION_OMNI :         0x00000004,
	MWB_SCANDIRECTION_AUTODETECT :   0x00000008,
	MWB_SCANDIRECTION_CUSTOM :   	 0x00000010,
	/** @} */


	FOUND_NONE          :   0,
	FOUND_DM            :   1,
	FOUND_39            :   2,
	FOUND_RSS_14        :   3,
	FOUND_RSS_14_STACK  :   4,
	FOUND_RSS_LIM       :   5,
	FOUND_RSS_EXP       :   6,
	FOUND_EAN_13        :   7,
	FOUND_EAN_8         :   8,
	FOUND_UPC_A         :   9,
	FOUND_UPC_E         :   10,
	FOUND_128           :   11,
	FOUND_PDF           :   12,
	FOUND_QR            :   13,
	FOUND_AZTEC         :   14,
	FOUND_25_INTERLEAVED:   15,
	FOUND_25_STANDARD   :   16,
	FOUND_93            :   17,
	FOUND_CODABAR       :   18,
	FOUND_DOTCODE       :   19,
	FOUND_128_GS1       :   20,
	FOUND_ITF14         :   21,
	FOUND_11            :   22,
	FOUND_MSI           :   23,
	FOUND_25_IATA       :   24,
	FOUND_25_MATRIX     :   25,
	FOUND_25_COOP       :   26,
	FOUND_25_INVERTED   :   27,
	FOUND_QR_MICRO      :   28,
	FOUND_MAXICODE      :   29,
	FOUND_POSTNET       :   30,
	FOUND_PLANET        :   31,
	FOUND_IMB           :   32,
	FOUND_ROYALMAIL     :   33,
	FOUND_MICRO_PDF     :   34,
	FOUND_32	        :   35,
	FOUND_AUSTRALIAN    :   36,
	FOUND_TELEPEN	    :   37,


	/** Camera scanning resolutions
    * Available resolutions:
    *   SD		 640x480
    *   HD		1280x720
    *   FHD		1920x1080
    */
	CamRes_SD			: 0,
	CamRes_HD			: 1,
	CamRes_FHD			: 2,	
	
	
	/** Camera switcher options
    * Available options:
	
    *   CAMERA_SWITCHER_INIT_ON_START		 The camera switcher initialization happens after a startScanning call,
	i.e. on creating a cameraPreview. The operation for listing all available cameras is async, thus it can be awaited
	which ensures the camera list is obtained first before proceeding to starting the camera and scanning, otherwise,
	it would be executed as asynchronous, where the camera and scanning will be started most likely before the camera
	list is obtained. This option will await the initialization, thus it will take longer until the camera and scanning
	is started.
	
	*   CAMERA_SWITCHER_USE_ON_START		 By default the MWBuseFrontCamera setting has priority at picking which
	camera (back or front) to use on the cameraPreview, and will continue to be the case until a specific camera is
	picked and switched to from the camera switcher UI. This option will use the first camera from the camera list on
	the start of the cameraPreview, thus the MWBuseFrontCamera setting would no longer have effect.
	Using CAMERA_SWITCHER_USE_ON_START also implies CAMERA_SWITCHER_INIT_ON_START.
	
    *   CAMERA_SWITCHER_USE_BEST_CAMERA 	 [Experimental] Devices with multple back cameras may provide the multple
	back cameras separately rather than as one system, and the wide-angle camera which has no autofocus could be used by
	default. While there is no official indicator which camera has autofocus, based on observed common denominator in
	such cases, this option will try to order the multple found cameras such that the main camera which has autofocus
	will be listed first and used as default.
	
    */
	CAMERA_SWITCHER_INIT_ON_START				: 0x00000001,	
	CAMERA_SWITCHER_USE_ON_START				: 0x00000003,	
	CAMERA_SWITCHER_USE_BEST_CAMERA				: 0x00000004,	
	
	
	/** Overlay modes
	* Available modes:
	*   None	No overlay is displayed
	*   MW		Use MW Dynamic Viewfinder with blinking lines
	*   Image	Show image on top of cameraPreview
	*/
	OverlayModeNone :           0,
	OverlayModeMW :             1,
	OverlayModeImage :          2,
	
	
	/** Mirror modes
	* Available modes:
	*   NONE		No camera preview mirroring is done.
	*   FRONTCAM	Camera preview mirroring is done only when using front cameras.
	*   ALWAYS		Camera preview mirroring is always done.
	*/
	MIRROR_NONE :				0,
	MIRROR_FRONTCAM :			1,
	MIRROR_ALWAYS :				2,
	
	
	/** Pause modes
	* Available modes:
	*   NONE			Nothing happens
	*   PAUSE			Blinking lines are replaced with a pause view
	*   STOP_BLINKING	Blinking lines stop blinking
	*/
	PM_NONE :                   0,
	PM_PAUSE :                  1,
	PM_STOP_BLINKING :          2,


	/**
	* @name Bit mask identifiers for supported parser types
	* @{ */
	MWP_PARSER_MASK_NONE :               0x00000000,
	MWP_PARSER_MASK_GS1  :               0x00000001,
	MWP_PARSER_MASK_IUID :               0x00000002,
	MWP_PARSER_MASK_ISBT :               0x00000004,
	MWP_PARSER_MASK_AAMVA:               0x00000008,
	MWP_PARSER_MASK_HIBC :               0x00000010,
	MWP_PARSER_MASK_SCM  :               0x00000020,
	MWP_PARSER_MASK_AUTO :               0x000000ff
	/** @} */
};


var BarcodeScanner = {
	/**
	* Init decoder with default params.
	*/
	MWBinitDecoder: null, //assigned with cwrap on module load //default settings are the first thing executed in native main
	MWBinitDecoder_arguments: [], //data_types
	
	/**
	* Returns json object of cmbWebVersion, decoderVersion and fullVersion.
	*/
	MWBgetVersion: null, //assigned with cwrap on module load
	MWBgetVersion_arguments: [],
	
	/**
	* result.code - string representation of barcode result
	* result.parsedCode - string json representation of parsed barcode result (if any)
	* result.type - type of barcode detected or 'Cancel' if scanning is canceled
	* result.bytes - bytes array of raw barcode result
	* result.isGS1 - (boolean) barcode is GS1 compliant
	* result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
	* result.imageWidth - Width of the scanned image
	* result.imageHeight - Height of the scanned image
	*/
	MWBstartScanner: function () { MWBScanner.start(); }, //deprecated - prototype.startScanning is used instead
	MWBstartScanner_arguments: [],
	
	/**
	* Enables or disables symbology types to decode.
	* 
	* @param {number} activeCodes
	* ORed bit flags (MWB_CODE_MASK_...) of symbology types to be activated.
	*/
	MWBsetActiveCodes: null, //assigned with cwrap on module load
	MWBsetActiveCodes_arguments: ['number'],
	
	/**
	* Get active decoder types
	*
	* @retval          Active decoder types
	*/
	MWBgetActiveCodes: null, //assigned with cwrap on module load
	MWBgetActiveCodes_arguments: [],
	
	/**
	* Set active subcodes for given code group flag.
	* Subcodes under some symbology types are all activated by default.
	* 
	* @param {number} codeMask                Single symbology type/group (MWB_CODE_MASK_...)
	* @param {number} subMask                 ORed bit flags of requested symbology subtypes (MWB_SUBC_MASK_)
	*/
	MWBsetActiveSubcodes: null, //assigned with cwrap on module load
	MWBsetActiveSubcodes_arguments: ['number', 'number'],
	
	/**
	* Sets options (if any) for symbology type specified in codeMask.
	* Options are given in  flags as bitwise OR of option bits. Available options depend on selected symbology type.
	*
	* @param {number} codeMask                Single symbology type (MWB_CODE_MASK_...) or 0 for global flags
	* @param {number} flags                   ORed bit mask of selected symbology type options (MWB_FLAG_...) or
	*                                         global flags (MWB_CFG_GLOBAL_...)
	*/
	MWBsetFlags: null, //assigned with cwrap on module load
	MWBsetFlags_arguments: ['number', 'number'],
	
	/**
	* Sets minimum result length for symbology type specified in codeMask.
	*
	* @param {number} codeMask                Single symbology type (MWB_CODE_MASK_...)
	* @param {number} minLength               Minimum result length for selected symbology type
	*/
	MWBsetMinLength: null, //assigned with cwrap on module load
	MWBsetMinLength_arguments: ['number', 'number'],
	
	/**
	* This function enables some control over scanning lines choice for 1D barcodes. By ORing
	* available bit-masks user can add one or more direction options to scanning lines set.
	* 
	* @param {number} direction
	* ORed bit mask of direction modes given with MWB_SCANDIRECTION_... bit-masks
	* 
	* Available direction modes:
	* 	- MWB_SCANDIRECTION_HORIZONTAL - horizontal lines
	* 	- MWB_SCANDIRECTION_VERTICAL - vertical lines
	* 	- MWB_SCANDIRECTION_OMNI - omnidirectional lines
	* 	- MWB_SCANDIRECTION_AUTODETECT - enables BarcodeScanner's autodetection of barcode direction
	*/
	MWBsetDirection: null, //assigned with cwrap on module load
	MWBsetDirection_arguments: ['number'],
	
	/**
	* Sets rectangular area for barcode scanning with selected single symbology type.
	* 
	* After applying this setting, all subsequent scans will be restricted to this region.
	* Only codes inside defined region are decoded. If rectangle is not set, whole image / frame is scanned.
	* If width or height is zero, whole image / frame is scanned.
	*
	* Dimensions parameters (left, top, width, height) are interpreted as percentage of image / frame dimensions,
	* i.e. ranges are 0 - 100 for all parameters.
	*
	* @param {number} codeMask            Single symbology type selector (MWB_CODE_MASK_...)
	* @param {number} left                X coordinate of left edge (percentage)
	* @param {number} top                 Y coordinate of top edge (percentage)
	* @param {number} width               Rectangle witdh (x axis) (percentage)
	* @param {number} height              Rectangle height (y axis) (percentage)
	*/
	MWBsetScanningRect: null, //assigned with cwrap on module load
	MWBsetScanningRect_arguments: ['number', 'number','number', 'number', 'number'],
	
	/**
	 * Get rectangular area for barcode scanning with selected single or multiple decoder type(s).
	 * If codeMask is 0, union rectangle of all ACTIVE barcode types will be returned
	 * Output values are in percentages of screeen width and height (range 0 - 100)
	 *
	 * @param[in]   codeMask             Single decoder type selector (MWB_CODE_MASK_...) or 0
	 * @param[out]  left                 X coordinate of left edge
	 * @param[out]  top                  Y coordinate of top edge
	 * @param[out]  width                Rectangle witdh (x axis)
	 * @param[out]  height               Rectangle height (y axis)
	 *
	 * @retval      MWB_RT_OK            Rectangle get successfully
	 * @retval      MWB_RT_NOT_SUPPORTED Rectangle get failed
	 */
	MWBgetScanningRect: null, //assigned with cwrap on module load - for internal use only
	MWBgetScanningRect_arguments: ['number'],
	
	/**
	* Set the barcode scanner effort level.
	* 
	* Barcode detector relies on image processing and geometry interpolation for
	* extracting optimal data for decoding. Higher effort level involves more processing
	* and intermediate parameter values, thus increasing probability of successful
	* detection with low quality images, but also consuming more CPU time.
	*
	* @param {number} level                   Effort level - available values are 1, 2, 3, 4 and 5.
	*                                         Levels greater than 3 are not suitable for real-time decoding
	*/
	MWBsetLevel: null, //assigned with cwrap on module load
	MWBsetLevel_arguments: ['number'],
	
	/**
	* Choose overlay graphics type for scanning screen:
	* 
	* @param {number} mode
	* Default value is OverlayModeMW
	* 
	* Available overlay modes:
	* OverlayModeNone   - No overlay is displayed
	* OverlayModeMW     - Use MW Dynamic Viewfinder with blinking line (you can customize display options
	*                     by changing defaults)
	* OverlayModeImage  - Show image on top of camera preview
	*/
	MWBsetOverlayMode: function (mode) { 
		MW_properties.global.overlay.mode = ((typeof mode) == 'number') ? mode : 1;
	},
	MWBsetOverlayMode_arguments: ['number'],
	
	/**
	* Customize overlay appearance for OverlayModeMW:
	* BorderVisible 					 - boolean
	* BorderAndLinesColor 				 - string (css color value in the rgba() functional notation)
	* LocationBorderColor 				 - string (css color value in the rgba() functional notation)
	* LocationShowTime 					 - number (ms)
	*
	* Default values are true | "rgba(255, 0, 0, 1.0)" | "rgba(0, 255, 0, 1.0)" | 500
	*/
	MWBsetOverlayAppearance: function (values) { //overlayAppearanceValues
		if ((typeof values) == 'object')
		{
			MW_properties.global.overlay.borderVisible = ((typeof values.BorderVisible) == 'boolean') ? values.BorderVisible : true;
			MW_properties.global.overlay.lineColor = ((typeof values.BorderAndLinesColor) == 'string') ? values.BorderAndLinesColor : "rgba(255, 0, 0, 1.0)";
			MW_properties.global.overlay.locationColor = ((typeof values.LocationBorderColor) == 'string') ? values.LocationBorderColor : "rgba(0, 255, 0, 1.0)";
			MW_properties.global.overlay.locationShowTime = ((typeof values.LocationShowTime) == 'number' && values.LocationShowTime >= 0) ? values.LocationShowTime : 500;
		}
	},
	MWBsetOverlayAppearance_arguments: ['object'],
	
	/**
	* Set the visibility of the cameraPreview blinking lines.
	* 
	* @param {boolean} visible
	* Default value is true.
	*/
	MWBsetBlinkingLineVisible: function (visible) { 
		if ((typeof visible) == 'boolean')
		{
			var mwBlinkingLines = MW_properties.global.blinkingLines;
			mwBlinkingLines.visible = visible;
		}
	},
	MWBsetBlinkingLineVisible_arguments: ['boolean'],
	
	/**
	* Set cameraPreview pause mode.
	* 
	* @param {number} mode
	* Pause mode defines what happens when the scanner is paused.
	* Default value is PM_STOP_BLINKING
	* 
	* Available pause modes:
	* 	PM_NONE             - Nothing happens
	* 	PM_PAUSE            - Blinking lines are replaced with a pause view
	* 	PM_STOP_BLINKING    - Blinking lines stop blinking
	*/
	MWBsetPauseMode: function (mode) { 
		/* What happens when the scanner is paused:
            *
            *   PM_NONE             - Nothing happens
            *   PM_PAUSE            - Blinking lines are replaced with a pause view
            *   PM_STOP_BLINKING    - Blinking lines stop blinking
            *
            *   Default value is PM_PAUSE
        */
        MW_properties.global.overlay.pauseMode = ((typeof mode) == 'number') ? mode : 2;
		
		//use this code and set anim to 0
		//this.lineV.style.animation = this.lineH.style.animation = "fadeColor " + overlayProperties.blinkingRate + "ms infinite";
		
		//or you could do
		//mwBlinkingLines.v.style.animationPlayState = "running";
		//mwBlinkingLines.v.style.animationPlayState = "paused";
		
		//the PM_STOP_BLINKING behaviour is done in togglePause method
	},
	MWBsetPauseMode_arguments: ['number'],
	
	/**
	* Enable or disable high resolution scanning. It's recommended to enable it when target barcodes
	* are of high density or small footprint. If device doesn't support high or exact resolution
	* param will have no effect and closest available resolution will be used.
	* 
	* @param {boolean|number} enable
	* Default value is true (enabled) / CamRes_HD (720p)
	*/
	MWBenableHiRes: function (enable) { 
		if ((typeof enable) == 'boolean' || (typeof enable) == 'number')
		{
			//range check
			let arg_value = Number(enable);
			arg_value = ((typeof enable) == 'number' && (arg_value < 0 || arg_value > 2)) ? CONSTANTS.CamRes_HD : arg_value;
			
			//book-keeping
			MW_properties.gui_accessible.cameraResolution.runtime_value =
			MW_properties.gui_accessible.cameraResolution.initial_value = enable;
			
			let from_MW_properties = MW_properties.gui_accessible.cameraResolution.values;
			let actual_value = from_MW_properties[arg_value];
			
			//used-in setter
			JavaScript_mediaDevices_API.constraints_init(actual_value[0], actual_value[1], null);
		}
	},
	MWBenableHiRes_arguments: ['boolean'],
	
	/**
	* Choose configuration options for camera switcher:
	* CAMERA_SWITCHER_INIT_ON_START   - Init camera switcher before starting a scan
	* CAMERA_SWITCHER_USE_ON_START    - Use the first camera from all detected cameras
	* CAMERA_SWITCHER_USE_BEST_CAMERA - Try to use the main back camera from multiple back cameras
	* 
	* @param {number} options
	* Default value is 0x0 (no option enabled)
	*/
	MWBsetCameraSwitcherOptions: function (options) { 
	
		let arg_value = ((typeof options) == 'number') ? options : 0; //decide on default
		
		MW_properties.global.cameraSwitcherOptions = arg_value;
		
		//parse and apply options
		
		if (arg_value & CONSTANTS.CAMERA_SWITCHER_INIT_ON_START == CONSTANTS.CAMERA_SWITCHER_INIT_ON_START)
		{
			//cameraSwitcher handles it
		}
		
		if (arg_value & CONSTANTS.CAMERA_SWITCHER_USE_ON_START == CONSTANTS.CAMERA_SWITCHER_USE_ON_START)
		{
			//cameraSwitcher handles it
		}
		
		if (arg_value & CONSTANTS.CAMERA_SWITCHER_USE_BEST_CAMERA == CONSTANTS.CAMERA_SWITCHER_USE_BEST_CAMERA)
		{
			//cameraSwitcher handles it
		}
	},
	MWBsetCameraSwitcherOptions_arguments: ['number'],
	
	/**
	* Enable or disable flash toggle button on scanning screen. If device doesn't support flash mode
	* button will be hidden regardles of param
	* 
	* @param {boolean} enable
	* Default value is true (enabled)
	*/
	MWBenableFlash: function (enable) { 
		if ((typeof enable) == 'boolean') MW_properties.global.fullscreenButtons.hideFlash = !enable;
	},
	MWBenableFlash_arguments: ['boolean'],
	
	/**
	* Set default state of flash (torch) when scanner is started
	* 
	* @param {boolean} flashOn
	* Default value is false (disabled)
	*/
	MWBturnFlashOn: function (on) { 
		if ((typeof on) == 'boolean') JavaScript_mediaDevices_API.torchState = on;
	},
	MWBturnFlashOn_arguments: ['boolean'],
	
	/**
	* Toggle on/off flash state
	*
	*/
	MWBtoggleFlash: function () { JavaScript_mediaDevices_API.flashToggler(true); },
	MWBtoggleFlash_arguments: [],
	
	/**
	* Enable or disable zoom button on scanning screen. If device doesn't support zoom,
	* button will be hidden regardles of param
	* 
	* @param {boolean} enable
	* Default value is true (enabled)
	*/
	MWBenableZoom: function (enable) { 
		if ((typeof enable) == 'boolean') MW_properties.global.fullscreenButtons.hideZoom = !enable;
	},
	MWBenableZoom_arguments: ['boolean'],
	
	/**
	* Set desired initial zoom level. Zoom is supported only by chrome.
	* 
	* @param {number} zoomLevel
	* Initial zoom level can be 0 - no zoom, 1 - 50% or 2 - max zoom.
	* Default is 0.
	*/
	MWBsetZoomLevel: function (zoomLevel) {
		if ((typeof zoomLevel) == 'number' && (zoomLevel >=0 && zoomLevel <= 2))
		JavaScript_mediaDevices_API.zoomLevel = zoomLevel;
	},
	MWBsetZoomLevel_arguments: ['number'/*, 'number', 'number'*/],
	
	/**
	* Toggle on/off zoom state
	*
	*/
	MWBtoggleZoom: function () { JavaScript_mediaDevices_API.zoomLooper(); },
	MWBtoggleZoom_arguments: [],
	
	/**
	* Enable or disable close button on cameraPreview (partial view). If cameraPreview is in full screen mode
	* button will be present regardless of param
	* 
	* @param {boolean} enable
	* Default value is false (disabled)
	*/
	MWBenableClose: function (enable) { 
		if ((typeof enable) == 'boolean') MW_properties.global.fullscreenButtons.enableClose_setting = enable;
	},
	MWBenableClose_arguments: ['boolean'],
	
	/**
	* Enable or disable camera switcher button on cameraPreview.
	* 
	* Usually for situations where the device has multiple cameras, the camera switcher UI lists all found cameras,
	* and allows to switch to a different camera. Doing so stops the current scanning and starts a new scanning session
	* with the chosen camera.
	* 
	* By default MWBuseFrontCamera is used until another camera is selected (picked and switched to)
	* from the camera switcher UI (either manually or by using the CAMERA_SWITCHER_USE_ON_START option).
	* 
	* Once a specific camera is selected (picked and switched to) from the camera switcher,
	* the MWBuseFrontCamera setting no longer has effect.
	* 
	* @param {boolean} enable
	* Default value is false (disabled)
	*/
	MWBenableCameraSwitcher: function (enable) { 
		if ((typeof enable) == 'boolean') MW_properties.global.fullscreenButtons.hideCamera = !enable;
	},
	MWBenableCameraSwitcher_arguments: ['boolean'],
	
	/**
	* Enable/disable the return of the captured frame in the result on a successful scan. Default is 'false'.
	*/
	MWBenableCapturedFrameReturn: function (enableCapturedFrame) { 
		if ((typeof enableCapturedFrame) == 'boolean')
		{
			MW_properties.global.returnCapturedFrame = enableCapturedFrame;
		}
	},
	MWBenableCapturedFrameReturn_arguments: ['boolean'],
	
	/**
	* Enable/disable continuous scanning.
	* 
	* @param {boolean} shouldClose
	* Default value is true (disable continuous scanning).
	* If false, result callback will be performed and scanner will be paused.
	* The User can call 'resumeScanning' to continue scanning, or 'closeScanner' to close the scanner.
	*/
	MWBcloseScannerOnDecode: function (_close) { 
		if ((typeof _close) == 'boolean')
		{
			//book-keeping
			MW_properties.gui_accessible.continuous.runtime_value =
			MW_properties.gui_accessible.continuous.initial_value = !_close;
			
			//used-in setter
			MWBScanner.set_Continuous(!_close);
		}
	},
	MWBcloseScannerOnDecode_arguments: ['boolean'],
	
	/**
	* Resume scanning. Use this method if already using MWBcloseScannerOnDecode(false).
	* Function is not available on WP8 due to the technical limitations.
	*/
	MWBresumeScanning: function () { 
		MWBScanner.PAUSE_DECODING = false;
		
		if (MW_properties.global.overlay.pauseMode == 2) //PM_STOP_BLINKING
		MW_methods.toggleBlinkingLines();
		else if (MW_properties.global.overlay.pauseMode == 1) //PM_PAUSE
		MW_methods.drawPauseRects();
	},
	MWBresumeScanning_arguments: [],
	
	/**
	* Close scanner. Use this method if already using MWBcloseScannerOnDecode(false).
	* Function is not available on WP8 due to the technical limitations.
	*/
	MWBcloseScanner: function () { MWBScanner.destroyPreview(); },
	MWBcloseScanner_arguments: [],
	
		
	MWBscanFrame_ext : function (imgData, success) {
		{
			var data = imgData.data; //new Uint8ClampedArray([1, 20, -3, 129, 15]); //checks out
			var nDataBytes = data.length * data.BYTES_PER_ELEMENT;
			
			var dataPtr = Module._malloc(nDataBytes); //buffer
			Module.HEAPU8.set(data, dataPtr); //[typedArray_dataSource, heapMemory_pointer]
			
			// Call function and get result
			var jsonMWResult = "";
			var scanFrame = Module.cwrap('scanFrame', 'string', ['number', 'number', 'number', 'number']); //for some reason this has to be inside this scope
			//probs asign cwrap when Module is loaded
			
			let DEBUG_PRINT = 0;
			
			jsonMWResult = scanFrame(dataPtr, imgData.width, imgData.height, DEBUG_PRINT); //dataURL is png (no bmp or something raw)
			
			var MWResult_obj = (DEBUG_PRINT == 0) ? JSON.parse(jsonMWResult) : jsonMWResult;
			
			//MWResult_obj take .code and JSON.parse it as well (but how can we know if its JSON result from the parser? -needs indicator)

			//var result = WindowsComponnent.ScannerPage.scanImage(imgData.data, imgData.width, imgData.height); // imgData.data is a byte array where each pixel is [RGBA]
			
			//HERE display-return result
			
			/**
			  * result.code - string representation of barcode result (MWResult.text or JSON string from parser)
			  * result.parsedCode - string json representation of parsed barcode result (if any)
			  * result.type - type of barcode detected or 'Cancel' if scanning is canceled
			  * result.bytes - bytes array of raw barcode result
			  * result.isGS1 - (boolean) barcode is GS1 compliant
			  * result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
			  * result.imageWidth - Width of the scanned image
			  * result.imageHeight - Height of the scanned image
			  */
			
			if ((typeof success) == 'function')
			{
				if (MWResult_obj && MWResult_obj.type != "No MWResult.")
				{
					let result = MWResult_obj;
					
					//PPM
					var ppm;
					
					if (result.type == "Multicode")
					{
						let foundCodes = result.count;
						for (let i = 0; i < foundCodes; i++)
						{
							let result_i = result.codes[i];
							let type_supports_ppm = (result_i.type != "Dotcode" && result_i.type != "Micro QR" && result_i.type != "Maxicode");
							if (type_supports_ppm && result_i.moduleSizeX > 0.01)
							{
								let is2D = (result_i.type == "QR" || result_i.type == "Micro QR" || result_i.type == "AZTEC" || result_i.type == "Datamatrix" || result_i.type == "Dotcode" || result_i.type == "Maxicode");
								ppm = (is2D)? ((result_i.moduleSizeX + result_i.moduleSizeY) / 2) : result_i.moduleSizeX;
								
								result.codes[i].ppm = ppm;
							}
						}
					}
					else
					{
						let type_supports_ppm = (result.type != "Dotcode" && result.type != "Micro QR" && result.type != "Maxicode");
						if (type_supports_ppm && result.moduleSizeX > 0.01)
						{
							let is2D = (result.type == "QR" || result.type == "Micro QR" || result.type == "AZTEC" || result.type == "Datamatrix" || result.type == "Dotcode" || result.type == "Maxicode");
							ppm = (is2D)? ((result.moduleSizeX + result.moduleSizeY) / 2) : result.moduleSizeX;
							
							result.ppm = ppm;
						}
					}
					
					success(MWResult_obj);
				}
				else
					success(MW_methods.helpers.otherResult(
						"No barcode found.",	//code
						"NoResult"				//type
					));
			}
			else if (mwb_debug_print) console.log(MWResult_obj);
			
			//return;
			
			// Free memory
			Module._free(dataPtr); //but what if you change the address the dataPtr points to in C++ | Verify, and if true, store a copy to restore OG from (or just -= size)
			dataPtr = null;
			Module._free(jsonMWResult);
		}
	},
	
	/**
	* Scan image.
	* imageURI - path to the image to be scanned.
	*/
	MWBscanImage: function (imageURI, success) { //callback is optional
        imageURI = ((typeof imageURI) == 'string') ? imageURI : '';

        // clear needs to be done for every scan
        //WindowsComponnent.ScannerPage.iniClear();
		MW_methods.helpers.reset_Decoder(); //but ScanRects are not 0-100 //and effort lvl is 2
		scannerConfig();
		
		//mwb_debug_print = true;
        if (mwb_debug_print) console.log('about to scan image: ' + imageURI);
		
        var canvasFrame = document.createElement("canvas");

        var pad = 20;

        var imageOverlay = document.createElement("img");
        imageOverlay.src = imageURI;

        imageOverlay.onload = function () {
            canvasFrame.width = imageOverlay.width + (pad * 2);
            canvasFrame.height = imageOverlay.height + (pad * 2);

            var ctx = canvasFrame.getContext("2d");

            // draw white background to pad image with white frame
            ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
            ctx.fillRect(0, 0, canvasFrame.width, canvasFrame.height);

            ctx.drawImage(imageOverlay, 0, 0, imageOverlay.width, imageOverlay.height,      // source rectangle
                                        pad, pad, imageOverlay.width, imageOverlay.height);   // destination rectangle

            var imgData = ctx.getImageData(0, 0, canvasFrame.width, canvasFrame.height);
			
			BarcodeScanner.MWBscanFrame_ext(imgData, success);
			
			//ios canvas memory limit workaround
			ctx.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
			canvasFrame.width = 0;
			canvasFrame.height = 0;
        }
    },
	MWBscanImage_arguments: ['string'], //callback is optional
	
	/**
	* Scan frame.
	* image_data - ImageData object or dataURL string to be scanned.
	* image_type - "ImageData" or "dataURL" string describing image_data data type.
	*/
	MWBscanFrame: function (image_data, image_type, success) { //callback is optional
        
		var isImageData;
		
		if ((typeof image_type) == 'string' && image_type === "ImageData") isImageData = true;
		else 
			if ((typeof image_type) == 'string' && image_type === "dataURL") isImageData = false;
		else 
			return null; //or a specific {} ?		

        // clear needs to be done for every scan
		MW_methods.helpers.reset_Decoder(); //but ScanRects are not 0-100 //and effort lvl is 2
		scannerConfig();
		
		var imgData;
		
		if (isImageData === false)
		{
			if (image_data.startsWith("data:image") === false) return null; //or a specific {} ?
			
			var canvasFrame = document.createElement("canvas");
			var pad = 0;
			var ctx = canvasFrame.getContext("2d");
			
			var imageOverlay = new Image();			
			imageOverlay.onload = function () {
				
				canvasFrame.width = imageOverlay.width + (pad * 2);
				canvasFrame.height = imageOverlay.height + (pad * 2);

				// draw white background to pad image with white frame
				ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
				ctx.fillRect(0, 0, canvasFrame.width, canvasFrame.height);

				ctx.drawImage(imageOverlay, 0, 0, imageOverlay.width, imageOverlay.height,      // source rectangle
											pad, pad, imageOverlay.width, imageOverlay.height);   // destination rectangle

				imgData = ctx.getImageData(0, 0, canvasFrame.width, canvasFrame.height);
				
				//
				BarcodeScanner.MWBscanFrame_ext(imgData, success);
				
				//ios canvas memory limit workaround
				ctx.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
				canvasFrame.width = 0;
				canvasFrame.height = 0;

			};
			imageOverlay.src = image_data; //strDataURI;
		}
		else 
		{
			imgData = image_data;
        
			BarcodeScanner.MWBscanFrame_ext(imgData, success);
		}
    },
	MWBscanFrame_arguments: ['object|string', 'string'], //callback is optional
	
	/**
	* Set custom symbology param id / value pair for symbology type specified in a codeMask.
	* 
	* @param {number} codeMask                Single symbology type (MWB_CODE_MASK_...)
	* @param {number} paramId                 ID of param
	* @param {number} paramValue              Integer value of param
	*/
	MWBsetParam: null, //assigned with cwrap on module load
	MWBsetParam_arguments: ['number','number', 'number'],
	
	/**
	* Pause scanner view
	*/
	MWBtogglePauseResume: function () {
		MWBScanner.PAUSE_DECODING = !MWBScanner.PAUSE_DECODING; //this works as intended
		
		if (MW_properties.global.overlay.pauseMode == 2) //PM_STOP_BLINKING
		MW_methods.toggleBlinkingLines();
		else if (MW_properties.global.overlay.pauseMode == 1) //PM_PAUSE
		MW_methods.drawPauseRects();
	},
	MWBtogglePauseResume_arguments: [],
	
	/**
	* Ignore result if the same code is scanned in continuous scanning mode.
	*
	* @param {number} delay
	* Time interval between 2 scan results with the same result.code in milliseconds
	* Note: Internal implementation uses seconds. Provided value is rounded.
	*/
	MWBduplicateCodeDelay: null, //assigned with cwrap on module load
	MWBduplicateCodeDelay_arguments: ['number'],
	
	/**
	* Enable mirrored camera preview.
	* 
	* The mirroring is done along the X-axis. It's recommended when the used camera is facing the user (i.e. front camera).
	* 
	* @param {number} The type of mirroring to apply
	* @param {boolean} Apply mirroring
	* Default value is MIRROR_NONE.
	*/
	MWBenableMirroredPreview: function (mirrorType, apply) {
		if ((typeof mirrorType) == 'number')
		{
			MW_properties.global.mirroredType = mirrorType;
		}
		
		if ((typeof apply) == 'boolean')
		{
			var previewFrame_MirroredStyle = document.createElement('link');
			var previewFrame_MirroredStyle_init = function () {
				previewFrame_MirroredStyle.id = "mirror-preview-style";
				previewFrame_MirroredStyle.rel = "stylesheet";
				previewFrame_MirroredStyle.type = "text/css";
				previewFrame_MirroredStyle.href = "data:text/css;base64,I3ZpZGVvLWxheWVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgtMSk7dHJhbnNmb3JtOnNjYWxlWCgtMSk7fQ==";
				
				document.head.appendChild(previewFrame_MirroredStyle);
			};
			
			var previewFrame_MirroredStyle_remove = function () {
				var sheet = document.getElementById("mirror-preview-style");
				sheet.disabled = true;
				sheet.parentNode.removeChild(sheet);
			};
			
			var mirrored = ((mirrorType == CONSTANTS.MIRROR_FRONTCAM && JavaScript_mediaDevices_API.frontCamera) || mirrorType == CONSTANTS.MIRROR_ALWAYS);
			
			if (mirrored)
			{
				if (mwb_debug_print) console.log('mirrored');
				if (!MW_properties.global.has_mirror_css)
				{
					if (mwb_debug_print) console.log('apply mirrored style');
					previewFrame_MirroredStyle_init();
					MW_properties.global.has_mirror_css = true;
				}
			}
			else
			{
				if (MW_properties.global.has_mirror_css)
				{
					if (mwb_debug_print) console.log('remove mirrored style');
					previewFrame_MirroredStyle_remove();
					MW_properties.global.has_mirror_css = false;
				}
			}
		}
	},
	MWBenableMirroredPreview_arguments: ['number', 'boolean'],
	
	/**
	* Use front facing camera
	* 
	* @param {boolean} useFrontCamera
	* Whether or not to use front facing camera.
	* Default value is false (i.e. use back camera).
	*/
	MWBuseFrontCamera: function (front) {
		if ((typeof front) == 'boolean')
		{
			//book-keeping
			MW_properties.gui_accessible.frontCamera.runtime_value =
			MW_properties.gui_accessible.frontCamera.initial_value = front;
			
			//used-in setter
			JavaScript_mediaDevices_API.constraints_init(null, null, front);
			
			//and, only makes sense for mobile devices with 2 cams, PC doesn't have that
		}
	},
	MWBuseFrontCamera_arguments: ['boolean'],
	
	/**
	* Sets active or inactive status of parser types.
	* 
	* @param {number} activeParser
	* 
	* Available options:
	* 	MWP_PARSER_MASK_NONE
	* 	MWP_PARSER_MASK_AUTO
	* 	MWP_PARSER_MASK_GS1
	* 	MWP_PARSER_MASK_IUID
	* 	MWP_PARSER_MASK_ISBT
	* 	MWP_PARSER_MASK_AAMVA
	* 	MWP_PARSER_MASK_HIBC
	* 	MWP_PARSER_MASK_SCM
	*/
	MWBsetActiveParser: null, //assigned with cwrap on module load
	MWBsetActiveParser_arguments: ['number'],
	
	/**
	*  Resize partial scanner view
	*
	*  x, y, width, height (percentage of screen size)
	*/
	MWBresizePartialScanner: function (x, y, w, h) { //just a wrapper
		MWBScanner.resizePreview(x, y, w, h); 
		
		//note - has to be inside a f()
		//because MWBScanner is probs not defined when this var is defined
		//but when its called later on, it will be
		//Works!
	},
	MWBresizePartialScanner_arguments: ['number','number', 'number', 'number'],
	
	/**
	* Set the amount of time in seconds the camera preview will be on before closeScanner is called.
	* 
	* @param {number} timeout
	* Time in seconds. Default value is 30.
	* Accepted value range is 10-60. Also accepts 0 to disable the timeout.
	* Values out of range will result in applying the default value 30.
	*/
	MWBsetDecoderTimeout: function (timeout) { 
		if ((typeof timeout) == 'number')
		{
			//no book-keeping
			MWBScanner.set_DecoderTimeout(timeout);
		}
	},
	MWBsetDecoderTimeout_arguments: ['number'],
	
	/**
	* Set decodes per second, i.e. number of frames that are sent for decoding in a given second.
	* This setting only works with our camera preview i.e. when using the startScanning method.
	* 
	* Performance: Use of a decodes per second limit is recommended, such as 1 or 2 at the most, and in reality,
	* there is rarely a need for a higher decoding rate. Having a higher dps results in higher CPU usage,
	* which can lead to non-responsiveness of the cameraPreview.
	* 
	* @param {number} dpsLimit
	* Decodes per second limit. Default value is 2.
	* Accepted value range is 1-30.
	*/
	MWBsetDpsLimit: function (dps) { 
		if ((typeof dps) == 'number')
		{
			//no book-keeping
			MWBScanner.set_DpsLimit(dps);
		}
	},
	MWBsetDpsLimit_arguments: ['number']//,
	
};

/**
* Scanner Defaults to be loaded in the constructor of Scanner
* TODO: maybe set the callback function to an empty anonymous function
**/
var defaults = {
	
	init_decoder : false,
	valid_key : false,
	dflt_clb : function(result) {
		/**
		* result.code - string representation of barcode result
		* result.parsedCode - string json representation of parsed barcode result (if any)
		* result.type - type of barcode detected or 'Cancel' if scanning is canceled
		* result.bytes - bytes array of raw barcode result
		* result.isGS1 - (boolean) barcode is GS1 compliant
		* result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
		* result.imageWidth - Width of the scanned image
		* result.imageHeight - Height of the scanned image
		*/
		
		if (result.type == "Error") console.log(result.errorDetails);            
		else if (result.type == "Cancel") console.log("No Barcode.");
		else if (result.type == "NoResult") console.log("No Barcode.");
		
		else if (result.type == "Multicode")
		{
			let resultCodes_string = "";
			let foundCodes = result.count;
			for (let i = 0; i < foundCodes; i++)
			{
				resultCodes_string += result.codes[i].type + '\n' + result.codes[i].code + '\n';
				
			}
			console.log(result.type + '\n\n' + resultCodes_string);
		}
		else
		{
			console.log(result.type + (result.isGS1 ? " (GS1)" : "") + '\n' + result.code);
		}
	},
	company_logo: "cognex_icon.png", //different domain host req. cross-origin code
	company_logo_set: false,
	company_logo_allow_cross_origin: false,
	icon_or_key_lock: false
}

/**
* @name
*   Scanner
* @description
*   constructor of the scanner object
* @params
*   key   optional license key
*
*/
var Scanner = function() {

	var self = this;
	//load defaults
	for (var key in defaults) {
		if (defaults.hasOwnProperty(key)) {
			self[key] = defaults[key];
		}
	}
}

/**
* @name getVersion
* Returns an object of cmbWebVersion, decoderVersion and fullVersion.
* 
* @return {object}
* 	cmbWebVersion 	- cmbWeb version
* 	decoderVersion 	- decoding library version
* 	fullVersion 	- cmbWebVersion and decoderVersion
**/
Scanner.prototype.getVersion = function() {
	var jsonVersion = BarcodeScanner.MWBgetVersion();
	var jsonVersion_obj = JSON.parse(jsonVersion);
	Module._free(jsonVersion);
	
	return jsonVersion_obj;
}

/**
* @name setCallback
* Set a custom callback function that's called once the scan is performed. Should be called in the configuration stage.
* 
* Note: If the scanning method provides its own callback, the provided callback will be used.
* 
* @param {function} callback
**/
Scanner.prototype.setCallback = function(callback) {
	if (mwb_debug_print) console.log('setCallback called');
	this.dflt_clb = callback;
}

Scanner.prototype.setIcon = function(/*iconURI, allowCrossOrigin*/) {
	
	if (mwbScanner.icon_or_key_lock) return;
	if (mwbScanner.company_logo_set) return;
	
	if (mwb_debug_print) console.log('setIcon called');
	
	let argsCount = arguments.length;
	
	if (argsCount >= 1)
	{
		if (typeof arguments[0] == 'string') this.company_logo = arguments[0];
		
		if (argsCount == 2) {
			if (typeof arguments[1] == 'boolean')
			this.company_logo_allow_cross_origin = arguments[1];
		}
	}
	
	mwbScanner.icon_or_key_lock = true;
	
	var allowCrossOrigin = this.company_logo_allow_cross_origin;
	
	var ImageScanner = {
		
		MWBgetDataFromImage: function (imageURI) {
			imageURI = ((typeof imageURI) == 'string') ? imageURI : '';
			
			if (imageURI === '') return; //simple

			var canvasFrame = document.createElement("canvas");

			var pad = 0;

			var imageOverlay = document.createElement("img");
			if (allowCrossOrigin) imageOverlay.crossOrigin = "anonymous";
			
			imageOverlay.onerror = function () {
				
				if (mwb_debug_print) console.log("icon image did not load");
				return;
			}
			
			imageOverlay.src = imageURI;

			imageOverlay.onload = function () {
				
				canvasFrame.width = imageOverlay.width + (pad * 2);
				canvasFrame.height = imageOverlay.height + (pad * 2);

				var ctx = canvasFrame.getContext('2d');//, { alpha: false });
				
				ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
				ctx.fillRect(0, 0, canvasFrame.width, canvasFrame.height);
				//ctx.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
				//ctx.globalAlpha = 0.0;

				ctx.drawImage(imageOverlay, 0, 0, imageOverlay.width, imageOverlay.height,
					pad, pad, imageOverlay.width, imageOverlay.height);

				var imgData = ctx.getImageData(0, 0, canvasFrame.width, canvasFrame.height);

				var data = imgData.data;
				var nDataBytes = data.length * data.BYTES_PER_ELEMENT;
				
				var dataPtr = Module._malloc(nDataBytes);
				Module.HEAPU8.set(data, dataPtr);
				
				var _set_Icon = Module.cwrap('set_Icon', 'number', ['number', 'number', 'number']);
				
				var _rt = _set_Icon(dataPtr, canvasFrame.width, canvasFrame.height);
				
				Module._free(dataPtr);
				dataPtr = null;
				
				mwbScanner.company_logo_set = true;
			}
		}
	};
	
	try {
		//Scanner.defaults.company_logo
		var count = 0;
		//if (mwb_debug_print) console.log(count, mwbScanner.company_logo);
		
		ImageScanner.MWBgetDataFromImage(mwbScanner.company_logo);
		
	} catch (e) {
		if (mwb_debug_print) console.log('icon_e: ' + e);
	}
}

Scanner.prototype.setKey = function() {
	
	if (mwbScanner.icon_or_key_lock) return;
	
	if (mwb_debug_print) console.log('setKey called');
	
	let s_key = "";
	
	if (arguments.length == 1)
	{
		if (typeof arguments[0] == 'string') s_key = arguments[0];
	}
	else return;
	
	mwbScanner.icon_or_key_lock = true;
	
	if (mwb_debug_print) console.log('s_key: ' + s_key);
	
	try {
		let s_key_len = s_key.length;
		const uintc8 = new Uint8ClampedArray(s_key_len + 1);
		
		for (let i = 0; i < s_key_len; i++) uintc8[i] = s_key.charCodeAt(i);
		uintc8[s_key_len] = 0;
		
		if (mwb_debug_print)
		{
			console.log(uintc8);
			console.log(uintc8.length);
			console.log(uintc8.BYTES_PER_ELEMENT);
		}
		
		var data = uintc8;
		var nDataBytes = data.length * data.BYTES_PER_ELEMENT;
		
		if (mwb_debug_print) console.log('nDataBytes: ' + nDataBytes);
		
		var dataPtr = Module._malloc(nDataBytes);
		Module.HEAPU8.set(data, dataPtr);
		
		var _set_Key = Module.cwrap('set_Key', 'number', ['number']);
		
		if (mwb_debug_print) {
			console.log('dataPtr: ' + dataPtr);
			console.log('[dataPtr+0]: ' + Module.HEAPU8[dataPtr]);
			console.log('[dataPtr+1]: ' + Module.HEAPU8[dataPtr+1]);
			console.log('[dataPtr+2]: ' + Module.HEAPU8[dataPtr+2]);
			console.log('[dataPtr+3]: ' + Module.HEAPU8[dataPtr+3]);
		}
		
		var _rt = _set_Key(dataPtr);
		
		Module._free(dataPtr);
		dataPtr = null;
		
	} catch (e) {
		
		if (mwb_debug_print) console.log('key_e: ' + e);
	}
}

/**
* @name loadSettings
* Load the array of configuration settings. Returns a promise that resolves with the loaded settings.
* Should be called in the configuration stage.
* 
* @param settings - an array of settings objects with the following structure:
*     {"method" : "MWBmethod" , "value" : "array of params that the method expects"}
*     example:
*       [
*         {'method': 'MWBsetActiveCodes', 'value' : [cc.MWB_CODE_MASK_128]},
*         {'method': 'MWBsetFlags', 'value' : [cc.MWB_CODE_MASK_39, cc.MWB_CFG_CODE39_EXTENDED_MODE]},
*         {'method': 'MWBsetDirection', 'value' : [cc.MWB_SCANDIRECTION_VERTICAL | cc.MWB_SCANDIRECTION_HORIZONTAL]},
*         {'method': 'MWBsetScanningRect', 'value' : [cc.MWB_CODE_MASK_39, 20,20,60,60]},
*         {'method': 'MWBsetMinLength', 'value' : [cc.MWB_CODE_MASK_39, 4]},
*         {'method': 'MWBsetParam', 'value' : [cc.MWB_CODE_MASK_DM, cc.MWB_PAR_ID_RESULT_PREFIX, cc.MWB_PAR_VALUE_RESULT_PREFIX_ALWAYS]},
*         {'method': 'MWBsetActiveParser', 'value' : [cc.MWP_PARSER_MASK_ISBT]}
*       ]
* @returns Promise that resolves with the loaded settings.
**/
Scanner.prototype.loadSettings = function(settings) {
	if (mwb_debug_print) console.log('loadSettings called!');
    var that = this;
	var good_settings = [];
	var bad_settings = [];
	var has_good_settings = false;
	var has_bad_settings = false;
    return new window.Promise(function(resolve, reject) {
        if(Array.isArray(settings)) {
			for (var i = settings.length - 1; i >= 0; i--) {
				var expression = settings[i];
				if (mwb_debug_print) console.log(expression);
				if (mwb_debug_print) console.log(expression.value);
				
				if (typeof expression == 'object'
				 && typeof expression.method == 'string'
				 && typeof expression.value == 'object'
				 && Array.isArray(expression.value)
				 && typeof BarcodeScanner[expression.method] == 'function')
				 {
					 BarcodeScanner[expression.method].apply(null, expression.value);
					 good_settings.push(expression);
					 has_good_settings = true;
				 }
				else
				{
					bad_settings.push(expression);
					has_bad_settings = true;
				}
			}
        }
		else
		{
			reject('The settings argument is not an array.');
		}
		
		if (has_good_settings) resolve(good_settings);
		if (has_bad_settings) reject(bad_settings);
    });
}

/**
* @name getConstants
* Get the constants of the scanner so they can be used when calling configuration functions.
* 
* @returns {object} constants
**/
Scanner.prototype.getConstants = function() {
	
	return CONSTANTS;
}

/**
* @name checkBrowserCompatibility
* Check browser support for features.
* 
* By default this method only checks synchronous features.
* 
* Some of the features are obtained asynchronously. The check for those features can be enabled by passing their respective parameters.
* 
* @param {boolean|undefined} checkDefaultCamera
* Check default camera properties and capabilities.
* 
* @return {Promise<object>} Promise that resolves with an object of features needed for cmbWeb and their browser support state.
* @property {boolean} MEDIA_DEVICES 		- Support for mediaDevices and getUserMedia
* @property {boolean} SECURE_CONTEXT 		- Current context is secure
* @property {boolean} SCREEN_ORIENTATION 	- Support for screen.orientation
* @property {boolean} WEB_ASSEMBLY 			- Support for WebAssembly
* @property {boolean} WEB_AUDIO 			- Support for Web Audio
* @property {boolean} CAMERA_FLASH 			- Support for camera flash
* @property {object}  DEFAULT_CAMERA 		- (optional) Default camera properties and capabilities
**/
Scanner.prototype.checkBrowserCompatibility = async function(checkDefaultCamera) {
	let MEDIA_DEVICES = (typeof navigator.mediaDevices === 'object' && typeof navigator.mediaDevices.getUserMedia === 'function');
	let SECURE_CONTEXT = window.isSecureContext;
	let WEB_ASSEMBLY = (typeof window.WebAssembly === 'object');
	let WEB_AUDIO = ('AudioContext' in window || 'webkitAudioContext' in window);
	
	const _Screen_Orientation = (typeof screen.orientation === 'undefined') ? 'undefined' : screen.orientation;	//undefined on Safari
	let SCREEN_ORIENTATION = !(_Screen_Orientation === 'undefined');
	
	let browser_supported_constraints = navigator.mediaDevices.getSupportedConstraints();
	let CAMERA_FLASH = browser_supported_constraints.torch || false;
	let CAMERA_ZOOM = browser_supported_constraints.zoom || false;
	
	let DEFAULT_CAMERA = {
		LABEL: ""
		,ID: ""
		,FLASH: false
		,ZOOM: false
		,ZOOM_VALUES: false
		,ZOOM_LEVELS: null
	};
	
	if (checkDefaultCamera) //async
	{
		navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
		.then(function(stream) {
			const track = stream.getVideoTracks()[0];
			let runtime_settings_videoTrack = track.getSettings();
			
			DEFAULT_CAMERA.LABEL = track.label;
			DEFAULT_CAMERA.ID = runtime_settings_videoTrack.deviceId;
			
			//videoTrack capabilities depends on ImageCapture promise or timeout
			function capabilitiesDependentCode() {
				let capabilities_Indicator = null;
				let ranges_exist = false;
				
				try {
					capabilities_Indicator = track.getCapabilities(); //Firefox doesn't support this method
					ranges_exist = true;
				} catch (e) {
					//use browser_supported_constraints instead
					capabilities_Indicator = browser_supported_constraints;
					//Firefox doesn't support torch and zoom anyways
				}
				
				if (capabilities_Indicator.torch) DEFAULT_CAMERA.FLASH = true;
				if (capabilities_Indicator.zoom) DEFAULT_CAMERA.ZOOM = true;
				if (ranges_exist) DEFAULT_CAMERA.ZOOM_VALUES = true;
				
				if (ranges_exist) {
					try {
						const min = capabilities_Indicator.zoom.min;
						const max = capabilities_Indicator.zoom.max;
						const step = capabilities_Indicator.zoom.step;
						
						//ranges might use different scale on different devices
						const number_of_digits = MW_methods.helpers.get_number_of_Digits(max);
						
						const _max = max - Math.pow(10, (number_of_digits - 2)); //this substracts 1% from max (needed because values are stepped and max might be ignored like out-of-range value)
						const mid = min + ((_max - min) / 2);
						
						DEFAULT_CAMERA.ZOOM_LEVELS = [min, mid, _max] //different from ^
					}
					catch (e) {
						//browser supports zoom but physical device doesn't
						DEFAULT_CAMERA.ZOOM_VALUES = false;
					}
				}
				else {
					DEFAULT_CAMERA.ZOOM_LEVELS = [100, 250-8, 400-16] //extrapolated defaults
				}
				
				//turn off the camera
				if (track != null) track.stop();
				
			} //end of capabilitiesDependentCode
			
			const _ImageCapture = (typeof ImageCapture === 'undefined') ? 'undefined' : ImageCapture;
			
			if (_ImageCapture === 'undefined')
			{
				setTimeout(function () {
					capabilitiesDependentCode();
				}, 200); //get_videoTrack_capabilities_timeout
			}
			else
			{
				//Create image capture object and get camera capabilities
				const imageCapture = new _ImageCapture(track);
				const photoCapabilities = imageCapture.getPhotoCapabilities()
				.then(() => {
					//check if camera has a torch and zoom
					capabilitiesDependentCode();
				});
			}
		})
		.catch(function(e) {
			//JavaScript_mediaDevices_API.handleError(e); //scope
		});
	}
	
	let browserFeatures =  (checkDefaultCamera) ? {
		 MEDIA_DEVICES: MEDIA_DEVICES
		,SECURE_CONTEXT: SECURE_CONTEXT
		,SCREEN_ORIENTATION: SCREEN_ORIENTATION
		,WEB_ASSEMBLY: WEB_ASSEMBLY
		,WEB_AUDIO: WEB_AUDIO
		,CAMERA_FLASH: CAMERA_FLASH
		,CAMERA_ZOOM: CAMERA_ZOOM
		//optional:
		,DEFAULT_CAMERA: DEFAULT_CAMERA
	} : {
		 MEDIA_DEVICES: MEDIA_DEVICES
		,SECURE_CONTEXT: SECURE_CONTEXT
		,SCREEN_ORIENTATION: SCREEN_ORIENTATION
		,WEB_ASSEMBLY: WEB_ASSEMBLY
		,WEB_AUDIO: WEB_AUDIO
		,CAMERA_FLASH: CAMERA_FLASH
		,CAMERA_ZOOM: CAMERA_ZOOM
	};
	
	return new window.Promise(function(resolve, reject) {
		resolve(browserFeatures);
	});
}

/**
* @name getCameras
* Get available cameras for this device.
* 
* @returns Promise<[{ id: string; label: string }]>
* 	id 		- Unique id of the camera
* 	label 	- Descriptive label of the camera
**/
Scanner.prototype.getCameras = async function() {
	
	async function requestPermission()
	{
		let supported = (typeof navigator.mediaDevices === 'object' && typeof navigator.mediaDevices.getUserMedia === 'function' && (location.protocol === 'https:' || (location.hostname === 'localhost' || location.hostname === '127.0.0.1'))) ? true : false;
		
		if (supported)
		{
			await navigator.mediaDevices.getUserMedia({ video: true });
		}
	};
	
	//Permissions first!
	try {
		const { state } = await navigator.permissions.query({name: "camera"});
		if (state != "granted")
		{
			await requestPermission();
		}
	}
	catch (error) {
		await requestPermission();
	}
	
	return new window.Promise(function(resolve, reject) {
		const mwb_getCameraSelection = async () => {
		  const devices = await navigator.mediaDevices.enumerateDevices();
		  const videoDevices = devices.filter(device => device.kind === 'videoinput');
		  mwb_VDList = videoDevices.map(videoDevice => {
			return { id: videoDevice.deviceId, label: videoDevice.label };
		  });
		  resolve(mwb_VDList);
		};
		navigator.mediaDevices.enumerateDevices().then(mwb_getCameraSelection);
	});
}

/**
* @name setCamera
* Set a specific camera to use for this device.
* 
* Note: Overrides the effect of the MWBuseFrontCamera setting.
* 
* @param {string} id
**/
Scanner.prototype.setCamera = function(id) {
	if (typeof id == "string") mwb_VDSelection = id;
}

/**
* @name scanImage
* Scan an image file.
* 
* @param {string} imageURI 				The path to the image file.
* @param {function|undefined} callback 	Result callback (will get replaced by a default callback if it's missing)
**/
Scanner.prototype.scanImage = function() {

	var args = Array.prototype.slice.call(arguments)
	,callback = this.dflt_clb
	,that = this
	,imageUri = args[0];


	if(args.length == 2)
	if(typeof args[1] === 'function') callback = args[1];

	BarcodeScanner.MWBscanImage(imageUri, callback);
}

/**
* @name scanFrame
* Scan a single frame.
* 
* @param {ImageData|dataURL} imageData 	Either an ImageData object or a dataURL image string to be scanned.
* @param {function|undefined} callback 	Result callback (will get replaced by a default callback if it's missing)
**/
Scanner.prototype.scanFrame = function() {

	var args = Array.prototype.slice.call(arguments)
	,callback = this.dflt_clb
	,that = this
	,image_data = args[0]; //ImageData or dataURL
	
	var image_type = "";

	if(args.length == 2)
	if(typeof args[1] === 'function') callback = args[1];
	
	if(typeof args[0] === 'object') image_type = "ImageData";
	if(typeof args[0] === 'string') image_type = "dataURL";

	BarcodeScanner.MWBscanFrame(image_data, image_type, callback);
}

/**
* @name startScanning
* Starts the scanner with different params (in view / fullscreen).
* 
* If a div element with "cmbweb-preview-container" id is used in the html page, the sdk will detect this and operate in 'container mode' (the cameraPreview will fill the container).
* The x,y,width,height args have no effect in container mode.
* 
* Calling the startScanning method involves camera access and requests user permissions if needed.
* A "cameraReady" event is triggered when the camera is fully initialized after calling the startScanning method. After this event the cameraPreview is shown.
* 
* Depending on device features and user permissions for camera access, any of the following camera-related errors could be returned in the result.errorDetails.name of the callback:
* - NotReadableError
* - ProtocolError
* - NotAllowedError
* - NotFoundError
* - AbortError
* - OverconstrainedError
* 
* @param {function|undefined} callback
* @param {number|undefined} x
* @param {number|undefined} y
* @param {number|undefined} width
* @param {number|undefined} height
**/
Scanner.prototype.startScanning = function() {
	
	scannerConfig();
	if (MWBScanner.PAUSE_DECODING) BarcodeScanner.MWBtogglePauseResume(); //reset
	
	//expected number of args: 0, 1, 4, 5
	
	let argsCount = arguments.length;
	let callback;
	let x,y,w,h; //and also the args in a common runtime location
	
	let args_ok = true; //assume and test to disprove
	
	let partialView = false;
	if (mwb_debug_print) console.log('argsCount');
	if (mwb_debug_print) console.log(argsCount);
	if (argsCount < 4)
	{
		//fullScreen
		if (argsCount >= 1)
		if (typeof arguments[0] == 'function') callback = arguments[0]; else args_ok = false;
	
		partialView = false;
	}
	else
	{
		//partialView
		if (argsCount >= 5)
		{
			if (typeof arguments[0] == 'function') callback = arguments[0];  else args_ok = false;
			if (typeof arguments[1] == 'number') x = arguments[1]; else args_ok = false;
			if (typeof arguments[2] == 'number') y = arguments[2]; else args_ok = false;
			if (typeof arguments[3] == 'number') w = arguments[3]; else args_ok = false;
			if (typeof arguments[4] == 'number') h = arguments[4]; else args_ok = false;
		}
		else
		{
			if (typeof arguments[0] == 'number') x = arguments[0]; else args_ok = false;
			if (typeof arguments[1] == 'number') y = arguments[1]; else args_ok = false;
			if (typeof arguments[2] == 'number') w = arguments[2]; else args_ok = false;
			if (typeof arguments[3] == 'number') h = arguments[3]; else args_ok = false;
		}
		
		partialView = true;
	}
	
	MW_properties.global.container = document.getElementById("cmbweb-preview-container");
	
	if (args_ok)
	{
		//call with args
		
		if (partialView) MWBScanner.resizePreview(x,y,w,h);
		else MWBScanner.resizePreview(0, 0, 100, 100);
		
		MWBScanner.start(callback); //callback is safe-checked
	}
	else
	{
		//argless call (use defaults)
		if (mwb_debug_print) console.log("error: provided arguments for startScanning don't match the expected data types");
		
		//implement as you wanted - theres callback for start
		MWBScanner.start();
	}
	
};

/**
* @name closeScanner
* Close a previously started scan from startScanning.
**/
Scanner.prototype.closeScanner = function(){
	BarcodeScanner.MWBcloseScanner();
};

/**
* @name togglePauseResume
* Toggles between pause and resume of scanning.
* 
* The camera stream will continue running (i.e. will be shown on the cameraPreview), but no frames will be scanned by the decoder during the paused state. This will significantly reduce CPU usage.
**/
Scanner.prototype.togglePauseResume = function(){
	BarcodeScanner.MWBtogglePauseResume();
};

/**
* @name toggleFlash
* Toggles the flash feature (if present) of the camera. The toggle switches between on and off state.
**/
Scanner.prototype.toggleFlash = function(){
	BarcodeScanner.MWBtoggleFlash();
};

/**
* @name toggleZoom
* Toggles the zoom feature (if present) of the camera.
* 
* Typically there are 3 zoom states that the toggle cycles through: no zoom, 50% zoom, 100% zoom.
**/
Scanner.prototype.toggleZoom = function(){
	BarcodeScanner.MWBtoggleZoom();
};

/**
* @name resumeScanning
* Resumes scanning after it was paused.
* 
* Use this method if already using MWBcloseScannerOnDecode(false) to achieve continuous scanning.
**/
Scanner.prototype.resumeScanning = function(){
	BarcodeScanner.MWBresumeScanning();
};

/**
* @name setScannerOverlayMode
* An API version of the MWBsetOverlayMode configuration method.
* 
* @param {number} overlayMode
**/
Scanner.prototype.setScannerOverlayMode = function(overlayMode){
	BarcodeScanner.MWBsetOverlayMode(overlayMode);
	
	if ((typeof overlayMode) == 'number' && MWBScanner.DECODER_ACTIVE)
	MW_methods.handleOverlayModes();
};

/**
* @name setBlinkingLineVisible
* Set the visibility of the cameraPreview blinking lines.
* An API version of the MWBsetBlinkingLineVisible configuration method.
* 
* @param {boolean} visible
**/
Scanner.prototype.setBlinkingLineVisible = function(visible){
	BarcodeScanner.MWBsetBlinkingLineVisible(visible);
	
	if ((typeof visible) == 'boolean' && MWBScanner.DECODER_ACTIVE)
	{
		var mwBlinkingLines = MW_properties.global.blinkingLines;
		if (visible) {
			mwBlinkingLines.v.style.visibility = "visible";
			mwBlinkingLines.h.style.visibility = "visible";
		}
		else {
			mwBlinkingLines.v.style.visibility = "hidden";
			mwBlinkingLines.h.style.visibility = "hidden";
		}
	}
};

/**
* @name resizePartialScanner
* Resizes partial scanner cameraPreview dimensions.
* 
* If a div element with "cmbweb-preview-container" id is used in the html page, the sdk will detect this
* and operate in 'container mode' (the cameraPreview will fill the container).
* The resizePartialScanner method has no effect in container mode.
* 
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
**/
Scanner.prototype.resizePartialScanner = function(x, y, width, height) {
	BarcodeScanner.MWBresizePartialScanner(x, y, width, height);
};

Scanner.prototype.CONSTANTS = CONSTANTS;
//var mwbScanner = new Scanner();

Scanner.prototype.generateMethod = function(methodPrefix, methodName){
	function new_method(){
		//var methodName = 'MWBsetActiveCodes'; //maybe keep a table of valid method names to avoid errors due to missed strings
		var argsCount = BarcodeScanner[methodName + "_arguments"].length;
		var jsonArgs = JSON.stringify(BarcodeScanner[methodName + "_arguments"]);
		if(arguments.length != argsCount) { if (mwb_debug_print) console.log('error: provided ' + arguments.length + ' argument(s) but function '+ methodName + '(' + jsonArgs + ') takes ' + argsCount + ' argument(s)'); return; }
		
		for (var arg = 0; arg < argsCount; arg++)
		{
			var argType = BarcodeScanner[methodName + "_arguments"][arg];
			if (typeof arguments[arg] !== argType) { if (mwb_debug_print) console.log('error: provided "' + typeof arguments[arg] + '" in arguments[' + arg + '] but function ' + methodName + '(' + jsonArgs + ') takes "' + argType + '"'); return; }
		}
		
		var cwrap_args_array = []; //every arg is a number regardless of the data type on the native side
		for (var arg = 0; arg < argsCount; arg++) { cwrap_args_array.push('number'); }
		
		var f = Module.cwrap(methodPrefix + methodName, 'number', cwrap_args_array);
		var RT = f.apply(null, arguments);
		
		if (RT < 0) //this only works for functions that return int (most do, but some- like scanFrame, don't)
		{
			var json_args = JSON.stringify(arguments);
			if (mwb_debug_print) console.log('error: function ' + methodName + ' returned ' + RT); return;
		}
		
		return RT; //maybe use mwb_debug_print above
	};
	
	return new_method;
}

var BeepHelper = {
	
	// Check if the browser supports web audio. Safari wants a prefix.
	webAudio_supported: ('AudioContext' in window || 'webkitAudioContext' in window),
	webAudio_initialized: false,
	AudioContext: null, //window.AudioContext || window.webkitAudioContext,
	context: null, //new AudioContext()// Make it crossbrowser
	gainNode: null,
	beepBuffer: void 0,
	
	webAudio_audio_init: async function() {
		// The Promise-based syntax for BaseAudioContext.decodeAudioData() is not supported in Safari(Webkit).
		window.fetch(sound_base64)
		.then(response => response.arrayBuffer())
		.then(arrayBuffer => BeepHelper.context.decodeAudioData(arrayBuffer,
				audioBuffer => {
					BeepHelper.beepBuffer = audioBuffer;
				},
				error =>
				console.error(error)));
	},
	
	webAudio_audio_play: function(audioBuffer) {
		var source = BeepHelper.context.createBufferSource();
		source.buffer = audioBuffer;
		source.connect(BeepHelper.context.destination);
		source.start();
	},
	
	webAudio_unlock: function() {
		//Here's the part for unlocking the audio context, probably for iOS only
		if (mwb_debug_print) console.log("unlocking")
		// create empty buffer and play it
		var buffer = BeepHelper.context.createBuffer(1, 1, 22050);
		var source = BeepHelper.context.createBufferSource();
		source.buffer = buffer;
		source.connect(BeepHelper.context.destination);

		// play the file. noteOn is the older version of start()
		source.start ? source.start(0) : source.noteOn(0);
	},
	
	webAudio_init: async function() {
		if (BeepHelper.webAudio_supported && !BeepHelper.webAudio_initialized) {
			
			BeepHelper.AudioContext = window.AudioContext || window.webkitAudioContext;
			BeepHelper.context = new BeepHelper.AudioContext();
			
			BeepHelper.gainNode = BeepHelper.context.createGain();
			BeepHelper.gainNode.gain.value = 1; // set volume to 100%

			await BeepHelper.webAudio_audio_init();
			
			// Try to unlock, so the unmute is hidden when not necessary (in most browsers).
			BeepHelper.webAudio_unlock();
			
			BeepHelper.webAudio_initialized = true;
			// Play the file. You won't hear it in iOS until the audio context is unlocked.
			//BeepHelper.webAudio_audio_play(BeepHelper.beepBuffer);
		}
	}
};

const sound_base64 = "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAKAAAR9AAZGRkZGRkZGRkzMzMzMzMzMzMzTExMTExMTExMTGZmZmZmZmZmZmaAgICAgICAgICAmZmZmZmZmZmZmbOzs7Ozs7Ozs7PMzMzMzMzMzMzM5ubm5ubm5ubm5v////////////8AAAA5TEFNRTMuOThyAc0AAAAAAAAAABSAJAhwQgAAgAAAEfQnyG0rAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQxAAAE+V5IhSXgANTs7G3JXoCAABgkxcjFYrJxQgQIBQAQAAGDGIaHqNuJQJoXgYYAAAHhJEWTsy3OA8f2YGSUv49ZL24esy24thcFBXbAaZ1x4FJWN/In0PUavV6vV8fD9/ff/o8UbPumob+dgNM00PV8ffzDePHlPe+ICvV6vV8fECl1YrHkSmv6Xve+//d5E1//6Xve973v//////////Smv//83vDfv7lw/8QOBwMLZcKisZCgYiwNlWD4egY6G+qvFrD1nVhqwD+68DA0QjcDFSyQOngaQeV/gZxALoAYOqGtkUTdJ4GCngI4GApANwGAaARQGEHA23+BkxYj+BhuBFMBlMgu0BhuQZYBgMAOKtRaX08DAgQDwDB/ggIDBtgOgCQA8BhCAZcBiFQig9FTGf4GCPAPAGAbASQGBAAEgN+D4BSwX/Pft+GggYAGALgiAGwIgBYKADQopHhs4n+zo+9X9kkSiRcrmjOal9a/qqb/q0EOo4VS2rqUzemzf/r/ojsBAAAIACK4tKapiy2160Y4rjLCEInkLDQ//uSxAwAmC2lQLxqgBMNNOcl1k/AMEBcA1hgcCDoGERsGBBPYYhD1SqTBeZRqaFcfyQK4+Q+QG6opEZsXCOSAIOQNJKIDlpAAxeLAMJAkAAKieSDkUHOI5ZMkNEJhO4tQsQ/kFOCkxNSDEYMmHwgYJOoCg1EFRwkWMz5cLJIl1Bfru5ikpNQm8N5Jk1dnSRY4jqoKu51SmQI9FqSvXsq3qdKoiZVpJJPot1v6lsdqEICDJJMtKj/9V0ZeEcjuUEEgAQO848fdCWzVDRzVHS5Tl3lypKIzRoeNxXK08vaYJwqa8AGIguCBAd1uUchmLz/cJ6bfPuUMspi6x1TpbsSQtGAwMHpcNNxGLssyBAJkwL231eyHaj02n6oalmu/N7JmsWbnSkACih/mCYDvBHyO2AUrE5e81nS13M+/Uoul8E8i2lxN2PrUcTVLiNFNAgKKJmukH6i3mpmowMWreozKaX1dMM9N0Fpb/rf9ApOgFrwsC0nM6zb5h6bUbFECDCSMVJRVnLqvj8toK9ypUnamsuUEutzkDQQia0pRcwZyE1IC//7ksQQA9fdpzQOsn4DNDRngce30MgCQaIRYuDm0kbkVWUU0RpIHglyWfur7BFB0TSIHBCExgBwBhiGCRLAkaR4Jm3UsafjDD9w1Gad33lre8EXbV+m2phUATBBCzLMB1QSOIRAnJY4HwgUiYcrvSyyaLPmBfAh0LNlxEqlhkUjqWZofl0660hCAiTMj/2X9als4nATUzWjmD/UcNvu7FkE2jRLhgbnaL/f0WmaZgoHDFFKzSt9p+L097Ctdwzx5apJZK4bhLtqDr/RAMKBoSDBhzbmsBcJEIxMAjCAQSAp40pguxxJFv+1XbZe1QuwEA8VABhQMGGgQQg8wqOzVNaMDpMzeMTAAJDg2RB5ZS1IikW67uMvgJQBXC5GIKAPI761ImIQKYFAqPwGNgQ7gEDErF0JIjTvUcJcHQ0Lc31r/v6w48YvAHuSaPi2LvHmocfPpAiZfs7+79+f2d5zmmb7gU1eyD/zMwBoKb/6i4aKTb6zF4mItz1///rYzTACtKFAABbjMutVreMqpuYWNzOFenv0mobQCuaIQcGFIx2JTEz/+5LEEIHYaaU6rjz+gwo0phW0t8hRColFgqgCU2a080CP8yqWwBDEtdt900XMQ0a4XhHAEicBhEYIGpiCfmbCMKikxSFgCBkRm4uchsxKHnYXi6L8RpuDcl3InJhQC8ThoSTBQDZ2GF8QAWCE8ilUxzqlQtkkWbEfVter7qVxHCfcGJv/6i6jT737yQo1rvbWiqV1bE9ca3/SNaOd9Jhprix/8dLEhk6X+yQHHkf+WM8n8qLQFE2DRpRmk9DMU0PS2eorsoqwzZrwZHmXNemkxkDy8JhBqbkOG8hSAgLgKcKi9uOU7qV5S3rxROmsK2qNIAm1Q4iEMIgNlRiogZlenNA4GGAuQKXJML2gZOVet2OMRYynKyV0V3JDqlLYoInCgpbJUBDDho1EKEIApMDxGKiUdPVKnE1WmqzquSRigFy8su8bfXjGu9E1UX1apwSVG6j6E09SSDqb6joTEeh9PTb6y+9aHrKJmDhTXZzTUnWazqqXzFxNzd0ARgAAAdOMvrCYW7k3cjUup5F8/IeTsxLpDg+DNlzpzCg4xb41oBCl//uSxBQAmG2jMS0t/sLwNKYlpi/QljU11PHSxCvSR7sw1KJtkm+MNftqK4gAZUkAWpkPZrMYUEoIIFZY5bVWTyms/UUjFDHX3xlcfkjJIMXFBaqAhbLuWa0YfyUA5AZY979xxdO7YpHkCNBko88dNfVqJfC0ObzStwiUFZD/3K0/V7i48fhb/1gxSOsvqutKuNTvXuvIwxImAtBaq3FlVLekKSPXXbXBe/15HGVwUhxEjaAv9VOR47ksfiGqaUfCZmvjGMqkzdyoH/dlvXeMyAGpji1HWksrjMGSO3auRqnisujkHyWXrue9VEUDJGmK1iSZULW2oPbIpibrOtKqSvDMgrXpxuLezmcZibsCMaHCGBO8LlJiYnx/D77k7HxzWXv5kgEk82kCz8ftH/zPdnwok9rIRxcyfWcz0tbLUB6VXMPXflVdkGQZ0mr6VKG+1uom363HtuKQIxd0PpJg72XeVtNbLPqHZuH4lUpNAADUiQXzmKWVW7VFT1qaXWbMetUWMM3uZNZdBmYIGA7JapJt9ZbEPl9NO57n5mrep4z1pP/7ksQagJWNoSzMvXpC47SlJZYf0LapPw+ns4ABlayWSXmewaKlVNnyuiuo8daY2NmLcxquAtVTwALBzpg/hMkNbjtn7RqmRpbmtOrJOVOH4p6DkUqrpZ1ScPOJ/kMOgEZdK7WuT3vRLG2qkZf1wTSmkl/4PcMogoMayuv/KSUd4PJGzdtfX7a2VuRtAALBFchs6sLU/g6ECW8X9hdJGIYqu+/kDzU1NPrD7KljAxYgFdNTtmrWZbVxm8qTChb2Q8pbUzADB3Lp09x0ZA4FGLjb5cssgfCL6h6ksy1zYdh6XQbOQ7PYzLstLNBIXDZhOk6Ehnrq+faqzN5iuyhSW2SsPZRXsz9chrKfnLcX7zU8QcpMQTJzdfV1d+ufNUjQvjpHlBLoAcAgme/0EwD4nEUSTJuoJmFx4XGUoZHm4X24qGKnsDGqBCYAAG7EoEqjeC0D6PXnLWRQ0dYa5ZlNw6VILWjMjq42eWscd61jj3tXXatSvnGnnrwXC6tFvGU44frLWNXXcauW+0sACpFYsMV47U2Pim6WrNxonZrSLh6+6vv/+5LELgCRUaMzJmERgpM0pNT8ojAi/PoHDTigwIFz/96cvf//fkjOrHf+YPsa7QW31Yfxja8uHpZ5sQUU3TF14FFDsAIAxwcqeGYhRLGUlJdT6ZW5SM625PNwGZGsUy6LZArYuRLxg0ajUsppbO28Ksqjt3GxXoqsmjVNFoJMM0HLOTFIbsSGjmo1zn4XaCXWNUcapJyUUEkLdIkWZreB40yBYQCzZWt6hcYWJFIIsWK2apmjtYG2pCG0eIROl/6FP5sj/7qU/CU4e3/wS7GXw6wXjRE+V+oitLHCooIxZxVFt9hIIwqJ6gAECQgZReACYuCqfppYVZ7WYGRigWZHj5ghq5dwHk4Yw6DmU0zM8w677/Eae+c7+3MvrDsZGHjQ5mGmburSQfM1/+kpqOY/HLvc8rc7LFtrlxuoYcvM04mpJ7t3g566kjqKWeReVL0pLDWhFDC+2UnCdb/2aij8Bmq/5zz3hqrqajVqZ5KznN2ZZqfb+U87dt/5TyBE56H5rhQUkAgVUJRV9JnoUOQ7zsJ9Rl1KePO1MzOEZtRZ/ZmU//uSxFyCE3WlKSfg2IJ1rSQFlJ/Qv+4qlBMPQUufzUrlfbPcozGucq2eYUr0WW6x4EFhpzc2mthlueVNa3zLs5QY//OXa3zF0lPXZYeZHPFcgVCwXGTCqPHR669rLo7Vx21e7AgjBaRpjwTObv42t41P+WciDJRcbAon9TQoX1Q1CpvVWVseOAMErFTsjS4dOknPA2sBBzALRDhHQjLRaMX129kL8XJVYP46mo0jqjdhZA4gkRoxL1hMzahrxWxFdd7R9Kyyoa4vhgkSDaS5vHocVm1lhXYYjDFfRt2tnTCoaWnE9CtJEP5lZMUuRNWQioEiYqCLMtvf7QoYxj6lsUOVKPVQoYEQqJltVFJLm+UYocWRPEIGXAS/qr8DAVjHDpQ1Uv7mv86pM1bLaqv6iWDoz8UAG8UJdDLNo4kNUy7b4F/FfKVFIk7T4RacVayzMLc3QWJhUyJRR8nwexVm4daAQpDVMxx1gXoicJIdCkFQuB8Ggfi0RhBDoOhpIBXMDNYvQkxfODcfRGEEVDSKRMGscCeaI1L1tzc2CEECBo5Msv/7ksSGgxPZlRYnpH6KnTBWBPYPGf/9lsVlDBQQMKCDhBYzLJZZZQQYGCdDJr+ysFBAwoIOIHEgQUECByyyyVBxIEFDAwYIOg5/adoqqUxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5LEqgPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
const sound = new Audio(sound_base64);

/**
* @name beep
* Play a beep sound (requires user input).
* 
* The use of startScanning (initiated by user action such as the click of a button, once per session)
* must precede the use of this method.
**/
Scanner.prototype.beep = function() {
	if (BeepHelper.webAudio_supported && BeepHelper.webAudio_initialized) {
		BeepHelper.webAudio_audio_play(BeepHelper.beepBuffer);
	}
	else {
		sound.volume = 1;
		sound.muted = false;
		sound.pause();
		sound.currentTime = 0;
		sound.play();
	}
}; //semicolon needed to separate from ResizeObserverPF that follows

//2. MWBConfig_wa <<<<<<<<<<<>>>>>>>>>>>
/*
*	USAGE: INCLUDE WITH  <script type="text/javascript" src="js/MWBConfig_wa.js"></script> in your index.html
*/
/*var scannerConfig = function(){
	
	if(mwb_debug_print) console.log('scannerConfig called');
	if(mwb_debug_print) console.log(mwbScanner);
	
	//Add an event listener
	document.addEventListener("scannerModuleLoaded", function(e) {
		
		if (mwb_debug_print) console.log(e.detail); //Prints "Scanner is ready."
		
		//can use mwbScanner.* methods now
		
	});
	
	
	/**
	* result.code - string representation of barcode result
	* result.parsedCode - string json representation of parsed result (if any)
	* result.type - type of barcode detected or 'Cancel' if scanning is canceled
	* result.bytes - bytes array of raw barcode result
	* result.isGS1 - (boolean) barcode is GS1 compliant
	* result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
	* result.imageWidth - Width of the scanned image
	* result.imageHeight - Height of the scanned image
	*\/
	
	//Here we have a straight forward callback that just alerts the value.
	//This callback will be set as default and mwbScanner.startScanner can be called without inline callbacks
	//However users still have the option to not even use setCallback, and set a callback function directly passed as parameter to mwbScanner.startScanner
    mwbScanner.setCallback(
		function (result) {
		
			if (result.type == "Cancel") console.log("No Barcode.");
			else alert(result.type + '\n' + result.code);
		
			//mwbScanner.resumeScanning(); //if using !MWBcloseScannerOnDecode
		}
	);

    // Some predefined settings, comment out the ones you don't want enabled
    var mw_c = mwbScanner.getConstants(),
	settings = [
		{"method" : "MWBsetActiveCodes", "value" : [
			mw_c.MWB_CODE_MASK_QR | 
			mw_c.MWB_CODE_MASK_DM | 
			//mw_c.MWB_CODE_MASK_RSS | 
			//mw_c.MWB_CODE_MASK_39 | 
			mw_c.MWB_CODE_MASK_EANUPC | 
			//mw_c.MWB_CODE_MASK_128 | 
			mw_c.MWB_CODE_MASK_PDF | 
			//mw_c.MWB_CODE_MASK_AZTEC | 
			//mw_c.MWB_CODE_MASK_25 | 
			//mw_c.MWB_CODE_MASK_93 | 
			//mw_c.MWB_CODE_MASK_CODABAR | 
			//mw_c.MWB_CODE_MASK_DOTCODE | 
			//mw_c.MWB_CODE_MASK_11 | 
			//mw_c.MWB_CODE_MASK_MSI | 
			//mw_c.MWB_CODE_MASK_MAXICODE | 
			//mw_c.MWB_CODE_MASK_POSTAL |
			0x0 //for binary-OR syntax purposes
		]}
		//,{"method" : "MWBsetLevel", "value" : [2]} //3 will try to scan harder than the default which is 2
		,{"method" : "MWBsetActiveParser", "value" : [mw_c.MWP_PARSER_MASK_AAMVA]}
		//,{"method" : "MWBenableFlash", "value" : [true]}
		//,{"method" : "MWBenableZoom", "value" : [true]}
		//,{"method" : "MWBsetOverlayMode", "value" : [mw_c.OverlayModeImage]}
		//,{"method" : "MWBsetBlinkingLineVisible", "value" : [true]}
		//,{"method" : "MWBsetPauseMode", "value" : [mw_c.PM_STOP_BLINKING]}
		//,{"method" : "MWBusePartialScanner", "value" : [false]}
		//,{"method" : "MWBenableHiRes", "value" : [true]}
		//,{"method" : "MWBuseFrontCamera", "value" : [false]}
		//,{"method" : "MWBcloseScannerOnDecode", "value" : [false]}
		,{"method" : "MWBsetDecoderTimeout", "value" : [30]} //10-60
		,{"method" : "MWBsetDpsLimit", "value" : [2]} //1-30
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_25, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_39, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_93, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_128, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_AZTEC, 20, 2, 60, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_DM, 20, 2, 60, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_EANUPC, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_PDF, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_QR, 20, 2, 60, 96]} //for some reason decoding QR codes is harder when the code fills up the viewfinder
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_RSS, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_CODABAR, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_DOTCODE, 30, 20, 40, 60]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_11, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_MSI, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_MAXICODE, 20, 2, 60, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_POSTAL, 2, 2, 96, 96]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_25, 5]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_39, 5]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_MSI, 5]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_CODABAR, 5]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_11, 5]}
		//,{"method" : 'MWBsetDirection', "value" : [mw_c.MWB_SCANDIRECTION_VERTICAL | mw_c.MWB_SCANDIRECTION_HORIZONTAL]}
	];
		
	return mwbScanner.loadSettings(settings)
				.then(function(response){
					//if (mwb_debug_print) console.log(response); //the response is the settings array
				})
				.catch(function(reason){
					if (mwb_debug_print) console.log(reason)
				});
}*/

//3. sdk_modular <<<<<<<<<<<>>>>>>>>>>>
/*NOTE: some methods from native lib aren't made available - like enable/disable a particular symbology and getting settings, like active symbologies, etc.

Design Q: Keep startScanning(x,y,w,h) args interface, and result success callback user/default?

MAYBE .iniClear() -this was mainly used for mthreading(no such thing here)

1. get device/platform info
2. obtain current orientation from native js

5. focus() to div.click depending on how it works with mediaStream

6. how do/will flash/zoom references work?
7. proper resize and whatnot depending on device/platform (desk vs. phone)
MAYBE close button for iOS, and/or event handler for close/back for all platforms

Design Q: add DOMs before/after camera OK, and/or display none/invisible


API events:

-1- the Promise returned from getUserMedia, goes into .catch when:
	-camera is used by another app, with e: NavigatorUserMediaError {name: "TrackStartError", message: "", constraintName: ""}
	-camera use blocked, with e: NavigatorUserMediaError {name: "PermissionDeniedError", message: "", constraintName: ""}
	-no camera, with e: NavigatorUserMediaError {name: "DevicesNotFoundError", message: "", constraintName: ""}
	
-2- mediaStream.oninactive event is raised when you say 'pull out' the camera

*/

//0. helpers
//ResizeObserver polyfill start
(function(global,factory){global.ResizeObserverPF = factory()}(window,(function(){'use strict';var MapShim=(function(){if(typeof Map!=='undefined'){return Map;} function getIndex(arr,key){var result=-1;arr.some(function(entry,index){if(entry[0]===key){result=index;return true;} return false;});return result;} return(function(){function anonymous(){this.__entries__=[];} var prototypeAccessors={size:{configurable:true}};prototypeAccessors.size.get=function(){return this.__entries__.length;};anonymous.prototype.get=function(key){var index=getIndex(this.__entries__,key);var entry=this.__entries__[index];return entry&&entry[1];};anonymous.prototype.set=function(key,value){var index=getIndex(this.__entries__,key);if(~index){this.__entries__[index][1]=value;}else{this.__entries__.push([key,value]);}};anonymous.prototype.delete=function(key){var entries=this.__entries__;var index=getIndex(entries,key);if(~index){entries.splice(index,1);}};anonymous.prototype.has=function(key){return!!~getIndex(this.__entries__,key);};anonymous.prototype.clear=function(){this.__entries__.splice(0);};anonymous.prototype.forEach=function(callback,ctx){var this$1=this;if(ctx===void 0)ctx=null;for(var i=0,list=this$1.__entries__;i<list.length;i+=1){var entry=list[i];callback.call(ctx,entry[1],entry[0]);}};Object.defineProperties(anonymous.prototype,prototypeAccessors);return anonymous;}());})();var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined'&&window.document===document;var global$1=(function(){if(typeof global!=='undefined'&&global.Math===Math){return global;} if(typeof self!=='undefined'&&self.Math===Math){return self;} if(typeof window!=='undefined'&&window.Math===Math){return window;} return Function('return this')();})();var requestAnimationFrame$1=(function(){if(typeof requestAnimationFrame==='function'){return requestAnimationFrame.bind(global$1);} return function(callback){return setTimeout(function(){return callback(Date.now());},1000/60);};})();var trailingTimeout=2;var throttle=function(callback,delay){var leadingCall=false,trailingCall=false,lastCallTime=0;function resolvePending(){if(leadingCall){leadingCall=false;callback();} if(trailingCall){proxy();}} function timeoutCallback(){requestAnimationFrame$1(resolvePending);} function proxy(){var timeStamp=Date.now();if(leadingCall){if(timeStamp-lastCallTime<trailingTimeout){return;} trailingCall=true;}else{leadingCall=true;trailingCall=false;setTimeout(timeoutCallback,delay);} lastCallTime=timeStamp;} return proxy;};var REFRESH_DELAY=20;var transitionKeys=['top','right','bottom','left','width','height','size','weight'];var mutationObserverSupported=typeof MutationObserver!=='undefined';var ResizeObserverController=function(){this.connected_=false;this.mutationEventsAdded_=false;this.mutationsObserver_=null;this.observers_=[];this.onTransitionEnd_=this.onTransitionEnd_.bind(this);this.refresh=throttle(this.refresh.bind(this),REFRESH_DELAY);};ResizeObserverController.prototype.addObserver=function(observer){if(!~this.observers_.indexOf(observer)){this.observers_.push(observer);} if(!this.connected_){this.connect_();}};ResizeObserverController.prototype.removeObserver=function(observer){var observers=this.observers_;var index=observers.indexOf(observer);if(~index){observers.splice(index,1);} if(!observers.length&&this.connected_){this.disconnect_();}};ResizeObserverController.prototype.refresh=function(){var changesDetected=this.updateObservers_();if(changesDetected){this.refresh();}};ResizeObserverController.prototype.updateObservers_=function(){var activeObservers=this.observers_.filter(function(observer){return observer.gatherActive(),observer.hasActive();});activeObservers.forEach(function(observer){return observer.broadcastActive();});return activeObservers.length>0;};ResizeObserverController.prototype.connect_=function(){if(!isBrowser||this.connected_){return;} document.addEventListener('transitionend',this.onTransitionEnd_);window.addEventListener('resize',this.refresh);if(mutationObserverSupported){this.mutationsObserver_=new MutationObserver(this.refresh);this.mutationsObserver_.observe(document,{attributes:true,childList:true,characterData:true,subtree:true});}else{document.addEventListener('DOMSubtreeModified',this.refresh);this.mutationEventsAdded_=true;} this.connected_=true;};ResizeObserverController.prototype.disconnect_=function(){if(!isBrowser||!this.connected_){return;} document.removeEventListener('transitionend',this.onTransitionEnd_);window.removeEventListener('resize',this.refresh);if(this.mutationsObserver_){this.mutationsObserver_.disconnect();} if(this.mutationEventsAdded_){document.removeEventListener('DOMSubtreeModified',this.refresh);} this.mutationsObserver_=null;this.mutationEventsAdded_=false;this.connected_=false;};ResizeObserverController.prototype.onTransitionEnd_=function(ref){var propertyName=ref.propertyName;if(propertyName===void 0)propertyName='';var isReflowProperty=transitionKeys.some(function(key){return!!~propertyName.indexOf(key);});if(isReflowProperty){this.refresh();}};ResizeObserverController.getInstance=function(){if(!this.instance_){this.instance_=new ResizeObserverController();} return this.instance_;};ResizeObserverController.instance_=null;var defineConfigurable=(function(target,props){for(var i=0,list=Object.keys(props);i<list.length;i+=1){var key=list[i];Object.defineProperty(target,key,{value:props[key],enumerable:false,writable:false,configurable:true});} return target;});var getWindowOf=(function(target){var ownerGlobal=target&&target.ownerDocument&&target.ownerDocument.defaultView;return ownerGlobal||global$1;});var emptyRect=createRectInit(0,0,0,0);function toFloat(value){return parseFloat(value)||0;} function getBordersSize(styles){var positions=[],len=arguments.length-1;while(len-->0)positions[len]=arguments[len+1];return positions.reduce(function(size,position){var value=styles['border-'+position+'-width'];return size+toFloat(value);},0);} function getPaddings(styles){var positions=['top','right','bottom','left'];var paddings={};for(var i=0,list=positions;i<list.length;i+=1){var position=list[i];var value=styles['padding-'+position];paddings[position]=toFloat(value);} return paddings;} function getSVGContentRect(target){var bbox=target.getBBox();return createRectInit(0,0,bbox.width,bbox.height);} function getHTMLElementContentRect(target){var clientWidth=target.clientWidth;var clientHeight=target.clientHeight;if(!clientWidth&&!clientHeight){return emptyRect;} var styles=getWindowOf(target).getComputedStyle(target);var paddings=getPaddings(styles);var horizPad=paddings.left+paddings.right;var vertPad=paddings.top+paddings.bottom;var width=toFloat(styles.width),height=toFloat(styles.height);if(styles.boxSizing==='border-box'){if(Math.round(width+horizPad)!==clientWidth){width-=getBordersSize(styles,'left','right')+horizPad;} if(Math.round(height+vertPad)!==clientHeight){height-=getBordersSize(styles,'top','bottom')+vertPad;}} if(!isDocumentElement(target)){var vertScrollbar=Math.round(width+horizPad)-clientWidth;var horizScrollbar=Math.round(height+vertPad)-clientHeight;if(Math.abs(vertScrollbar)!==1){width-=vertScrollbar;} if(Math.abs(horizScrollbar)!==1){height-=horizScrollbar;}} return createRectInit(paddings.left,paddings.top,width,height);} var isSVGGraphicsElement=(function(){if(typeof SVGGraphicsElement!=='undefined'){return function(target){return target instanceof getWindowOf(target).SVGGraphicsElement;};} return function(target){return target instanceof getWindowOf(target).SVGElement&&typeof target.getBBox==='function';};})();function isDocumentElement(target){return target===getWindowOf(target).document.documentElement;} function getContentRect(target){if(!isBrowser){return emptyRect;} if(isSVGGraphicsElement(target)){return getSVGContentRect(target);} return getHTMLElementContentRect(target);} function createReadOnlyRect(ref){var x=ref.x;var y=ref.y;var width=ref.width;var height=ref.height;var Constr=typeof DOMRectReadOnly!=='undefined'?DOMRectReadOnly:Object;var rect=Object.create(Constr.prototype);defineConfigurable(rect,{x:x,y:y,width:width,height:height,top:y,right:x+width,bottom:height+y,left:x});return rect;} function createRectInit(x,y,width,height){return{x:x,y:y,width:width,height:height};} var ResizeObservation=function(target){this.broadcastWidth=0;this.broadcastHeight=0;this.contentRect_=createRectInit(0,0,0,0);this.target=target;};ResizeObservation.prototype.isActive=function(){var rect=getContentRect(this.target);this.contentRect_=rect;return rect.width!==this.broadcastWidth||rect.height!==this.broadcastHeight;};ResizeObservation.prototype.broadcastRect=function(){var rect=this.contentRect_;this.broadcastWidth=rect.width;this.broadcastHeight=rect.height;return rect;};var ResizeObserverEntry=function(target,rectInit){var contentRect=createReadOnlyRect(rectInit);defineConfigurable(this,{target:target,contentRect:contentRect});};var ResizeObserverSPI=function(callback,controller,callbackCtx){this.activeObservations_=[];this.observations_=new MapShim();if(typeof callback!=='function'){throw new TypeError('The callback provided as parameter 1 is not a function.');} this.callback_=callback;this.controller_=controller;this.callbackCtx_=callbackCtx;};ResizeObserverSPI.prototype.observe=function(target){if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.');} if(typeof Element==='undefined'||!(Element instanceof Object)){return;} if(!(target instanceof getWindowOf(target).Element)){throw new TypeError('parameter 1 is not of type "Element".');} var observations=this.observations_;if(observations.has(target)){return;} observations.set(target,new ResizeObservation(target));this.controller_.addObserver(this);this.controller_.refresh();};ResizeObserverSPI.prototype.unobserve=function(target){if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.');} if(typeof Element==='undefined'||!(Element instanceof Object)){return;} if(!(target instanceof getWindowOf(target).Element)){throw new TypeError('parameter 1 is not of type "Element".');} var observations=this.observations_;if(!observations.has(target)){return;} observations.delete(target);if(!observations.size){this.controller_.removeObserver(this);}};ResizeObserverSPI.prototype.disconnect=function(){this.clearActive();this.observations_.clear();this.controller_.removeObserver(this);};ResizeObserverSPI.prototype.gatherActive=function(){var this$1=this;this.clearActive();this.observations_.forEach(function(observation){if(observation.isActive()){this$1.activeObservations_.push(observation);}});};ResizeObserverSPI.prototype.broadcastActive=function(){if(!this.hasActive()){return;} var ctx=this.callbackCtx_;var entries=this.activeObservations_.map(function(observation){return new ResizeObserverEntry(observation.target,observation.broadcastRect());});this.callback_.call(ctx,entries,ctx);this.clearActive();};ResizeObserverSPI.prototype.clearActive=function(){this.activeObservations_.splice(0);};ResizeObserverSPI.prototype.hasActive=function(){return this.activeObservations_.length>0;};var observers=typeof WeakMap!=='undefined'?new WeakMap():new MapShim();var ResizeObserver=function(callback){if(!(this instanceof ResizeObserver)){throw new TypeError('Cannot call a class as a function.');} if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.');} var controller=ResizeObserverController.getInstance();var observer=new ResizeObserverSPI(callback,controller,this);observers.set(this,observer);};['observe','unobserve','disconnect'].forEach(function(method){ResizeObserver.prototype[method]=function(){return(ref=observers.get(this))[method].apply(ref,arguments);var ref;};});var index=(function(){if(typeof global$1.ResizeObserver!=='undefined'){return global$1.ResizeObserver;} global$1.ResizeObserver=ResizeObserver;return ResizeObserver;})();return index;})));
//ResizeObserver polyfill end


//1. dynamic DOM elements (preview, wrapper divs, overlay canvas, zoom/flash), that 1 const container

var mwb_debug_print = false;


var Dynamic_DOM_Elements = {
	
	previewFrame_Style: document.createElement('link'),
	previewFrame_Style_init: function () {
		/*this.previewFrame_Style.rel = "stylesheet";
		this.previewFrame_Style.type = "text/css";
		this.previewFrame_Style.href = "barcode-scanner-preview-style.css";
		
		document.head.appendChild(this.previewFrame_Style);*/
	},
	
	//create inner div container for the video element
	previewFrame: document.createElement('div'),
	previewFrame_init: function () {
		this.previewFrame.id = "root-div-inview";
		this.previewFrame.className = "barcode-scanner-wrap-inview";
	},
	
	proxyWrapPreview: document.createElement('div'), //might not be needed
	proxyWrapPreview_init: function () {
		this.proxyWrapPreview.className = "proxy-wrap-of-preview-inview";
		this.proxyWrapPreview.style.cssText = "width: 100%; height: 100%;";
	},
	
	preview: document.createElement('video'),
	preview_init: function (handler) {
		this.preview.id = "video-layer";
		this.preview.className = "barcode-scanner-preview-inview";
		/*this.preview.addEventListener('click', //function() {
			// focus(); //TO-DO //besides, won't MWOverlay that is, canvas be on top?
		//});
		handler
		);*/
	},
	
	//create canvas for Overlay
	overlay: document.createElement('canvas'),
	overlay_init: function () {
		this.overlay.id = "canvas-overlay";
		this.overlay.className = "shadow-overlay";
	},
	
	//create canvas for lines
	lineV: document.createElement('canvas'),
	lineV_init: function () {
		this.lineV.id = "canvas-line-v";
		this.lineV.className = "blinking-line";
		this.lineV.style.visibility = (MW_properties.global.blinkingLines.visible) ? "visible" : "hidden";
	},
	
	lineH: document.createElement('canvas'),
	lineH_init: function () {
		this.lineH.id = "canvas-line-h";
		this.lineH.className = "blinking-line";
		this.lineH.style.visibility = (MW_properties.global.blinkingLines.visible) ? "visible" : "hidden";
	},
	
	lines: { v: null, h: null }, //at this point, because its async op, lineV and lineH aren't set yet, and undefined is what will be copied
	
	lines_Style_init: function (overlayProperties) {
		//set lines style
		this.lineV.style.backgroundColor = this.lineH.style.backgroundColor = overlayProperties.lineColor;
		this.lineV.style.animation = this.lineH.style.animation = "fadeColor " + overlayProperties.blinkingRate + "ms infinite";
	},
	
	pause: document.createElement('canvas'), //pause lines / rectangles
	pause_init: function () {
		this.pause.id = "canvas-pause";
		this.pause.className = "shadow-overlay";
	},
	
	locate: document.createElement('canvas'), //green location border
	locate_init: function () {
		this.locate.id = "canvas-locate";
		this.locate.className = "shadow-overlay";
	},
	
	//maybe have a function to 'import' and 'export' all needed ref
	
	//create image buttons for flash
	flash: document.createElement('div'),
	flash_init: function (buttons, handler) {
		this.flash.id = "flash-button";
		
		var divImage = document.createElement('img');
		divImage.id = "flash-image";
		divImage.src = buttons.flash_icons[0];
		
		//if not enabled hide the button as if it doesn't exist at all
		if (buttons.hideFlash) this.flash.style.display = "none";
		
		this.flash.appendChild(divImage);
		
		this.flash.addEventListener('click', handler, false);
		
		// **style for position needs to be linked to canvasOverlay's position
		this.flash.style.position = "fixed"; //absolute anchors it to page, fixed to screen
		this.flash.style.cssFloat = "none";
	},
	
	//and zoom
	zoom: document.createElement('div'),
	zoom_init: function (buttons, handler) {
		this.zoom.id = "zoom-button";
		
		var divImage = document.createElement('img');
		divImage.id = "zoom-image";
		divImage.src = buttons.zoom_icons[0];
		
		// if not enabled hide the button as if it doesn't exist at all
		if (buttons.hideZoom) this.zoom.style.display = "none";
		
		this.zoom.appendChild(divImage);
		
		this.zoom.addEventListener('click', handler, false);
		
		// **style for position needs to be linked to canvasOverlay's position
		this.zoom.style.position = "fixed"; //absolute anchors it to page, fixed to screen
		this.zoom.style.cssFloat = "none";
	},
	
	isPreviewFullscreen: function(){
		let preview = MW_properties.global.partialView;
		let isFullScreen = (preview.x == 0 && preview.y == 0 && preview.width == 100 && preview.height == 100);
		
		return isFullScreen;
	},
	
	isContainerFullscreen: function(){
		let container = MW_properties.global.container;
		let isFullScreen = (container.offsetLeft <= 0 && container.offsetTop <= 0 && container.offsetWidth >= window.innerWidth && container.offsetHeight >= window.innerHeight);
		
		return isFullScreen;
	},
	
	updateClose_state: function(){
		let buttons = MW_properties.global.fullscreenButtons;
		
		let isFullScreen = (MW_properties.global.previewType == 'container') ? this.isContainerFullscreen() : this.isPreviewFullscreen();
		let isPartialView = !isFullScreen;
		
		buttons.hideClose = (isPartialView) ? !buttons.enableClose_setting : false;
	},
	
	//close
	close: document.createElement('div'),
	close_init: function (buttons, handler) {
		this.close.id = "close-button";
		
		var divImage = document.createElement('img');
		divImage.id = "close-image";
		divImage.src = buttons.close_icons[0];
		
		//check if isPartialView / isFullScreen and update state;
		this.updateClose_state();
		
		// if not enabled hide the button as if it doesn't exist at all
		if (buttons.hideClose) this.close.style.display = "none";
		
		this.close.appendChild(divImage);
		
		this.close.addEventListener('click', handler, false);
		
		// **style for position needs to be linked to canvasOverlay's position
		this.close.style.position = "fixed"; //absolute anchors it to page, fixed to screen
		this.close.style.cssFloat = "none";
	},
	
	camera: document.createElement('div'),
	camera_init: function (buttons, handler) {
		this.camera.id = "camera-button";
		
		var divImage = document.createElement('img');
		divImage.id = "camera-image";
		divImage.src = buttons.camera_icons[0];
		
		// if not enabled hide the button as if it doesn't exist at all
		if (buttons.hideCamera) this.camera.style.display = "none";
		
		this.camera.appendChild(divImage);
		
		this.camera.addEventListener('click', handler, false);
		
		// **style for position needs to be linked to canvasOverlay's position
		this.camera.style.position = "fixed"; //absolute anchors it to page, fixed to screen
		this.camera.style.cssFloat = "none";
	},
	
	cameraPreview_closed: true,
	
	cameraSwitcher: document.createElement('div'),
	cameraSwitcher_handler: function(event) {
		let target = event.target || event.srcElement;
		let caller = target;
		
		let is_active = caller.classList.contains('cs-active');
		if (is_active) return;
		
		let item_i = caller.dataset.value;
		
		mwbScanner.closeScanner();
		mwbScanner.setCamera(item_i);
		
		let quickRestart = setInterval(function() {
			
			if (Dynamic_DOM_Elements.cameraPreview_closed)
			{
				clearInterval(quickRestart);
				MWBScanner.start(MWBScanner.result_callback);
			}
		}, 50);
		
	},
	cameraSwitcher_isVisible: function() {
		let displayState = this.cameraSwitcher.style.display;
		
		if (displayState == "none") return false;
		else return true;
	},
	cameraSwitcher_init: async function() {
		
		this.cameraSwitcher.id = "cameraSwitcher";
		this.cameraSwitcher.style.fontFamily = "Roboto";
		
		//<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
		let roboto_font = document.createElement('link');
		roboto_font.rel = "stylesheet";
		roboto_font.href = "data:text/css;base64,QGZvbnQtZmFjZSB7DQogIGZvbnQtZmFtaWx5OiAnUm9ib3RvJzsNCiAgZm9udC1zdHlsZTogbm9ybWFsOw0KICBmb250LXdlaWdodDogNDAwOw0KICBzcmM6IHVybChkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsZDA5R01nQUJBQUFBQUQxSUFCSUFBQUFBam5RQUFEemtBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdtUWJtV1FjaFY0R1lBQ0RJQWhVQ1lNOEVRd0tnZHg4Z2NSN0M0UUtBQktDRUFFMkFpUURpQkFFSUFXQ2RBY2dESUpKR3pOL0ZlellTNER6UUlFUWZZNGdJeEhDeHBrd05uZzlNcERiQWFsSytQM2cvNjhKY296UndQNEdhdllsTWx2T2tGMmlXOVpjZEVmYUZyTGFKU29pOG8wbXNhWjFKeWRab2doUGRJdlFZdUNma3Q3NWVUS0xYMk5mQVlPdm9BZ0d1T2hkZzZkOCtTSmI1UUNoQXRPWjNlRU9WVzIrMWxOQ1gyOXR3b3BPNXNrck93UGJSdjRrSnk4UGtkMy8vNitxcnA3WjV3clJFL1JsWnQ4UmdKZ1JySWpJNEYzRDgrdDgvOHJwY3lkNjJPUkVUK1ZVbklnNGRiTFBjVGlaQzNwdVl0d3RNRFcyV2JHVW14a3J5L0I3ZGFVMEFrdTIxemZySloyV2RJVC9RbGpsdWpaVm5RcXJWUGg2ZkQzd2xGVit1cmYzejh5Y2FlWFcvdDdlVFd1YlVza0NHTkFQRnNBUVBzQUFCdkRUVTMvYjYxOWkzbmdLQWZWTW5KcDBKOW5PNk42d1B3aDd3a1JBaWxFZ2VNQTNMMlBBRFdUYmhnTndDUXNqdTNpYXROMTU0TzlGSUxyenFUYkM4cENHWlp2L09WMHdicXlmcSs3aGNkMzdSekttOEhndVRyMjYxZ3VPZEprek92TE5hS1VQRU5UYy9sY0JXdTBlK0gxQXRoVmd3VFNTcjVQc29nbEIwVHA5T2lxbE8wUEM4UDMvZnIvenhSUlJUVlFxcEU0Tk01dTczdjNQYWNFbEVicXVza2FUL2xBY0M0OXF6OCtwR1VWd3h5Vm9Bd0FGclArbnMyeG5OUFppYUhZdkwzdGhKK3h1aTI0VExoMG9nZnJVb3k5ckpjMUl0Z3dIOHBFWER1eEQyMGRrKzhEckVHQ0hDeGNpN0lnNllLN1RwVzZUaXJnb3ExUWh3SmJOL2xCYXY2Qk9JaHpDZ3hPbExrV2lXdCs4b2pTTk1XaVU0dVFIOVpLZ0RvZHlPSXN3c3ZuL3I2cXU3NElTYlpGbXBQL1RoeTFyaGcwZ1VzUWpqMm5UU0QyUy9oQ2dTakNOU21sdDlNTjNJVDdkUUxvVnBwU3l4cGxhblRQdEh1YVlyVlYyT0x3THNZa2hNak5iLy9VM1AydWUyZFp6RW9KSWtDQ0RXK3IvdGZ1eHZlckhSYm0zaVhtQ1NNaVJzdnlSMi8vL1RHNC9rMk41WW9uaEJSZ09pL3YvWGNDd2tHUUFZczRQSkYwNlNMNThrRUtGSUNRa2tGS2xJQlFWSUQzNndjejVBUUtCQWZZQURvQUFBWklPQXV5aXpBRGlWcmV4ZFFHQ2owd25Fb0RnWTRtaDBVRHdTWUZKc1VBUUF1Q0dsUGJFUnhOakFacFJTQ0RVUFltbGJpTmFKQU51RjRxbFdaWDY0YUVlcDhmOHVEOWVqNTJ3VFk0OE1sNm5ZSjVJbmJUTjJNd2JIN0ltbTBvdVIwdHVZRXB1ZURBTWhtMHBqN0F3bGxXYW8yR1ducjRlODlSOWYrelV2cDdxUThsUnJ0RDhnWUJZUWtCaHhRWkhralFac3VRb1VhWkduUVpOV25UbzBtZkFrQlZydGh3NGNZYm54b01YYjc3OE5XclNvdFdjZVFzV0xibGgyWXFiYnJsdDFacDFEejN5MkthWDlyMXk0SjMzam56dzBTZmYvZkRUTDc5QnRQb3hCQjNjZEdIcDQ3V0pGd1RYWXBSaG1oZTJlVW0yRzhYdEQxcTRtZmNXaTM3RFVsaXhnZWVhN2RiN1BQczFyejdnTzRVS0t6WTNyemJvU09aenMyRFJraHVXazYyMmJOdXg2N2tYeVY1dnZMVHZsUVB2SGZuZ28wL0o1MTc3NHF0dnlmY08vQ2hDdkhzMmUrczVNQjQ0NUhjbkpLMWVwOU43ZFBzdC9kNjBpWUF3MGNJN3c5MTg3MEpEOUdOdVBjRzdsOFJzcDJTMWpQeTJRK3BLcGQwTmdSMDNZMXp1NG5PQmNNQ0p6WnMxRGhNUFgwSlI3UGUwYTA4ODljeEdtZzhLQnV1QzVrVXNpejVnQ1Zac3VNNjFDQlVjRzJFMGlSYXR5VjRIWHRyM3lrSHlFOFl2djlPc0xQb3RTMVpzdUtxdzU2VjlyeHlVaHJQR3lZTXFiMXhROEZaNEQwYysrT2hUR2duVFJiQ2F0ZW1ZR2FOSTJ4TlBQYk54a1pVdE1RN2dtSTN2UE81ZHhSdXI5MW80Z2c4KytsUSszUEdlNDlGSHZIc2JISHZ2TSs0dkFvMElZOTN2N2ZnYUpOOVY1TURTengzYzR1ZzdMZ1pyVDNUcnh6eDR6cjJMTVgxQlZ0OGVlazhYVXM4cTdSbnQvUUNrcVdrZzF0aEJscjRPbTNlREFPWTNWMjdDK0lHRHhrUEcrMFY3cHV1Z3pYNlQ3N3hzZmQ3OXVzT1ZscmtaaUYrQi9rSnpTSzkyVkc1bk52WlVJVnZMZmI4TWRIK3I0RWZHK2dDZTFuNGFIV3hTTi9IbXV5elMwZHpZeHdaMVJMWDR4OEo2dnlvcjlsVUJYRjZ2SDZuNDUwTHhUNVdhYW41RnNYKzJwUFV3U2xQZjZiRDc3WGJZeTFxaDlmcFlJR1pTWXJvWFBhYXo5cVF6VGZhMkxseXd2ZGp6UG1DdlRCemlhZ1hMdU9WSkJkM2VYclVoczd1TFVadDZYQTdGZEhuekk1MFl3OWxTMWtEK01NQmN6YWErRC8zTnJGRHNIZmFJVG0zZjRwVk12TUhTMjkwdSsvcSswbnAvMGFiZ2JUYjFmUlMrRTYvNFkxanB3TWE3T0JaS090aE82U3RPVGJFYmM2UmkrMjdlMXBvditWY3hUYzRhSEIxVVppdi91K2FpbE8wRGRFSjJPL0dGTHNxYjYwTnVWVXVpYVFITnRxb2FIdml1OWJacEtmYVZkM0hSK2ExMkcxcTM1YUoxc0JGckhpWHV0OWNFclpldldzYXhZLzAvRzZlV2JsOG5FamRVUllIZEZJS2hNTmdUaHBNa0MwR2VPbVphREt4VWN4WUVXSUVLczYwdHdva0xVVzVVZ2xmdDQzejRPYUdzdHJSR2JXUjBuRlZGY3c0b2VlY1RWOS85NWcxRzB3TGhJM3hFQ0FzeFVCZ3BLa0NhY3BHaEVGbUtwRWhaS0ZGV3lwU1hHb1dvVTI1YWxKMDJaYUZEQmVsU2Zub1VRNSt5TWFDY3pDbkthY3JFZ3ZQMFdBbU5FUWxuQ0hoUU9CZk8xRzhsSEdabW9GaStsSmtmNVZBbW1GNEFIVDdORUVJdmdnNmZObEFoSFZUSVhHM0l2R1V3SzJlTXkwMnJrTlk4Qm5saUE0dk5xVGFiTFMrZzdOWG04ZElCdEhlWkNPOTlBbjlOcE14K0J2bjhKRnlFeStIR0paUVhsbktURkNnNE1DZEJZUlFwSHpVS28wRmhUbkVPRHl1eEVHYkNRM0NFazdBU0RMaVhzQUt4RVFINVJ1QUU0Y0M1Z2tMY0tSdFBqdlJ3K2RBRUxkZy9VQnlZY3FFd0ZabVFlZzE0WFNWY2hKdHdFVzZIMjNVSVhoQ1VnUGxKWUlTWnNHSW1lT0VFSnlXNExBdCs5ZzJTb0MydVQ1MlZ4d2lqVW1YSmQ0YkVkQUxNRkRHcDNPVGxrU0E0ZFV1eitiVlZZNUlWYVdlUDNPcHBYV1N6dFhVaVdDSkJoMVJCeEJ4S0pHQjRJV3BlVXVWR0tleWdXUjcxbExnWVlQQnZlc1lCWmsrS0RBOEU5aGx4YVR2Z1NiSEpNU0RpU1hIQkJCRGJhaVNDcEtjVndoblBJcEduQ1JiRWFDK1llUXdUbFN1Y0JwWUprZ0RDVE9EbkhJRUZMem4yMGx6d1liQWhGWTVCQkxWaGdsRVk2bE1EVVJKR3lJUkI0ZEQzaXB1dzB3TkdrOVhXRlNiOTFGR3ZjRlFOV2pkNmQ0RVJ4UmJEakQvKyt1Yy9CTUJuQW9va1NCZ01ERGNSd0tkY3d5SldTaDBKNGNHTER6OEJvU0dTZTBEWXVCYlQ2akRiYUF5bEdBZEVVUkhFSUlnY2xMTTlJSld6NDZCQUIyT3RNRi9GeGlqdDFyM0c5NWtBcGVwaGNjR3czZDRJbW90R2pSbXYxV1pZOEp4ZWtpRlJra2xUNkJndXV3SUc2djdrUjcwc3FpQ0IrZGFwQnNRSmVmUDRuakNZb2V2ZjNVSXZBTTRBM0JGd0lzQnQ3K3BnQVl5QS9ydUFmOEJqMXBZRVlxQjNBZFRWazBhTUdEZ1VIdUtJalBDWkl1TGwzNnh1eHdnU0dyQlhqaTVEaGsxYmRNZStJLzhobGNEbmxWek1wN2x4SWhYYkVkc3RkcVRrc2lyYlpiOWNLM2ZMSTdFa3NhR1Q5dTMrLy8vL2Yvcy9VTmhMVEpkdXd5NllzZVN1Vno2TVNqaHZ1T0Roa3NwaXhhK1dPeWV1KzF2dkVlL3JlSG9XTUtTVjZ4UHlTdWMzL0h2ai94UC9ILzhGZGFjMHYwb0tkbkxseUpSbXlmaFMvUGZQN1JkdDFVS0RMb0NRc3F1dEkyOEZlSXJzM3d6Mm1tL09nOThMWHZrQ2haNTQ2cGtObTRvVTI3SnR4NjduWGlBcCtSM2hlNWVzMUdkZmZQWE5kMlYra05NdVQ1azBhMExZODFJaWdCdjExSFBGcUVyemdDUGJBT0hPVm1KREhHdGRqYnNxWUNZTjk4S1BKM3B3TFRNNGxwOUJBVmdEeU04SURvOFI4WjRUL3NXS1JNWkExczhFRXBIM2RvR1BBZ1FCZTJsQ0V2bVFsVit6b1VpbmVyenAxS2ZYK1FaVmZaWTcycmhyZlNRQW50ODBxZ3RMc05yMHBkK1ZPcGxRY0VUWldxTUxmWURJUjQ2TCtaOXhLR2xkMWlWWERHTzJBYnVoTlNuSmczWHN3WnBwckxBWWRFV1Z1ZWYzdlJRYWViYmJSOVBmU0creXpyRVpQUFZMalJzU0p2Y1gwb1dpTDRuZHhnbWhYUUxISVNzdjNod3hqaFc2dWZGTlluYzIyMnB6YmNVMUVWRFNzT2MyeTZRYUVCSmFMNkFJZDlkWlRHT3pJSXZwbTJjV0puanlnYXg1QmhsNUVOL2ZvR2dZNmUvRGlCSjBHMDhJdkk4dUpyeDQ3SVRaeG9Ga2RiT3MzTllIb1RIQSt2K3JkMFhVWmNvTjRGL0EzdDhEUjE4SDFNVkEvZ2E0OUN2YXpBZUJJM2dnWU9aRUlYSU16bFpNdEFMQUpKc1BiaXhkeGRBeWpjblNtV0tOWW1wSXdLTGJjc3VzRGhRZzFUTENRdTFLVGZqcGh5b1BLcSs1b1FtRm94aDh5MzJnYUJoU0VMN0ZWRzc4OFlDYTh4R2ZCdThDTHRyeFBJOU9vOEVRWkh0YW5Dc3ZXMk5hTHhGbHAyOWVzYWowNUl3enE4UGtSRFI1c0xyMlVaK3FrSVhUUnFHU2lJdUpkazYyVm5WdmM5VGVlSnp6NUpKTk5weDFKcjFMcHNPdVJiM3ZZMndRM3lXdHh4aEhJMktxTlRycnNEbXhzQ1pLSHpxVG1HdTFEdnJKRTZ2bWdNYlVTaWVMcmR1YzBzYTJlcmp6QkNueHppdXNzYm5pSSt3UXNaSEJuQmJIMHNuU21zTEpGTElnRFlnZnkvN2hUcmpySDJMb3JTamxPUDh2ZjdPZjRrOTZOT1RKT3ZTUlN3bENOWFJEQmZlcUdTaEVlK2J4UzA1bVE1aXpSWWE2QnRKVHFRREk4RjlYWGxJeTBFRFlwN1BFdVdSeE13b2hQTnRVTENTd0VWL0tVVTk2eEFscGNVeGd3d0ZqSThIUXhTMHpnQUZ3UnkrMitVUkNRS1lDS3JhVE1pK2Y0ejFjbWtXN1pRRGxLRGY5S1BkTEcxVFMwMGVqT3VwTnVyak41RXliclE4eHR3dGphejJYcVowTXVEY0x4bjA5NkJsUjREclVjRkUxdUcrTzUyUVF0YmxWRW9mMitBTVNsaU9od2dhNGRpN1ZyN0NPYUVlQ1k3VStkY2Y0SHQ5MFJVT2htb0R5WFplNG1mdkNwbGdUVFRKRmFkSGpyY0pnN1JrMUpBemtVTU5ENFZpMW5oNk5mUEI2WTBnemhRb3lYQzhCTnBPRWx3V29BajNyMkk2STY5TnN0d0FOd0xiRXFla0szaUJNVlZOTXJsNGVtME5aSTFJek1wYmZncGFWaWNEZzFCdzQybzhKZWN2VGtpMmVkM3I0RHFRbzBQRW1uOUUreEFSaVhHMjNvTlZCNVpidG9MZEF6OVpZUVNJU0ovYUMrOFJZc0Z0cHNZM0xvMXVzejNTbC82cXgxNExmVDNyQXhmRFMvOStiTnVkeHBlblliY05mVGExNzZVRUtKL1NwMm1OUkNtMmd3NlphbXRmVlZHbXFIVmVxTlIwZkc1akREVGdFdEtHU0ZJQk1Od1dRQzdnNUR5Q1RmM1M2dzZVajVtYkVhL3B3Ulc0QXovRTFrKzdrRDRKWTh4dGNueFNEZlZGRlZ5LytWc05GWDVoYWE5SzQ2YmRZNFNYS096bzNHU094U0R1ejBpTCtPS0VabnhoTElrdEtheFJUZXYwTHV0ejVqblI2ZCttU0NVOHpWOElBTUd1alFyVGpOaHpTL2VlK2tLMUpYbVRZNkg3U0V6MnQxbnRPM0VhdXBFWUNmUUQwNlNPUFRsd2V5KzNNc0J2MUJheWp1NXRRZlRKNGs3U3J2YjVhSEUySDIxZzdnYzU3d2pHbHZBcXNjTElETld6MDBJV1FrUGNQNkhDZndrT09RbzZiMUVwNWRnUGNpUGdaRzRRU0JsZVVRaFlyS25HUkpiMUhJUjlRZ3EzaGFNazNmR1pzdC9lT3VSTjVPekJ3c2dpMkdhTGpKU3hadzdXeW03YlA2bmdvaTBENGV5Ym5GZkxBSXBRdC9EV0dPSTV5WDVPeHhRa3hOQzBhaFhQanpuam5mNlU1Zy9EYzd5UnRVRDBVb0gzY0VIY0kyWmw2OVBVcGFETUR0ZTh0aTRLb3NhRU5PQlJZTW81c3k1TlJrMXE3T1E3ZEptRkZYUjY0U3ZyT1VWVU04RWNJbzJ1YTNJcVZMV1cyN1lybkI0UzFlTEF0eTFvRkpUbjBzTmdZMnRTZGxjMHQwaDNKMUhRQXlKU2lCbDQvOGFzUk53RzgvbGxxcWtjRHE1MWNVMUlyS3FjOGxjVjJXNkwxWDN6SmlTa0VtS1E2VFJ3R2FvSkZ1bkRHR1MxQ2JvamU0aTF1WmhndWQzaUhadWdTOGhFb0tBbUhRMXhWREhwbEsybjNySGpHNExXU3JVM1p1ODRFaW9jM3dBY2JRc3dMTE91NFBia09HcENGdWdibndlS1krcVFZdWJQZGRiSTFCcENWVU5SOHc1VGRLc0lMTFV0NmZlMlJjb3NqSzRWekFEUDVNZVZQY3dNTk1mYzBtSVdyWnpBTXN1RHJHNUYvWW91R2tBZDZpZlVWU0J4UDJsalllU2JsTEJtNGpwY01BOU1NNnpLSlFNc3JQK3F2d0lVY1pXRGQyaUgzTzl6dVVJdmxyZXF3TnBsRXJNQUVEVHhVL3k3WUVLanQrbDJmV2ZXSzV4a0d4UDRDc3g2L1JvcWdRVTNnMHU2N21mNTdzcnZFM1A2anNEMWk3ditmYk00aGRQV012bXA1cmNSQVRBTW1iM0pFVDhFZStHT1cyNFFiUmhCaG15V0F5VGcwVFJ6cXhIZ1dVZXlvQS9UVlU3OHhocmQzZzBnODlNc0xQd2tFRnIyeERETTZoSk9HeU1OVmwvVVhROFJKWmhxcWxYQTVxdVZsZFZPdEJxTFBTNjltamVqa3hvaGpPU1IraTRxdG52dW9aSFJSaUtqN3QrRm1ndzYrakEycHBYSEcrODEvMlhGMFZGMmkrdTZ4S0ZjNmhFVEtoN0FjR1F5VUt3T3ZsNHpPWE44SDc3cWZxcjNoYW1rWHEyQyswTXQ1MGdDN1FzU2JIYndnVG83aUxFck9TOU5KbnVJNmZkamluSDdVRE84NkpQMm11dXV0cUtzRnNBNjE2L1NDL1VXeEtiK0s5OXBJamxObDVnSnFSUkFzWFZDZVgyVGZNTjh5ZWhnbGJnTGVkbmJlZ0t6QWlNU05ON0RGcUpkWS9PRFAyNnBvZ3l3Ui9GQzl3VFlGSXBrcXFXaDBpZ0tTa3l5R3Y4YnRwanp0L3dLakJiVWxiVUxBRGNzVllaSVhwcEY3cStUNWljQnIrbkdadTJXZC9JZmFBVXRRQkxFcVR4RFZqam9la05HRVEvWWtsbGtVNCtsK0FvUER2VzFPaStKSGZkSFhXbWdSeEJWbW1ITDk3RlpWWmFqV1V4TGtLS25QVTdpZ0phNVlGakNuMWRJYUNjUVZPSHdjSkNxNXRpOVBFb2xhUWlXb25JajBhT0JRaS90RGJ0THkwaGtqVktyWFVoc3MwMnJ1cTA1dSs0bWd1WGk3TFpjSjVjTGlDdVp3VXNkdDMwUmRYcVBDWlhFNUZyY3RTWndtK2N2blVqcW0rZnRVK0h3QVdhZ0FBZ0xlWmFDVWdYd0hONVg3bVI5bFloTXRsWnZzeUNISGJBQXIvejluSHpFUUVMb201RGszSGg4T0ZiaDZtWElkMXdpUXduK21zSzBtWjl0elBjN2l1TkUraFM3NlVjYU9INzlaTHhIVXM2ajhibTlRL0VEMlcvN25mNnRhRlg4QUhGMWNSZG1JS2UraHNFY2U1L1JaMENwa25SRTVTYkt5Y25QNlFTSXpENUMwZVhpb0QwQXljUldZcHh5eHByN29oa08rWk1nWG51RFYwZ3ZXZUs2ejFlTVZDSVFzcnd4Q2xES1hhNXBJYUJ4NFY4NWVjamVzd0o5bXRFTXo5ZHJhVVNteldTQ01JdUxVU1owUUdsVjF2MFY1OVhUWDN5Mzk3ZEJjMVM2Qk5ndEVWMnZrcC9ya1pUZXByaGxkdjl0OTd0cTlIdHl6K28xZVhzYWIyMU1WeGVlSnFka1pzV0ZGYWNwQkF5bU83Vkg5SzdjdllhZnJwdW1ZKy91TGRFcDFQYW13UGpzU1ZkZFUyTk5mV0h4dWdHeFIxTk9UWDlEZlF5bEYyYnVIV0Z1NEJicGEyYnVHMXJtR09oOGZVeXJzNlVQMTlsSXNoQ1BtbGlNZGZnQlp1Z2E1V2p1NEJWdFplQVM1L1BnVVlTeWZSSXd3emdvaFJTYU5uRXNLU0RhbVd2VE1YZTVybUx0UTdPRlJGK3NVWlc5YVlKcmYyZnMvN2Izell5dUFhR1c4YUJhK0R1MCt0SzVOand2cVkrckpLRWhwcW9BZGZ4bVFURTEyTmxWU2NUTXdEZmF3ZGZhUExlRmNyK2FPeXdkYjlaZ2krK2RwblVmNFBIUEo5T280eGsyME1IQXBLQmR5NlUveWw0d3Zza29iZm9ObjFqVGJUbXI2NEZsb0tSWGZuTXo0QUNtSzNYZVBhQk1KZEpDS0w3Ujg3NXJTeXN4OTlwR0NwMEtEUWh6YXZablpSeVpHb1ZIVmE0RWowNWQrYkl3L3kwdE05Z1Y3dzBqRExjWXQrbGU2bnlGVUxCNWg0VnNBTCt1ZHFBNE5XdVpuRXoxb1BNQlNBNVNweEJGbHhXRmloVEF0cTFNS3BkQ0JNem9UWTc2cCsvWndXeDJ1K3QxNDg5UzdONXZ5TU8wcHRqZUZENm1WK2V2UXBzeGI4ZzZsdE9nQjdJWHVFOGE5SkhJZjE2S0lqaHFqK0x0U1hJNUxoeXV4dERxeHJLbXRuTDRNKy83azVwdTFpNCs0WklwN25qbndCNnRTQ3FENllpTDRIMWVTRStqRGYvYm1WZytmWFBmUHVCaDVNbFd5WUNSMy92L0xGckI1aVpGWVg1cERxcUFVNXJhVzFFQ1VUSzNBdzVYR0ZXZUdjMk9Nek56SEJlblBTd3NyN3RhM24xaXR2eDYwTzFrZVpVQmVPa1R0N0g2Q1BaMzl2STY1TW9MSm91YWs1TmVNdE5aMDBJclN6ZFNaUXRTL1hteVhlQVQvLzczWUlSWXVYWHZPdXJiN2hYMzFIdHpvcjBXTlc1OHo0aDdWdnpOQjFOVnN2UHRaZW5ibFpIMUQxWlNUaWF1bDVJVGxkY2w2ZnU2bXgyb0c4K294eFA1QXBRVGxvc3VwVi85dDM3My9aK2RLU3Q3VkJPVUFwYmgrd3RTYlI3TXpieDh4Si9wbnREVC9hbWo4VVZOUldGQmJ5UlVpR0VNaUpjVVZrYmVLeUZ1bGxCQzE1M25hWmwzNGdCeEdadWdPdVNiMjhHWW0rZkVQRXo3TmZnZVNNK0pFbS9RZS9PcysxMC9mdG9UamVPdEw3Uy9TTTJvWnpmV1ZNOTRZREZOaHdwOTVOZkhNR2pYeGpIbGUvYk9LSnQwbVJpWmRKdElxbzJWMXNHc2FnUmsxR29HWk03d2h6VkNLU3FrdHZvQ0U5NHVKakVtSkRNdU05cVpEM2M4WEwxMjl2M0p4cEx1ZkVHM3AyRFNqNThrL2d2Q0U3bStzSHgveFRWeFc3OVZ3S1hPMnJxeCtoYjNGY1M0TmRxMDIwaWxYenNGQVRSYTdYNXRBMlVhT1lZdE9OOW92bjFvY1MyWDV5dnFkU3BDYXVlYzFmbkwwQlBIaExaWElYK0U3b3oyc2dxell6VXVaNzQ5K0JtOFBuemZhaldldmNHejAwSXNOUGU2SFZ2aVdaWlRjOUk2Z2R5OHJpSnk1S0xGQTY1TllweTJNQ2h4OTczUHBCMGpheHJ2M2N6TmhpVzNCY3NsaTVLbTgrYi9iQjFwOWJQcWtscklNSmxIRFpvbWNobXhDR29WQUZmYXd5MThWM0JmOTlSNm1tYUJaZnJOS2pmbmN5QUVmakhkdmxuKzRwN1ZoNmk3bjc0cDNDM3lqWFFOVlFtTVdMRnBwdlhhOHQwTUQzUEJkbFh1bzFQazVpRjBEbTd5eTlRMzMzL1hIQVhZZDBqV0FkYWNpTnR2YkFaSlcyL0ZnTGRWSjczcGhjT0VNUU5KSUhZdWZnazNzWnFhdEl0RVJ0RkZjVDRNYXRKSnJwUnJKdThkeklMbytveUVtTWJ2SUFWVDBkVnRzbXRDdFpHbmgxSVloT09hQjJlNnQ3aG1BcE0wUXQ0aXo0YWw5RjFGRWVZSTJ5M1R2MTV0N1R6NXUzcGpKSmxNS1VtdnFBVWxKOE56RnFiZFRUL0F1NmM2QlhvSFVXWVg5cE1pMjBmWkVhNHhaV1VFZW1zajh1U3YvMmJSL2lpdFlaSysxVm1TdENSdHdhakgzWkp0VVdBc0ttbDExb3lwOENRK2Z0bldzNlg5SU5XRHFwUTB4OTlWb1FiY2o3MWNic3d3TWpiRDBVWTNXcjBId085eVhMOTNsaG4yTi9uMWZsTTY0eVFIN294dWhyYlBwdTRiQUVjZm41VFgwM25lM05zK1dzMVdsQldkYksyRWhEbzdZL2dmRnltbXU4SnNGYWFxZkxiZ2NHWFNuc2ZTSGNkYW5BWFNMOTlwRTNmanI3ckVra25TNFp1dG1KK0FQbWVmZjBOc1B5VFhMQlNxdWtXeXIxWWZTMUw3YXJKSXVhaU9RbXJtU3Y1M2VXVzBhd3U1c05MeE96THVaUGx2VTI5QmMyWkVWNTltUUVSVjZLeVBvYk54RjNOcXJCaml4ZkNsM3R1aDYwOW1tN3N5SDlVa2hWc25ZTllERVRnTWs5a0ZIbUpMMWVkb1d1QTJRenpqRmo0UWdhSGZuMnRPTzRRdmRaNGVHTzU3cGwvMFRSRnk4TDc1QUd4Q2ZvTjNUZXI0aU5DMHpoSVgvT01OViswTjZSSFNPNC9qZUxDOFBiUVE3TDhrYnl4dUxTNUljNFVYU1pqeGxUQXQ4Rko3ZnZQZHdjeS8wVlBpcEY0ODJiOTNialE1WnkzejY5Rmh3OWJHWlkzU0ZicWhvdFJtM242aFMyU3ZnNnZoZWNWcHM0bUFhb01qVFRlbUFhU3I5Qkt5WVJwTkNLZEJ3b0NFdnczQXltbVpkZjJMTlNndWV1M3gxZDBqdVlhN3N3MEZwN2J6R3VzWTZZWkZ6VHpzaHllM2pNditaejd6aXNhNWI0NVIrd0RnY2R3MU1KQ1lFRndkYk1KeUlEZlB1S1pjZk1PQm5QOVZMdW1PK2xMdTNla3BZYkZXN0xMa25CbWFad0xoK3ZKQ2Z1UjFYaGM0YUFDandXVCt1ckd4SEZqNkZ1RnA5dTNUU29YL05wWCs4dVBaMm1INUJjRzBxaytjSXdpZTVkejQ0ZGhNaEJZNTlsZmoxY1VuZHBROVBtSVpIbUNJcVNaRVZMU3N6eHk4M0w5djRTZjU4b3poOUxUWmZuUTVRNEQwNk1iWms4Y3BidFI5VHFLbkdPeVNhWS90SDU2WWhjdU85TUZ2Y0JrN3NrMFIzeHArTnl2d0hoenh3dTAxNDUraDhXVkNKZzZweHZIdkpYV3ppU256akdhNGFVUTZtOHBJV3dxdkJRZXBnM0FYNjFRR2pIZWI2QXcydndJZ2c0aXZxcThGUWY4bS9oM0t6aTdFVWRHcS8yUDBmSCs4bmJ3ZnJ1UG5IcHRRTWxUUTBsdm5HNXM1Y2U2MUMvelJaZjdka3hLbmp2VXZMUUVualBSSTNmaktqWWNFZFZuQ1RmZ3NrUmNURmVaWDRTOXJCNlFBRlBsdTcwblhvUzZJS01ZUnNyMHhDdENIM3VNNmtscEMrU3QxM2RRTWpFL3hscktoOHJJYm1YYWEzRGYxTFlsclc2bzY3ZzFJY2czZlB6YTBuUDBsMnZYMG1pT0RPNlNCU1V5Z3JMNXlHTmV5Ry9GTkNrR25yOUpXa1NHSjJlRWtHUy9ncVkrSHRxMHNtTGJ4MG5UVGN1QTZ5SkxQMWhtRC93dXE0ZUVsMVp2M2RLcVZ1WWxUK3NYZWsvZHFoMUd4Z1ZQN1EwZU05VDhvcnptOHNqZlp0bEpmMlBqRTNmczcxZlZkaGRpRStpNWtPa0UvNzBhbnhsT1c1NTVLb0tmaGs2d055SDc0TzZWdzdXTngyUDk1UDh2K2h6TUpNYkI0VFlRQWduOUlSY2FtTStRUGxQMU5NakxZSHhlZmRxckh1bFdkSTdXc3hzb2wxRFNxWGpGb0FYV2NjbHVWVjFhdDUxVUpaL0poTnZETy83am04ZmFKajhjN2t5TlRlMVRxR2JWNU1VR2lDdTRWcHBDbTMvcUNyYzVwNzlhc0w5SUlsNy9oekFYU0VUeG1CR0puakVzS2ZiSVJhb2E1MEdtc1lHWXRsTmxqaXpMT3k2OHM2RjZnTHFFRFZ2T2pvbkh2RDR6ZkEvQXo5OHJjYmErYnRPTG9PemVYREw4eWM0VlYrTTUwSy9pS2RxMXBtWGYrVjFLWGp4blVhTUlucUdMaDZBKzZjemhRN1hvNXpUcTQrNE51Rm83TEhnYndFaVljLzYzN1dQU0pJQlBJK3hML2o0Snc3dVNpa3ZodkN2aUZoeHRhQTg0dXdFUStSaWVFL29iaGlyZDJRM3VoTmxzUUwyRGFyRjU1T2phR3BqTzVkV2ZxOFZyMzI2UzUwNmNMT3FLb2s4YTZKNE1xTEhvOGV6NWVyTU94dFkxVlQ5bnFBdWxhUHcvNWFNVUl4Yjd3YXg0ODdIZDRVdkdzaVNhU3BYTndCVS9lUDFxclhQcTljR2QrOW9LSnEvNW01Zy9HNDFESlh2YS9XNnJpY1BUN0tyd3ZxbXJ4TnNhVVlqblQ5bkxYMVMvUTM2eC9zQTJ2YzE5bnFiUzN3SGFKbVZSQlNtOGJrTVlMTVhyaEJGVGlrdng0Vlh4TGFPTDYyTEV3VGUwN2ZydWVkZm9Dc2Q4VzdZTXV5eTB3TTA3TVdmYTlOMEladXQwdFRLWUQ4MFV3YjU5dTcwUENsTCs5dVhOdDhjSEU2T2ljekxqSy9PUnNOTjJ6UE5mc1EzMUY0NzA1SGZuRkpQcW1zUEx4MVpUWHVURTFEZmtsTmZYdnEzSHhIV2wxaklibWhPZWJNemZuUWprcHFZWWtPTERPVCtHQXUvZmxjUnZ6OXpQbzdjRDR0UG1FdWxmakFXSHhNUUsxaFBmWU9NdHZzdkZtV21jbXNpVUdXd1htRGJLYllPNDhUYXRqNUdIdzNHTjhZL0JiVkkxZnBMbWJLRmlVaGZmREZ2ZmdicDh5MXl1SnYwNkdDc1lZMjh2bWtBTStLaUx2NkUwclRzVDR0Y1l3SmQyUGwweVVoUFN4TFd3ZnczZHYwN040V1NtVVhNY2o4bEFQSlNOU2h6eUkrUUR0UGRNQ1R6MXJRQVdzZFluNWF3NkhJV01pSlpvZkRoNWg3bEJHS1VLN2VWeHBRYk5kaE9SWC9WMEhVL0pOcjgxQlhSL3VWKzVkaWFkZnV0M1lObnEydkNmWno4ZmFMTHMxTVNJc3U5ZlB4d1lmK0t4enFQSUU5YjhSMXZ2UEUwRUM3T0xhbnV3dDNydU00c1grRjRXbTltR2UxeVBCY1dSaHp0NzY3dUdDOU91SGVIRGx6MGRYR05TODFQek04cmlkMWlLQmVrbVZ1cjZIV3hSbyttRjlhM0Z4SjBnc1VjUFRPT09rdXphaU1kd1llQm1wK2NicTdxUXgwY2JlaGtPZmp6U1BFUldHT3Fhc2IxOWNtUGpUWUpvWnJmd1JOZjNHdWNPSnU3aXZJenN3MVNsY0J6ZnB1U0V6MUE3b1lwejhSUHBMYlpnRzVHMnRhMmVtRmxBMnJ2dVR0b25ZSm9FL01STlMxUmtYVXRFUkcxZFJIUk5iWC8rUFJ0RHF0cldObHJYbksycDVnYmFVaVUrdEdhQ1IwOUhia04rYTM5M0p6ZnpadE1yVWNhSEVubkJRZ2hKcXIvTkd6T1cyajNVN3NxVVUzNThSR1JFWGg3VWVxcUc2WXVqQVhhd3M5WllYRDA5cldxckx0UVdjeXNrcGIweUpPbVhzWjg5ZkpVS1A2czhoRjU3T2pPeFRzZFUxUFcrcXFKYlJDSHVXNFJiRERLbGwvbkVkZEp4MmNDV3ROV3RKdkZHUG85S0tKUHFTQldrZkw5WEIyVnB4SWFKZDk5TitINjh6Lzl0bUJvNTJzZWZ6dDVHNnNkSUZZeVNjeTFpUllFOWdaVDBWRk9iaXBLY24vREVRZkt6WjUzOUx1K1Vnckx5Z0phOHgwTHJqajh2V1cxc3N6UGRhZGpGbjFxN1BuenlCREFoSmM4SDdFVVB2Z2dBUzhrMzhNRkdDQ3dXQnNla0drVEk1Lzh1UU1TeEIzVENJeEppUXIzcHNPZGUzY25KeGZ2ekUyM0htQkVHOXNWek9qaDZhUWdueTZJajJUNDBFaVI0RDZyWURucDVDMHlhWXgzRVA3UmtzZTdLd3JWOW9OMFkxTUQwc3JCd3Y3bEF4TGUwdGlDbE9aMk5hT1ZWRHJFamJEd1FLbmdKWks2djdWNlFoOHVYU1dIOVptaFoycjZQaEhaa0NTK2tiQlh3TExqNXVTUTJON0xtVWRxaml5WHpwVklJRlA4REpNTDgxK2RrYndJbW1TZkxYUElsSm1jNjR6N2IvQWFqTUFra2EvSXNGVDJkbVFsdG5aVUFJOHplanVkMWRmTThiblJ6dXpjMWZNMWF6OUxsTmRTMnc3Vnk1ZWNoby82UzNYd2trNnFSRWQ3K3VzYnVWL3BjYXQxTW16Yk5YRkx6eks0NmxrdFAwT043Smt6TWgxMTdlaTkvSlFZL3Z6NGMxdDEraVlqSWhJU296VEpKYjZjZnh5NG9pemlyT0IvYkJiNVAxWDRERHhNV3BrK0ZwOVhack5lOE9TOWpURCtBYkxkaXVlZDN0SkVDVUdieGZwb3dGWFQ2d2J3SlFKSGlzcXJsbFJNK2Y1d2RUczI1SDA1eEdWVlBJc0wyMmJWQnQzc0pxZmZ6WXRRZWw2ZWZtVFdzdWc2WUpDcjB2S1doM3ZOUzZVWGNtekRFWVZzdk94bFZuNlZIZGY2eTN2bWN2TGJ0cWRjak81NzdFL3RlK3ZqWkNtWVdJRmpQSzFxSGlCV0luM2t1ck0rTE5UUm8zMWxiV3N6UXE5ZGIzWnFDUHo3emE1S3NKVndxb3VLM2psVnQyVTV2V0FXTGVKYmN1eTNpZWg0NWZjWXZFakVTYVVucWYwVUJOaWJqMjBURjEwemZqQzYrVENocmt5ZEJnaThWWEE4U0kzOGN6ZmVnb0hlSzh4VkliNTIzQW1xeDkzK3J2REw3bjJWTVNtaFpGUVFpaDdKWUdETUR5N0I2MXFQN2ordWlGQXFpdnQ3MU55WmVtTkpMMWdvOUE1WXZ5ZHc3OXZrbFpSL1dmblNWZFNvNjJ5eVlWZlMyN0ZHUVRyQnkzR2t6YVlsUDVOb1NjN0gxRktPeCt1WHVwNlhGYlN2VzV5OTJGdy9SbWVVZzdCYkhKOXMzTEllNWJtK3Y2Ni9tYTJyNXp4NmhMSmVlNlpTZDQrR2NsREdlbFRHZW5XcmtvbXBpcktwc1pCSm1ZcXFzYm1jbW92TndnWnhUNnlZd0g2UThLeUhTcVpxT2cwaXUveFJIOXQ4V01udFV3VmpERDd1RWdMbnh4WURYa3FLU3hnU1p5NWpqZkN3aWNmUnEyYUxBREJBWXZpNVlJUmxsNDVzT29VZWtobzBQS3hjdmtJQ3k4eXJJbE9QMGNJdXI5aFNMMGNHZWVpQSs2cW9NOGkzR1BqZkx3VENMNlM3akV4ZnI2eHNSNThJcEpRZVlWVUlVNnFxQUxEa1RoeGw1V3hLNkVLcUJKekppYjh4eGQydTFNejR6U3dJbm53NjJQM3ppZUZpdU02VTBYU2ZnaWZRTEtPWm8yV2ptYVBNaU9GUlQ5SGtVUngzUVNKMkhPMEZlVGwzT3k4MGp5Sy9rdHhTcWs2aFZ6cUpSQlByYVJXeGd0NGZWbXF2ZUY5bzg2cElOWmdsR0xhYUNxOFVtWmVLVDRUcTh0WDR3ZjBSRnV6VkJKU0k2S2kvVGFwbTROV0RCMUdzUm95T0JObmUrTitkT25KNllzZTR4UXdORDE1TVZST0R5QWYwLzNLMUJaVndJaVlFa253MjZKdWZlYXdxQnFzb2V2UU94ZG5NMmdCK0FOQU9zR1k1S3o3K2M3N0cyRHVqdEdIanpwUFRsbEplWk9zODNvYTZxczZ5NkNjbTlqYWs5cTU2djQrdWw1R2l0NjJ5MTRyQXl2V1l3Z0VBaHgvUlp2SGVUQ2dCNDRpNklmRW1tMW1aeHFIS3lpdGc2Q3o4bXpMTUtXaWNSQnFhMFBObEJYRHg4YXVVNHJnNDVib2xlRC9mODRrQjdub2d1ais5djVVWkdnYXNqdnpjRnVjMVRxdVFLVjZxOGlYcDk5STJEcXZrcHllMVZsRlN1L0pSb2EwTWdmbEcxdFlteG5ZMlZwYkRZUklGSW9XY3JGQ3ZFOHRiSWtwcEtyVXBJN21Ja3JQK1VhMXU1c3ZiaUd5cTlWc1QzSkt1RGk3R09yYjJXZWR0bkU2eC9CaDlQalVMQlJFcTVXWnBLUm9sdWtVUm5XbVlUclRva3lzQW42bGFLYUVOeVJuNXpRa2t4ZlU3YlFOREsyMTFUVnN0SE5zdENsSHAvYVVGVi9Gdi9MNWx2M1YwTXdvTktXOE5DZjlUR2QrYWVzNVdLMStXemt1SUxlaE1EQ2ozVS8ydEI3ZTNrRlAxd1p2YW14bDU0dkRZWEFZQVJ4T1FGL1M4b1NrSmVNRWt2OVpVNlBhVXN0TTQwenVqdzN6eXpULytidmN4QVYrUkp2WTJmMFRtY25PTCtIWjdJT2ZaRlB5VHpqaG1aS0MvUWVBVnRqK1BoSkpIMmc3SlZBd2UwQ3A2ZnpQUDRuT01PdC9KVlRhdFJlMDNSVlJnRE1NOTdPclNkcnZEbjdvV05IeUljQ1hlYXZVb1lleTNXbG9pRlpHbzRjMlZJRVRHNkdTclU0Ny96TmcreTJqTU1tWENIdU1VWHZhdUFHZXhqQUZLcHIyOUdnS1F6YUdMV0EzRkhTZ3RjM2hBWXdWRGNpM01iNkEzK3ltdVMrNlI5MWo3bkZwSWlWUUJQOERjbzB3b0libi9XQmxYSHFjVHRMeVVMTlFEczNrbXh6VHZwV1dGNjJ5TURwYmpmS3p4a01OeHpCRzBvZ25QZTczZHlJNzFNenZNWUZ2Y3BUNVZxcXJqakpQRkh6TnV0YzNtWVp2WlJ0VlIzVzhwV3FYL0xiVStxVE9vZVZXSzl5bE9TcTlBZEJYbytkU2k0UlFqYVd0MXVka2FDYmY1R0Q0VnBxdmp2TEYwaGNRc21sT2ZhMERCQWlHWUNlTHlxZk1xcXFlWUtwdVlZZlVRL1VWcTJYaE56RjBXOUVGd0cwVmNHR2hpWGpJUmxVbWxaZ3lkR0gyaXNiTXljY29Ua2VsWXYwUWJqQ2RiVW9QdC9ETnlSMDNudmk1OE9KeG5GOWE1MUhWVVpvc1R5V3k1UFlrYmk1UDhUQlN4YVRLOHEwblFzUzNMT3JlalF0V0dVR1JKc0pMK0FnL0VrQXFCSThRNFFvUkJuZWdEUC9CakFzbnNGeDhvb0p2UDloRCtRZUI3SmYxMTRncE03TGJyWERsZEpqR0VUTEdTaldOdERIQkZaaXZtY01jSjE4VDkvSmY1MlZuazFJVlEwTDFWRCtYODRvb2xieTg0T2dWYjVJV0FGN2ZYMnZWUFpyWm1wY25qV05XWlB1YzBqVzFEL01PdmVBV0IrY2xPcmJ6SEVLblAxcGxkZGFMdHRvNS9YWjU1MFh4cnljYzg0dmNnWHpabkNTWng1STlQMHdZbU1ldG1vTkxvc3Z5RzQrZmFxbGJNM3M4NS9VRGRadlZCS2xNdlFQRUMzVkVzL1B1S085RGZCdThIbnZJeXBRZU5YT3puaXlsMzk3TTY1VnduVnF6L0YvNUt0aUJWWE9NNVRkT29ENFJVTXh1T0s4WGdKbm5XOWRDbTRzM242MFozNVk5WDJ5SHp3c0FHenVlWGdUaXNmTS9lQXJrRlNqL2Z3ZWZpeSszZnFzNXJ4d1lQNTl2ZVdNM3JQb0NVRjlYTXhlUXk4OUdmc2p3OEc1dFNGTWc2OG53RXZlWEdncWJ4OFZ6WWZHR3haZ1BCdXFTT2M5djNQZ0pRME9mLzI2VHBpVzBDc0JOSHVWNVVWRnRpVGt2cFAvRGZ4Z2xRQWZ6dVgwYzkzcjlKemtXU0VZRTBTZnBKWHFYUjdFd1hiMy83akNVUWQ4QWtud2hDajkxU2FLR3Mybi9kd1hpQjRpeXc3cHBxU2hqaSswSldyaCtKejlianhmL2V1S1JRWll4QUsycGRTeVFGREdXRWoyQTJKVTRuSGpxMVZpNWU5empQc2JVd2sveXB3bFRnMkZyd3gxTlFueENkcWNXVnJOMHU2Q0FMTXAxSmFLY2ptb2RJTnFSNEx3enJFczAzdm5PbnRMdFdwbzB5OGxOU24xY2FGYWdwOEt1WDkrOWFKRUpYMWhQblVmMURERXJZZmpBQnloSk40T0xHaml6OHVORzNmYnJoeGROOW9RR3MrcysxcWRRNTFXUDMrMG9QKzBkZUc5dWxFMS9qOFBpRVk5S2gxdmVTbDZ4THhwNUhQY2ZxOWoyY1ZVNjNqYXpRYk9ZYW5ZTnJZZXpnOURJWHZSdTZMYnVnZExxdktwSGg5c0J2ZjgrQ0h1MEhXTWtPSWJNZXNCVW1wR0dlZXdlRVppanJvZ3ltYklSSXlaaHVnQm9QZTExSVNlQ0paYzR4alJyVGd0Z1hsdUdUY0FvRVRPSjdZTmhaOXAwZVRoaXZpN2NJY3VWNzFVSU13MVNhcngrQTV5V05HM01qU1VtQmNZVHdBL0FMUkpiZHlYcm5hU2FkV0hoeXg0ZHVrMWdZTXFmQVBCWGFmQkg2WTRYRlBwNWtvZTh4aE1mYlNhQmZkbTlLdlpqWFoySFJ1cDhpeDJEd0JqM29FbTBDUUxUcGV6WEhua1E1WnVZeExQTllVQThZaVJEUDBuWUtKaVdBNTJVY0QrcWVMVmxXU2dqN3l1N3BKdnQ0QVdvRHdSQk1pMitpdUgzWjdRRkVKQVR4UmtEUVVEbFZVYU5yRGw5eHNYbm4rRHZnWWFVaXVXRGg0a0hjeC8wTGV1cTlwQjlmN0JsaXlJdWVHazJhaEJMd1ZCV0NwWFowVjVrT1VyTVVaWUJjR2M2T0hGR2NpY20wTHJCeEgrb2dRbkpFQVFGL2RMaUlnNnZ3ZXF0ZzBPYVVqRHZ2a1dRdzNQS0tyMFlOVlNpZ25XelM4V3IxUmNxQWg1R2xQY3E5a2ZTZGlURHpUSTdFSHRGc29rZVA5N3lNWHhFTWVDSG1kMERtS1lWK2w3RFF2R0ZkblNFOEVSRjJZS1U1Sm9tak0xcXBBL1NqVkpxL0ZHcGpSVWJ1eSt4aGUzUG9rRmdZSXk1RkNNci90ekJzREptM21MWHg4bDkreHlQYklpZkNJUmJlQlp0YlNMcmh4SElNTk5zdTFUSDlwWG45MXFUMWRjSFVraG5seEdqOSt4dTU1K1JIbGIvMW9nVVZ4dE45WDMxZlNTZTVDQXBDZ0NRRWtvRjhQM1RHdndmU2FTLzhWK05kdnlPUGg5eDY1ODR4dlNIUFpTMGd5VTRPUGVYNXh0cGgwTEk0ZExNWVQycmdQd3ZmdmFzdzZ1b01pcnowbnRmaE9BalR2V0Z3M1AvN3dQTjhrZlpyUnhXVGltVFBQWGFCekUyVjJ5cGZVbG04VktXMGl1WVlMYUZaNTdxSVpzdzdJak41NW02RVZJUXdxeHFNOGJ6SU5SSjEyT2QwTGljWHRFekVwVlFlSm5hZUFSbkJwT2sxSEtoaFl3U3krZmRhcld6UzJxNlExYk9vRHlsV1pnNE1qOFFLUVJYemRPTStQN1ZQaERlODFPcFRsSldHVXNpV0NzNE9MUzRqMGt6dWhLOGcrRmhNSFNyTDduc3VLQmcwblA5NFQydXlsNUFwMmdHaE1TeStKblIwS2FEMEU3dFdpTWNsalZiRlJBUWk3WVpuVktnS2VuWXJwRm1PNDF2bWU0Ums2anhGVk12aXlhOERYTk1OM1pIZ2x5VzQ0UDl5bWVOMUZPdmZXQURjZXRxcFY1NDU3TStVNm5QRzZTOVFBYWxHY1M4YUFjZGFVSWFGVWo2K01Ocmw0V3RGMkkyRmRSaHhZUmFPN2Npc3VhcGNLYTVZV0pqTTlYMGdFQXFCYktnSWhjMTJyelpxd05FclJFNzlRZ0hXRCtjSXAzeWlFc1ZtcU5qOHIrYnRUb2NtckZOVmhiQWd3cWRkYkZOaG9qRnowajJVTTBiUXY5Q05uQTAreXQ1OFYwNWkwbjBHOENvTTlPbURIWDZQSEFjMnJSMHV3QWozd3ltMG1waloxYVl6OTdKU005d05HSkp5aEE0VTVlcW5TOTdha2VPeFlTeWtnUmtUL3l4YXRxYWFlc1V3YmFrZWxKZTBIVG96TXBRZlpBTHFCN3BJZitiSThLa1hJcktTc0dwd1BEaU9KMll3VkN5RjRmTW1VMkRaK0FnM3R6bldlZW9pRXQ0VS92ZWZsYzdyQTZKUVNES0FuYkdqbzFPdGlYcHJWU2NOYkw0VTNyMUVKdWlZNUp2Y0ZlbUgweEdmd0JKZzRESzZSNWhJSVFjYkxGNUkxQ0p3WkJwNGhSRTRpL0FnMVdheVNrSTE0MU9zeW1sRWxoTm44YUNsL1k1amljK1FnVW5GNnFpQ0ozWlpTNVZDVGpwU0NlKzN2a3o2cVh6bU9YOSt0Y3laQ2hZdjZTZ0ZsdVViVE5sdWZYVFBjclY4aUtHWk1DYVNtZ1MzbVNEODZlNE5iWFlLdGs2UENBUE9tZERNaVEybktCVmJyRmlGZVNLWUNUVDVhVlRFd2E3NVFJNnFCanFsQTZkMStOMGpqRzd5RnUvWndjUk8xVHRudFZCUVlsNVpZSFdibnhUMkkwR1lqdmxBSmxPeGhhY280aGFiYnlIRHNta1pHUlo4aDdZSXZzS24yRUdEc1o1bzlGTEc0MzV1ekVQQnNBRFdTWHZVYURJekNHMWM0Wk16M2xXMEpIdVNZeXlPRGZFeU9RTVppbEYyMjBUcVpRd3NBQ09oZDBGY3YwODVkNEFQaGkrM2E0ZTJQMndtRnVGWnBrM1lYZ1kwWU1JOGE1Rjl1b2U0cU1NNVhqT0MzRFArR1c1L0hqOFlhWnptYk9KUVVza3k3dnVjM3RhRnhlYjgvZnNoUUQ1dmU5Z3FUUXN6QnNyaGJkbmkyK0ZkMGE3cWRWWnMwYUdvVDlYdk84dHlzVlptaGxQUllrTk1vbUJTYkhFMy9xeGFJV21BSVhFcG1mdDBOeEtTUW16Mnpzb1VXWncvNktVY0tsa3FFeXlsdGNXUFdpeGN4U2RtY2hzc295UjlyVUwrSG1DSHZ5K3pYVTg1R05BV1JibDZhUlN1emJrYWRtM09BNUZUMDRaalhNbldhUHZKZ2tHSEpTblVncWVwNERaTkxFeU1tMDdpYWRLNm1hbm5HVWpwMWxOUFBxU0pFNVp3dGhTVEZCK1owMkNnSGdNcm5tM0grQzQvQnBtNG1DOUM1ZHh4TWZEYVIxMmRpWnI5bmR6Vm5UNmtVcnRlamtVYzlJdmQ2cjAwdmYrNGFkYmw0T2xwOVNWaEZUaWlIam1VWmZZR2JVazJuUTl3SG4zUlFTZHhCWnA1YmJ5ZUw3NlhINjRlYmU3Mk0zem5QTDVValNuQWdKemZuK0R6SlZRaitzcTFEeUpNNktnQVpxMEhrejluaHQ3dFEvVDgrSnB3WDltLzZDclVNNFhoWFN1dVd6YkgzRjB0VW50SXJHcDJRVlY4NEs1TkdzV0RhTVJrK2draHM4U0VVR1IwVXhJM3g1K3hEZFg1VmFweUIxVW5WMU5kUlFWUU4rdytkcjhmbWdGZTc2UTlpdGd1N3Y5TU8vS2R0WHZ2b2NiT3N5NUc5MjdRNzFJVVYvWGQ0K3RyQmR5amJFN21mK2FnMWJFZXF0YTFnZ3NSLzJrRXptWXVjZ1ErYWxWbzVNSUMyMnIyZkY3VVc2cDhPN0paTjJ1bEs0T0txdEVLQWZBVnBpZXhEVlZ3aXJka3NJOFJSVElYbHhPMjIvQWVuQW9YTzZIZWROdG0rMS9tZjJTM0toTThGMXBsMFYxaXZmZ3ZoaUZRYm5PMm5RYi91bXpwVEpsRXN3L0cxZDZNa0drcUgweHhxbW5kUVRZdGg2ZjlRelQzZWt6UmNqWnBJYzBLbzJaamF5SVJUYTExK0Z5MnJUMk11UkRFRlZlMGF4dUdGZGlKYkFaazAraXEyeU01Y3N5cEgxdUt2eXRqQWpMbmtoM2lHRHdnNzhORXVyWXE2TjFwaUhVZ3dXK3hBS0pYVjJaZVlGanNSSEo1QXI4Ums0aHMwcHBybU1yYlQxMDBaTTB4a01PNERuS0R3Szh4WFIyWTErSm42SHRDQWFYT2JSbjhCOGk4eEpRV0dzWlJ0bXJxdjdoZHc1d3QrTnlMMmMwcXJxTnRGSXg4UUhRVk0yN1NXMHIvU0l1U0ZzLzNHRWRHbzlQWWdSYWJvMjd5UDZibVlIcXVaaHlOSmx5YUtEa21FcXFkRWZvdS9EYTEyWlRKQ09qYkdwV1JEVmNBTnRNcXRrSVFKYmJnaUhld2dWaGh2bFNBODIwREdWR3BZY0pibFlOOWZXOTE0ZW1EdUtPS3plcFBmem9QcGZXMEkrNU4weU5VODRNbi9wMEdmMXA1MVlYeWlFOXRQK2FOTlJrZitMMnVSNzltL1NuWmVEVDNOMS96eU84R1lmL2Z2bjZxL3RFNGs3SEN6Mk9iOHJYOHZTTTVIRlhDZUIwbHRELzdyaFoyU05Oc2l1aU5GTWsxNG1GMTlLc0M5SWFtY2w1RFY2OU5lZExjc0tycktXTHEvVVYxdFBhd1dGcEdIb2s5SWhlekIzSFZpbzd4V1FMTWt0b250SGR2RU5kY1pYVWU1akxhTzc5QkYrV1gwS3lJcnQ3dkI3amVqbFdKVkhPWG1VYXBhQkZxUnBxK2tuZzBsejJyWjRxTDhReEZjeHFOKzY3RjJrNVh5cEJ4cERHSmdJOXY5ZXlYaVd2bWlmb0ZXeVpqZCtmYnl2cjFvZU9UL0U5dnNjenllRXZ5WHFlRkt0VEJRRzNldHFmaVJmTEkyR1FGSmxSOEJNdHVxbE54dkR4NklnalEzeHYzMlRkVGZKQmFKQ0NtZ3VuYWp0QlkzNUp5aEVKeVZkeXROZHRoUFhNeGhyUWhhSTFhUlR2NHNLRFFBODFSUE9EL1JTVUtZazJ3WjY5MlIxMnFGMGg1Zzh0dE5hbUcvRU1CNHlUZlVmMEU5REtqM0JGZE0wcW1XYnRCeVN4dHJ0T0tzTnRQNEhhWFI5djBVZGNUaHd3MEQ5elNEOG1jQjZQamlTMmFMbktnaXl1TjA3WUtBVFhTcVhJa1lwOGJkVjIvRFZqTm9nUXJ5aW1OaW4zSWVvZnpYUjZHUXBLVjI2WVdJTWY5RDZLeDdqaU0wYlNuU21OTU5rRHFPVUZtajFWbkVmcmJzbkRyUEVlSzlzbjhSSDUyTHdVRDZIZGVoQjNmcXpDSnp2U1dRc2ZVS08yekJWcmVVV08zT0k5OExqOEdJL0tqM0NzSGhkeGVtZHhaZHI3d0hzUkVWbXNEZU9VRThOVzNuQ2R1ZmJGalNrdHZuVE1xSUU4ZTRCRUhUV2xLOTBudlZZc1RjdjMvR2ZEYnZIK2o4TWx6Wm5ocE1PbmFNVDgycE9nZXpDdUNqYmR0KzF6WmR2SjYrSHpXSkZYcXN0cTdJSjRLWkRRMTZsVU9XbS9KVmczVDVwa21PeE01d1NxNkFqenJBZUd6VnFhSVJuQUg1YU9UVFltYXFqSU1pdDA2RHBKMnRKZmV2NDArMDg5OFNwbFIyVVhxVnlIVERKbTdxcHBmMVBDMXI2bVk0cWh0RDFOQ2syaHNhR2o0S2F4b0RyRGRJSXJPeDlWUlV0aVhrbmt0bU1nSlBPKzgzNCtVczJaOFUzT2xFM3UzL25KaHgrL1EvWnY5MnYzdWN2STR1N0c3a1VqUXRYYXBjbjh3NDM0bE82U3VYS3pYUWFWZVJNVk1zNXJTT3QxcGlxUHBodWxUNUh0ZlgrQjl6eERVZk1jVkxvRnhXcklQdkU3UGdtdWlYeWg3VkRVMkZMaVRYblE0b0ZHbE5HWW5CZFdvenZwRmxWR1hvdDVMbFZIZlpkRHBydC9OSGtSWkx1OGFOQ2ZYSWNxYktJTzJJOG43aHNLOEtRZkVQaDZ1L0EvQ2s0MUJwODVmNEhvRndnMnl0RHhETmx0RFI2dFRQaUdveHdMQ3dza244OXJVSThPY0Jnd2p3Mkl4c3dmbzN6OVljYitLNFhkWXVFOWp5MnpEdDFEL0FLSHBmTkVMd1h6M015V0FibVhEMVNObVQrbThmVUhkL2JmNFNDcExZejg5bnNLUDQ2MzBDY2hPdXdwdlR5Rmo3SWtzbVhMRGNwVEF3dEhjd3RkUXpUZGovQWNEVjZ1RTcxY0ozcDVpSzdKZG1vSk0xdHBvSWRqcHRpRXppRTZiS0ZqdEtmL3BKM0VlYlFjYmxCa3poOVQ2WnJhRVRZMFpFRWplbkdwZWVPdC8xRkVSYlJVbFlrQVlQS2NRSm9ETUg4M0I3aXlrbkRiZlVVUTNxdTBSaUgyYWk2WVVmQStpa0pMMEMxYlR3Z2NsbE1ZaWU1NHRtQndIaGFnV2M1aUZBaGYzSWlxbUNDTktpbUxKbCtNdEhGT1pDbmZzMFVxM2dvK2JFRGlVSnNtTzlUNm1Sbll2NkNWNzFKdzYzT3dIbE8rR0ZGT3ZiK2pCVFlBNElzZmw2SUMvR2ljLy9icm1ML3JPOHFiUk1BT0dJQUExaWR0MlFEWXVmMS9oUDVaVjhvZ3paMm84WEloMVBYL2RwK2ErM1VsRmJuZVNhMGNzWE5EWlAwVUdxSEM4NHJpdkVGcUVBbFhLZnVvSVpJYUpGTkkxYkNGM1RrV0VtR0FMejhhV2hTeEU1OTNTSHhBaW90a2k0dGxoV2dxUmFTeHhHWlZFalcxQ05kdi9WTkQ2alRVWCtWVElPaGppVExtZUVZcW1Ld29HaE5oRit3SGxqLzZyOHc4S1pNdHp6ZW0zdW1yYVk2MVNHVXFLNTk4aEZjQitoTkJ1MVp4MXRlNTVURTF3NUxNbEEvenVCK2owUWFSejZkZFhtSXFXM2twODZsQy9xWFBONWZvV2FVQ0trSjVmRlFSaHoyOUhIanRvN1lWamxKUnlxdUt0enlXODg4SkVDdTNIWE05SG5uc0VGL2dUbzd2Wk1jeTNtbWlSMDR3aXM5R0ltNG1LTlN5S0JVZ3NucDR6M0g4RDlWd3hwL1YxZ0d2NFNGMHNlSTlhdFdPV1dFVkszZXg1alVHVk9aZkJYVmFZQjR4eVNNR1dTQ3p5RnJHSWRQa1ZSdS9KZVdSakhGV3hwZ1JOamU0TGhvY0YyMXhZNW5abXRHZnlvem56Sk5TREQxMUhXV1paVjgwT1ZYTm9zaThxMDE5L05LNmRvdFl6UVNPZWYwNUxIMHN5aXh1SU40TEJBRG1qYzRzaHFxaVdVQTBVNDVHSjNKTlJENmpsN05PNUtpeTZhVXV3eEF5ak9jNFN6ZVBhRllPL3drSnJ4cDlGZXRZVWVndGE4ZHoraWVieS9qMEdqS0VJd09hdkxuUjRjQ0s0K00xQjVVckI3TEdqaTh4dWlPZGUvUWh5bzNURjFNRTh5YUlwQkpIalFCMjc2QU1yYndQQSt0UnpBbUlZUllBRUxXOEJOR0QyR1ZSVGZ6cXhUSU41WDBuY0RseU9RRnh5d0lBQUpjdlhOWXdKcmt2ejlRYVRkV2ppSEdJS0xuOWpsMm9lTGxBc3BjWSs0QUVPeFVLQk5nSUF3ZlZEdUFod0d4aENCdS9oV0U0UkJYQ3k0VUlMSXdrSlcxaEZHRWRGNVNEQ3daVGNlS2xJNG9VTGtJU01hcVVxVlFlTVJiaW1GQ0MwTVZiaVJWTTBUQTJNQ0hvTEJhSnJCSEtpVkJFS2RrSm9XZzRjWUlPbkFSVnFlR1NFUVE2c1p1SEtGR2tpRzJORlllcU9VWFhTTXRUT3NVVTV0QThOVWs4SFVvVlNVMG9DaFEvcHdhTEVFcFJER0xHU2s2azRJeGp3V3JiU214Wk1XWE9IcDZFZ28wbVpYQUhhOWRSUXB6Z2gvYWMvSkNUUmdPVEoyUDBJSkV6TUhudzA4WGVuQlg2SEpOaGVZM2lvc1c1V3htVE1BOUxMWm1KRjl6WlZGMlMxd3ZoWjZkM1VzQUxxU2t2SWNEcGhVcndQYTBxNU1WVW5lcWpjOXdMblJQdXFDM294ZXhpcmluRjdjV1NFbUNqS2RMTVdoaGlYKy9GOW1TMExGalBpNTBidzhhTTh1TFFVNVVXNXZMaU5GS1hGZUh1aVhFME5qY2VHTVd5TXAya2dXL2RTaDgxRklRU1IvMVBwRnlrVkpVMDZpREZTVlJwUlBxUGpsVWxqeHBLL2xLdXd5a0tmUU1nSGFGalZVbWovaEpWdWlQOVI0WlZ5YU54Y1NVeEtGR0ppVUdKQUE9PSkgZm9ybWF0KCd3b2ZmMicpOw0KICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEOw0KfQ==";
		document.head.appendChild(roboto_font);
		
		for (let i = 0; i < 10; i++)
		{
			let cameraSwitcher_item = document.createElement('div');
			
			cameraSwitcher_item.style.display = "none";			
			cameraSwitcher_item.classList.add("cs-items");			
			cameraSwitcher_item.addEventListener("click", this.cameraSwitcher_handler, false);
			
			this.cameraSwitcher.appendChild(cameraSwitcher_item);
		}
		
		await mwbScanner.getCameras().then(function(foundCameras) {
			
			let cameraSwitcherOptions = MW_properties.global.cameraSwitcherOptions;
			
			if (cameraSwitcherOptions & CONSTANTS.CAMERA_SWITCHER_USE_BEST_CAMERA == CONSTANTS.CAMERA_SWITCHER_USE_BEST_CAMERA)
			{
				try {
					
					let cameraLabels = mwb_VDList.map(({ label }) => label);
					let backCameras = cameraLabels.filter(e => e.includes("back"));
					let backCameras_count = backCameras.length;
					
					if (mwb_debug_print) console.log(cameraLabels);
					if (mwb_debug_print) console.log(backCameras);
					
					if (backCameras_count > 1)
					{
						let mainBackCamera = backCameras.filter(e => e.includes("0"));
						
						let mainBackCamera_i = cameraLabels.indexOf(mainBackCamera[0]);
						
						if (mainBackCamera_i > 0)
						{
							let mainBackCamera_tmp = mwb_VDList[mainBackCamera_i];
							let defaultCamera_tmp = mwb_VDList[0];
							
							//swap
							mwb_VDList[0] = mainBackCamera_tmp;
							mwb_VDList[mainBackCamera_i] = defaultCamera_tmp;
						}
					}
					
				} catch (error) {
					if (mwb_debug_print) console.log(error);
				}
			}
			
			let cameraCount = foundCameras.length;
			
			for (let i = 0; i < cameraCount; i++)
			{
				let cameraSwitcher_item = Dynamic_DOM_Elements.cameraSwitcher.children[i];
				
				cameraSwitcher_item.textContent = " " + foundCameras[i].label + " ";
				cameraSwitcher_item.dataset.value = foundCameras[i].id;
				cameraSwitcher_item.style.display = "block";
			}
			
			//simulated
			//{
			//	let i = 1;
			//	let cameraSwitcher_item = Dynamic_DOM_Elements.cameraSwitcher.children[i];
			//	
			//	cameraSwitcher_item.textContent = " " + "Simulated camera" + " ";
			//	cameraSwitcher_item.dataset.value = "57c89eddf271a407ce036aa7075b173b832698161a08a56b8940557acaaf6670";
			//	cameraSwitcher_item.style.display = "block";
			//}
			
			//.style.width = "fit-content";
			
			if (cameraSwitcherOptions & CONSTANTS.CAMERA_SWITCHER_USE_ON_START == CONSTANTS.CAMERA_SWITCHER_USE_ON_START)
			{
				mwbScanner.setCamera(foundCameras[0].id);
			}
			
			//pos and size:
			//calc once in here (because now width and height are known) and always in resizeCanvas
			
			MW_methods.calcCameraSwitcherPos();
			
			if (mwb_debug_print) console.log("in getCameras.then and cameraCount is " + cameraCount);
		});
	},
	
	ready_to_use_ResizeObs: false,
	resizeObs: new ResizeObserverPF(entries => {
		
		if (mwb_debug_print) console.log('Container was resized');
		if (Dynamic_DOM_Elements.ready_to_use_ResizeObs)
		{
			MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements);
			setTimeout(function()
			{
				MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements);
			}, 20);
		}
	}),
	
	updated_XYWH_forContainer: false,
	preparePreviewForContainer: function () {
		//1. set css changes
		this.previewFrame.style.position = 'relative'; //*xywh should be 0,0,100,100
		
		MW_properties.global.partialView.x = 0;
		MW_properties.global.partialView.y = 0;
		MW_properties.global.partialView.width = 100;
		MW_properties.global.partialView.height = 100;
		
		this.updated_XYWH_forContainer = true;
		
		this.flash.style.position = 'absolute';
		this.zoom.style.position = 'absolute';
		this.close.style.position = 'absolute';
		this.camera.style.position = 'absolute';
		this.cameraSwitcher.style.position = 'absolute';
		
		this.lineV.style.position = 'absolute';
		this.lineH.style.position = 'absolute';
		
		this.overlay.style.position = 'relative';
		this.pause.style.position = 'relative';
		this.locate.style.position = 'relative';
		
		//2. update size and pos i.e. recalc those calcs for when
		//either the window or the container element change in size or pos
		
		//the window listener is already there, so just the container listener
		
		//ResizeObserver does that
		//only thing - iOS Safari has the latest support - from 13.4 released 03.2020
		//which is why a polyfill is used
		
		//3. and some extras
		this.preview.playsInline = true; //for iOS Safari
		this.overlay.style.top = "-100%";
		this.pause.style.top = "-200%";
		this.locate.style.top = "-300%";
	},
	
	setTop_forContainerElements: function (element) {
		
		//for relative position for canvas elements
		//lineV and lineH are calced from the overlay and set in their draw method, so they are skipped
		
		let child_i = Array.from(MW_properties.global.container.getElementsByClassName('shadow-overlay')).indexOf(element);
		let element_order = child_i + 1;
		
		//in resizeCanvas (sdk_modular.js:1399 + lines of this method) and drawPauseRects do
		element.style.top = "-" + ((element_order * this.previewFrame.offsetHeight) + (child_i * 4) - ((this.previewFrame.offsetHeight * MW_properties.global.partialView.y) / 100)) + "px";
		//iOS Safari needs px calc instead of %
	},
	
	preparePreviewForDynamic: function () {
		//1. set css changes
		this.previewFrame.style.position = 'fixed'; //*xywh should be x,y,w,h args
		
		this.flash.style.position = 'fixed';
		this.zoom.style.position = 'fixed';
		this.close.style.position = 'fixed';
		this.camera.style.position = 'fixed';
		this.cameraSwitcher.style.position = 'fixed';
		
		this.lineV.style.position = 'fixed';
		this.lineH.style.position = 'fixed';
		
		this.overlay.style.position = 'fixed';
		this.pause.style.position = 'fixed';
		this.locate.style.position = 'fixed';
		
		//2. update size and pos i.e. recalc those calcs for when
		//either the window or the container element change in size or pos
		
		//the window listener is already there, preview resize is done with API method
		
		//3. and some extras
		this.preview.playsInline = true; //for iOS Safari, probs its not a problem if left
		this.overlay.style.top = "0%";
		this.pause.style.top = "0%";
		this.locate.style.top = "0%";
	},
	
	setTop_forDynamicElements: function (element) {
		
		//for fixed position for canvas elements
		//lineV and lineH are calced from the overlay and set in their draw method, so they are skipped
		
		//in resizeCanvas (sdk_modular.js:1399 + lines of this method) and drawPauseRects do
		element.style.top = this.previewFrame.style.top; //exact % asign should be ok
	},
	
	preparePreviewForPreviewType: function () {
		if (MW_properties.global.previewType == 'container')
		this.preparePreviewForContainer();
		else
		this.preparePreviewForDynamic();
	},
	
	setTop_forPreviewTypeElements: function (element) {
		if (MW_properties.global.previewType == 'container')
		this.setTop_forContainerElements(element);
		else
		this.setTop_forDynamicElements(element);
	},
	
	disappearElements: function (onStart)
	{
		//until video is loaded
		this.overlay.style.display = "none"; //or style.visibility = "hidden";
		this.lineV.style.display = "none";
		this.lineH.style.display = "none";
		this.pause.style.display = "none";
		this.locate.style.display = "none";
		this.flash.style.display = "none";
		this.zoom.style.display = "none";
		this.close.style.display = "none";
		this.camera.style.display = "none";
		this.cameraSwitcher.style.display = "none";
		
		//previewFrame handling for height 0 until 8ms on 2+ runs
		//this.previewFrame.style.display = "none";
		//if (typeof onStart == 'boolean' && onStart) setTimeout(function(){ Dynamic_DOM_Elements.previewFrame.style.display = "initial"; }, 32); //8 min | higher time seems to fix the height 0 bug and
		//the black preview 'flashing' before starting on 2+ runs, at least on Note5
		//LG is also ok, only lags when anchor is used, but still ok
		
		//lets try with hidden
		this.previewFrame.style.visibility = "hidden";
	},
	
	revealElements: function ()
	{
		//when video stream data is loaded AND preview-overlay calcs are done
		this.overlay.style.display = "initial"; //or style.visibility = "visible";
		this.lineV.style.display = "initial";
		this.lineH.style.display = "initial";
		this.pause.style.display = (MW_properties.global.overlay.pauseMode == 1) ? "initial" : "none";
		this.locate.style.display = (MW_properties.global.overlay.useLocationLayer) ? "initial" : "none";
		this.flash.style.display = (JavaScript_mediaDevices_API.flash.supported) ? ((MW_properties.global.fullscreenButtons.hideFlash) ? "none" : "initial") : "none"; //HERE
		this.zoom.style.display = (JavaScript_mediaDevices_API.zoom.supported) ? ((MW_properties.global.fullscreenButtons.hideZoom) ? "none" : "initial") : "none";
		this.updateClose_state();
		this.close.style.display = (MW_properties.global.fullscreenButtons.hideClose) ? "none" : "initial";
		this.camera.style.display = (MW_properties.global.fullscreenButtons.hideCamera) ? "none" : "initial";
		
		//HTC flash/zoom buttons something not there on first run Bug fix
		setTimeout(function () {
			
			if (Dynamic_DOM_Elements.flash.style.display == "none" ||
				Dynamic_DOM_Elements.zoom.style.display == "none")
			{
				let zoom = Dynamic_DOM_Elements.zoom;
				let canvasOverlay = Dynamic_DOM_Elements.overlay;
				
				Dynamic_DOM_Elements.flash.style.display = (JavaScript_mediaDevices_API.flash.supported) ? ((MW_properties.global.fullscreenButtons.hideFlash) ? "none" : "initial") : "none";
				Dynamic_DOM_Elements.zoom.style.display = (JavaScript_mediaDevices_API.zoom.supported) ? ((MW_properties.global.fullscreenButtons.hideZoom) ? "none" : "initial") : "none";
				
				zoom.style.left = ((canvasOverlay.offsetWidth + canvasOverlay.offsetLeft) - zoom.offsetWidth) + "px"; //crucial
			}
			
		}, 0);
		
		//seems to work fine, no height 0 bug either
		this.previewFrame.style.visibility = "visible";
	},
	
	previewFrameParent: null,
	
	addPreview: function (container) {
		[this.proxyWrapPreview].forEach(function (element) {
			Dynamic_DOM_Elements.previewFrame.appendChild(element); //this. has a different scope here
		});
		//Insert preview frame and controls into container if provided or into page
		var container_exists = (container != undefined && container != null && typeof container === 'object' && container.tagName === 'DIV'); //NOTE: should container be limited to div ?
		this.previewFrameParent = (container_exists) ? container : document.body; //can also use default container HERE
		MW_properties.global.previewType = (container_exists) ? 'container' : 'dynamic';
		
		this.previewFrameParent.appendChild(this.previewFrame); if (mwb_debug_print) { console.log(this.previewFrame); console.log('neposredno po add:'); console.log(this.previewFrame.offsetHeight); }
		this.previewFrameParent.appendChild(this.overlay);
		this.previewFrameParent.appendChild(this.lineV);
		this.previewFrameParent.appendChild(this.lineH);
		this.previewFrameParent.appendChild(this.pause);
		this.previewFrameParent.appendChild(this.locate);
		this.previewFrameParent.appendChild(this.flash);
		this.previewFrameParent.appendChild(this.zoom);
		this.previewFrameParent.appendChild(this.close);
		this.previewFrameParent.appendChild(this.camera);
		this.previewFrameParent.appendChild(this.cameraSwitcher);
	},
	
	destroyPreview: async function (this_root, track) {
		
		//stop decoder
		MWBScanner.DECODER_ACTIVE = false;
		
		//rm decoder timeout timer
		if (JavaScript_mediaDevices_API.scanner_timeout != null)
		{
			clearTimeout(JavaScript_mediaDevices_API.scanner_timeout);
			JavaScript_mediaDevices_API.scanner_timeout = null;
		}
		
		//to prevent 'black blinks before T's are finalized' for next run
		this.disappearElements();
		
		//set the remaining 'execution heavy' tasks after some time (128ms)
		//giving a chance for the DOM changes to complete
		//also take that into account for the alert after in the calling function
		//AND, now in a timer the ctx of this changes, so use direct access
		setTimeout(function () {
			if (Dynamic_DOM_Elements.preview.srcObject != null) Dynamic_DOM_Elements.preview.play(); //calling this before track.stop() will 'clear' the last frame
			//that might be left from pause on result success (both on HTC and Note5)
			
			//while that fixes that on devices like HTC, it also makes closing the scanner / removing the preview much slower on devices like Note5 - actually, doesn't matter, seems Note5 does the slow removal anyways
			
			//on Note5 Firefox, it seems last frame is always stored, regardless of .play() above or
			//using .pause for result success
			
			//one more thing to try: delete object, create new preview
			
			//if (mwb_debug_print) console.log('this_root');
			//if (mwb_debug_print) console.log(this_root);
			//if (mwb_debug_print) console.log(track);
			//SO apparently leaving those args makes them accessable
			//but specifying them as args to f() of setTimeout makes them undefined
			
			//video.pause(); //lets hope this is the this we need, yes, it works, but camera is still not stopped and keeps dissipating heat CONFIRMED! camera is on and running, its just the preview thats no longer updated
			//we're gonna have to stop this in its tracks
			if (track != null) track.stop(); //should hold the local ref, yep it does
			this_root.videoTrack = null;
			this_root.mediaStream = null;
			
			//clear last frame from videoElement
			//Dynamic_DOM_Elements.preview.src = ""; // empty source
			//Dynamic_DOM_Elements.preview.load();
			//^that however messes with the clearing of the timeout for some reason
			
			//this is probably going to change into destroy preview, no sense to keep it without a stream
			//also:
			if (this_root.torchState) //and would have to be done on any close/stop/destroy
			{
				this_root.torchState = false;
				Dynamic_DOM_Elements.flash.getElementsByTagName("img")[0].src = MW_properties.global.fullscreenButtons.flash_icons[0];
			}
			
			//remove event listeners:
			
			window.removeEventListener('resize', MW_methods.eventHandlers.resize, false);
			
			if (MW_methods.helpers._Screen_Orientation === 'undefined')
			{
				//
				window.removeEventListener('resize', MW_methods.helpers.orientationChangeHandler, false); //same handler - checks inside, for now
			}
			else
			{
				screen.orientation.removeEventListener('change', MW_methods.helpers.orientationChangeHandler);
			}
			
			// Unobserves all observed
			Dynamic_DOM_Elements.resizeObs.disconnect();
			
			Dynamic_DOM_Elements.ready_to_use_ResizeObs = false;
			
			//NOTE: flash and zoom use already_inited
			//so the EL is added once
			//no need to remove it
			
			Dynamic_DOM_Elements.preview.removeEventListener('loadeddata', this_root.videoStreamData_handler_wrapper); //crucial
			
			var this_root_2 = Dynamic_DOM_Elements;
				
			//remove added elements
			this_root_2.previewFrameParent.removeChild(this_root_2.cameraSwitcher);
			this_root_2.previewFrameParent.removeChild(this_root_2.camera);
			this_root_2.previewFrameParent.removeChild(this_root_2.close);
			this_root_2.previewFrameParent.removeChild(this_root_2.zoom);
			this_root_2.previewFrameParent.removeChild(this_root_2.flash);
			this_root_2.previewFrameParent.removeChild(this_root_2.locate);
			this_root_2.previewFrameParent.removeChild(this_root_2.pause);
			this_root_2.previewFrameParent.removeChild(this_root_2.lineH);
			this_root_2.previewFrameParent.removeChild(this_root_2.lineV);
			this_root_2.previewFrameParent.removeChild(this_root_2.overlay);
			this_root_2.previewFrameParent.removeChild(this_root_2.previewFrame); //if (mwb_debug_print) { console.log(this.previewFrame); console.log('neposredno po remove:'); console.log(this.previewFrame.offsetHeight); }
			
			this_root_2.cameraPreview_closed = true;
			MW_methods.eventHandlers.preview_closed();
			
		}, 128);
	},
	already_inited: false,
	main_createPreview: async function (MW_properties, MW_methods) {
		//
		if (mwb_debug_print) console.log('createPreview ');
		
		if (!this.already_inited) {
			this.previewFrame_Style_init();
			this.previewFrame_init();			
		}
		
		var partialView = MW_properties.global.partialView;
		var viewfinderOnScreenView = MW_properties.runtime.viewfinderOnScreenView;
		
		MW_methods.anchorView_toOrientation(this.previewFrame, partialView.x, partialView.y, partialView.width, partialView.height, partialView.orientation, viewfinderOnScreenView.orientation);
		
		if (!this.already_inited) {
			this.proxyWrapPreview_init(); //might not be needed
			this.preview_init(function(){}); //needs a handler for focus on click OR nah? Maybe propagate thru canvas-overlay, or let continuous handle it?
			
			this.overlay_init();
			
			this.proxyWrapPreview.appendChild(this.preview); //might not be needed
			
			var mwBlinkingLines = MW_properties.global.blinkingLines;
			
			this.lineV_init();
			this.lineH_init();
			
			//obtain a ref
			mwBlinkingLines.v = this.lineV;
			mwBlinkingLines.h = this.lineH;
			
			var mwOverlayProperties = MW_properties.global.overlay;
			
			this.lines_Style_init(mwOverlayProperties); //might need to be exec more that once on start if different MW_overlay modes are used
			
			this.pause_init();
			this.locate_init();
			
			//scanningRects, union - here or? -taken care of in separate f() called before 'start scanning'
			
			var fullscreenButtons = MW_properties.global.fullscreenButtons;
			//^ add from ln 650 ..done.
			
			this.flash_init(fullscreenButtons, JavaScript_mediaDevices_API.flashToggler); //clickedFlash
			this.zoom_init(fullscreenButtons, JavaScript_mediaDevices_API.zoomLooper); //clickedZoom
			this.close_init(fullscreenButtons, JavaScript_mediaDevices_API.closeHandler); //clickedClose
			this.camera_init(fullscreenButtons, JavaScript_mediaDevices_API.cameraHandler); //clickedCamera
			
			let cameraSwitcherOptions = MW_properties.global.cameraSwitcherOptions;
			if (cameraSwitcherOptions & CONSTANTS.CAMERA_SWITCHER_INIT_ON_START == CONSTANTS.CAMERA_SWITCHER_INIT_ON_START) await this.cameraSwitcher_init();
			else this.cameraSwitcher_init();
			
			if (mwb_debug_print) console.log("in main_createPreview after (await) cameraSwitcher_init");
			
			this.already_inited = true;
		}
		
		//MAYBE TO-DO:
		//close button might be needed for iOS
		//obtain window.navigator.platform (and/or other properties)
		//event-listener-handle-rs for (close), pause, resume - maybe w/ flag
		
		
		this.disappearElements(true); //same as no MWOverlay
		this.addPreview(MW_properties.global.container);
		
		this.preparePreviewForPreviewType();
	}
};

//add-on to 2. APIs
var mwb_VDList;
var mwb_VDSelection = '';

//2. APIs: mesiaStream obj, zoom/flash capabilities settings, navigator.* , orientation/back events info, 
//	[anything else emscripten or nativeJS and/or Mozilla api HERE]
var JavaScript_mediaDevices_API = {
	//
	supported: false,
	browser_supported_constraints: null,
	runtime_settings_videoTrack: null,
	hardware_capabilities_ranges_videoTrack: null,
	
	_ImageCapture: (typeof ImageCapture === 'undefined') ? 'undefined' : ImageCapture,
	imageCapture: null,
	get_videoTrack_capabilities_timeout: 200,
	
	mediaStream: null,
	videoTrack: null,
	
	frameWidth: { min: 640, ideal: 1280, max: 1920 },
	frameHeight: { min: 480, ideal: 720, max: 1080 },
	
	frontCamera: false,
	
	constraints: {
		video: {
			width: null,//this.frameWidth,
			height: null,//this.frameHeight,
			frameRate: 30,
			facingMode: '',//(this.frontCamera) ? 'user' : 'environment',
			focusMode: 'continuous'
		}
	},
	
	constraints_init: function (width, height, useFrontCamera) {
		
		//this function can be called without args which will set the defaults
		if (typeof width === 'number') this.frameWidth.ideal = width;
		if (typeof height === 'number') this.frameHeight.ideal = height;
		if (typeof useFrontCamera === 'boolean') this.frontCamera = useFrontCamera;
		
		this.constraints.video.width = this.frameWidth;
		this.constraints.video.height = this.frameHeight;
		if (mwb_VDSelection === '')
		this.constraints.video.facingMode = (this.frontCamera) ? 'user' : 'environment';
		else
		this.constraints.video.deviceId = { exact: mwb_VDSelection };
		
		//maybe set to MW_properties here (and maybe keep caps object there)
		MW_properties.global.hardwareCameraResolution.width = this.frameWidth.ideal;
		MW_properties.global.hardwareCameraResolution.height = this.frameHeight.ideal;
		
		if (mwb_debug_print) {
			console.log('constraints:');
			console.log(this.constraints);
		}
	},
	
	flash: { supported: false, ready: false },
	zoom: { supported: false, ready: false },
	
	torchState: false,
	zoomLevels: [],
	zoomLevel: 0,
	
	imageCapture_options: {
		fillLightMode: (true/*this.torchState*/) ? 'flash' : 'off' //doesn't make a difference at this time | Tho is might with proper context? (and re-set)
		//focusMode: 'continuous'
	},
	
	flashToggler: function (use_toggle) {
		//because this is added as a handler to flash (DOM element) click
		//the context of this is different, i.e. the flash div
		let flash_state = JavaScript_mediaDevices_API.flash; //by ref
		let torchState = JavaScript_mediaDevices_API.torchState; //by value!
		let imageCapture = JavaScript_mediaDevices_API.imageCapture; //by ref
		let imageCapture_options = JavaScript_mediaDevices_API.imageCapture_options; //by ref
		let videoTrack = JavaScript_mediaDevices_API.videoTrack; //by ref
		
		if (mwb_debug_print && flash_state.supported) console.log('Torch is supported.');
		if (mwb_debug_print) console.log('the way it works is: lets find out');
		if (mwb_debug_print) console.log('the way it works is: ' + flash_state.supported + " and " + flash_state.ready);
		if (!flash_state.supported || !flash_state.ready) return;
		if (use_toggle) torchState = !torchState;
		if (mwb_debug_print) console.log('the way torch is: ' + torchState);
		
		try {
			//(re)setOptions is enough to turn the torch off	
			imageCapture.setOptions(imageCapture_options).then(() => {
				videoTrack.applyConstraints({
					advanced: [{torch: torchState}] //this set to true is a must to turn it on
					}); //but flash isn't turned off, only on LG
			});
		} catch (e) { if (mwb_debug_print) { console.log('imageCapture.setOptions is NOT supported'); console.log(e); }
		
			//instead try the one-way ON
			if (JavaScript_mediaDevices_API.browser_supported_constraints.torch) {
				videoTrack.applyConstraints({
					advanced: [{torch: torchState}]
				})
				.catch(e => console.log(e));
			}
		};
		
		Dynamic_DOM_Elements.flash.getElementsByTagName("img")[0].src = MW_properties.global.fullscreenButtons.flash_icons[Number(torchState)];
		JavaScript_mediaDevices_API.torchState = torchState;
	},
	
	zoomLooper: function ()
	{
		let zoom_state = JavaScript_mediaDevices_API.zoom; //by ref
		let zoomLevel = JavaScript_mediaDevices_API.zoomLevel; //by value!
		let zoomLevels = JavaScript_mediaDevices_API.zoomLevels; //by ref
		let videoTrack = JavaScript_mediaDevices_API.videoTrack; //by ref
		
		if (mwb_debug_print && zoom_state.supported) console.log('Zoom is supported.');
		
		if (!zoom_state.supported || !zoom_state.ready) return;
		zoomLevel++; zoomLevel %= 3;
		videoTrack.applyConstraints({ advanced: [{zoom: zoomLevels[zoomLevel]}] });
		
		if (mwb_debug_print) console.log('req zoomLevel: ' + zoomLevels[zoomLevel]);
		setTimeout(function(){
		if (mwb_debug_print) console.log('new zoomLevel: ' + videoTrack.getSettings().zoom);
		//Note5 and LG: [1, 2.45, 3.9], and then 1, 1, 1 on clicks but zooms fine, so it seems the report doesn't work, otherwise it's fine
		//HTC: [100, 245, 390], and then 100, 240, 390 might not report always correctly but thats just console/js lag (y), otherwise zooms fine
		}, 128);
		
		JavaScript_mediaDevices_API.zoomLevel = zoomLevel;
	},
	
	closeHandler: function ()
	{
		MWBScanner.destroyPreview();
	},
	
	cameraHandler: function ()
	{
		JavaScript_mediaDevices_API.activeCameraHandler();
		
		//show or hide list
		let displayState = Dynamic_DOM_Elements.cameraSwitcher_isVisible();
		
		if (displayState == false)
		{
			MW_methods.calcCameraSwitcherPos();
			Dynamic_DOM_Elements.cameraSwitcher.style.display = "initial";
		}
		else Dynamic_DOM_Elements.cameraSwitcher.style.display = "none";
		
		//cameraSwitcher_handler will handle things from there
	},
	
	activeCameraHandler: function ()
	{
		//match used camera with active camera on cameraSwitcher list
		if (typeof mwb_VDList != "undefined")
		{
			let cameraSwitcher = Dynamic_DOM_Elements.cameraSwitcher;
			let foundCameras = mwb_VDList.length;
			
			for (let i = 0; i < foundCameras; i++)
			{
				if (mwb_VDList[i].id == JavaScript_mediaDevices_API.runtime_settings_videoTrack.deviceId)
				cameraSwitcher.children[i].classList.add("cs-active"); //children[i] matches mwb_VDList[i]
				else
				cameraSwitcher.children[i].classList.remove("cs-active"); //children[i] matches mwb_VDList[i]
			}
		}
	},
	
	//simple error handling code; handleError() is called to handle promises which fail (.catch)
	handleError: function (reason) { 
		if (mwb_debug_print) console.log("Error " + reason.name + " in constraint " + reason.constraint + ": " + reason.message);
		
		//this before you return the callback
		MWBScanner.destroyPreview(false);
		
		if ((typeof MWBScanner.result_callback) == 'function')
		MWBScanner.result_callback(
			MW_methods.helpers.otherResult(
				MW_properties.runtime.errorDescriptions[reason.name].userFriendly, //code
				MW_properties.runtime.errorDescriptions[reason.name], //errorDescriptions
				"Error" //type
			)
		);
	},
	
	scanner_timeout: null,
	videoStreamData_handler_wrapper: null,
	
	init_values: function (video, videoStreamData_handler, inactiveStream_handler) {
		//
		MW_methods.helpers.CreateErrorDescriptions();
		//
		this.supported = (typeof navigator.mediaDevices === 'object' && typeof navigator.mediaDevices.getUserMedia === 'function') ? true : false;
		
		if (!this.supported) {
			if (location.protocol == "http:") JavaScript_mediaDevices_API.handleError({name: "ProtocolError"});
			return 'undefined';
		}
		
		this.browser_supported_constraints = navigator.mediaDevices.getSupportedConstraints();
		
		if (mwb_debug_print) {
			
			console.log('capabilities / browser_supported_constraints:');
			console.log(this.browser_supported_constraints); //might be needed for conditional code in different browsers
			//what if no camera for example?
		}
		
		//set objects to nested objects in constraints
		this.constraints_init();
		
		BarcodeScanner.MWBenableMirroredPreview(MW_properties.global.mirroredType, true);
		
		//you need capabilities.zoom.constructor.name MediaSettingsRange and .torch | if not there if will be 'undefined'
		navigator.mediaDevices.getUserMedia(this.constraints)
		.then(function (stream) {
			
			let this_root = JavaScript_mediaDevices_API; //different scope of this
			
			this_root.mediaStream = stream;
			stream.oninactive = function () {				
				if (typeof inactiveStream_handler === 'function') inactiveStream_handler();
			};			
			
			const track = stream.getVideoTracks()[0];
			this_root.videoTrack = track;
						
			this_root.runtime_settings_videoTrack = track.getSettings();
			
			if (mwb_debug_print) {
				
				console.log('VT capabilities / runtime_settings_videoTrack:');
				console.log(this_root.runtime_settings_videoTrack); //might be needed for conditional code in different browsers
			}
			
			//actual available camera resolution might be different from requested ideal
			if ((typeof this_root.runtime_settings_videoTrack.width === 'undefined') || (typeof this_root.runtime_settings_videoTrack.height === 'undefined'))
			{
				throw "Properties width and height in VT capabilities aren't available!";
			}
			else
			{
				if (mwb_debug_print) console.log('HERE WH ' + this_root.runtime_settings_videoTrack.width + " " + this_root.runtime_settings_videoTrack.height);
				MW_properties.global.hardwareCameraResolution.width = this_root.runtime_settings_videoTrack.width;
				MW_properties.global.hardwareCameraResolution.height = this_root.runtime_settings_videoTrack.height;
			}
			
			//cs-active
			this_root.activeCameraHandler();
			
			//videoTrack capabilities depends on ImageCapture promise or timeout
			function capabilitiesDependentCode() {
				//if (mwb_debug_print) console.log(track);
				
				let capabilities_Indicator = null;
				let ranges_exist = false;
				
				try {
					const videoCapabilities = track.getCapabilities(); //Firefox doesn't support this method
					capabilities_Indicator = this_root.hardware_capabilities_ranges_videoTrack = videoCapabilities;
					ranges_exist = true;
					
				} catch (e) { if (mwb_debug_print) { console.log('track.getCapabilities not supported'); console.log(e); }
					
					//use this.browser_supported_constraints instead
					capabilities_Indicator = this_root.browser_supported_constraints;
					//Firefox doesn't support torch and zoom anyways
				}
				
				if (capabilities_Indicator.torch) this_root.flash.supported = true;
				
				else { if (mwb_debug_print) console.log('Torch is NOT supported.'); Dynamic_DOM_Elements.flash.style.display = "none"; }
				
				if (capabilities_Indicator.zoom) this_root.zoom.supported = true;
				else { if (mwb_debug_print) console.log('Zoom is NOT supported.'); Dynamic_DOM_Elements.zoom.style.display = "none"; return; } //display of flash and zoom is also handled by revealElements
				
				if (ranges_exist)
				{
					const min = capabilities_Indicator.zoom.min;
					const max = capabilities_Indicator.zoom.max;
					const step = capabilities_Indicator.zoom.step;
					
					//ranges might use different scale on different devices
					const number_of_digits = MW_methods.helpers.get_number_of_Digits(max);
					
					const _max = max - Math.pow(10, (number_of_digits - 2)); //this substracts 1% from max (needed because values are stepped and max might be ignored like out-of-range value)
					const mid = min + ((_max - min) / 2);
					
					this_root.zoomLevels = [min, mid, _max]; //would this work?
					if (mwb_debug_print) console.log('this_root.zoomLevels');
					if (mwb_debug_print) console.log(this_root.zoomLevels);
					if (mwb_debug_print) console.log('step: ' + step);
				}
				else
					this_root.zoomLevels = [100, 250-8, 400-16]; //extrapolated defaults
				
				//this_root.zoomLevel = 0; //reset to 100% (no zoom)
				
				this_root.flash.ready = true; //test in ffox
				this_root.zoom.ready = true; //test in ffox

				//apply config-selected zoomLevel
				let zoom_state = JavaScript_mediaDevices_API.zoom; //by ref
				let zoomLevel = JavaScript_mediaDevices_API.zoomLevel; //by value!
				let zoomLevels = JavaScript_mediaDevices_API.zoomLevels; //by ref
				let videoTrack = JavaScript_mediaDevices_API.videoTrack; //by ref
				
				if (mwb_debug_print && zoom_state.supported) console.log('Zoom is supported.');
				
				if (!zoom_state.supported || !zoom_state.ready) return;
				videoTrack.applyConstraints({ advanced: [{zoom: zoomLevels[zoomLevel]}] });
			}
			
			if (JavaScript_mediaDevices_API._ImageCapture === 'undefined') //this_root or leave it be
			{
				if (mwb_debug_print) console.log('there is no ImageCapture api');
				setTimeout(function () {
					capabilitiesDependentCode();
				}, this_root.get_videoTrack_capabilities_timeout);
			}
			else
			{
				//Create image capture object and get camera capabilities
				const imageCapture = new JavaScript_mediaDevices_API._ImageCapture(track);
				this_root.imageCapture = imageCapture;
				const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {
					//
					//check if camera has a torch
					capabilitiesDependentCode();
					
					if (!JavaScript_mediaDevices_API.flash.supported) return; //test return - also this. scope?
					else JavaScript_mediaDevices_API.flash.ready = true;
				});
			}
			
			if (typeof videoStreamData_handler === 'function')
			{
				this_root.videoStreamData_handler_wrapper = function () { MW_methods.eventHandlers.loadeddata(); videoStreamData_handler(this_root.mediaStream); };
				video.addEventListener('loadeddata', this_root.videoStreamData_handler_wrapper);
			}
			
			video.srcObject = this_root.mediaStream;			
			video.onloadedmetadata = function (e) { //also make the proxy wrapper visible
			if (mwb_debug_print) console.log('onloadedmetadata, calling play'); //seems this event come later than
				
				if (mwb_debug_print) console.log('video muted: ');
				if (mwb_debug_print) console.log(this.muted);
				this.muted = true;
				if (mwb_debug_print) console.log(this.muted);
				if (mwb_debug_print) console.log('calling play again 1');
				this.play()
				.catch(function(e) {
					//JavaScript_mediaDevices_API.handleError(e); //scope
					
					//setTimeout(function() {
					//	Dynamic_DOM_Elements.disappearElements(true); //arg doesn't matter now
					//	//but revealElements is probs called which negates these effects, so
					//}, 32);
					//video.setAttribute('webkit-playsinline', 'webkit-playsinline');
					video.setAttribute('playsinline', 'playsinline');
					if (mwb_debug_print) console.log('calling play again 2');
					
					//doesn't work for Safari
					//setTimeout(function() {
					//	if (mwb_debug_print) console.log('calling play again 3');
					//	video.play();
					//}, 50);
					
					MW_methods.helpers.safari_video_click_workaround(video);
				});
				
				this_root.flashToggler(false);
				
				if (MWBScanner.decoder_timeout != 0)
				JavaScript_mediaDevices_API.scanner_timeout = setTimeout(async function () {
					
					//if (!MWBScanner.DECODER_ACTIVE) return; //we'll see
					
					MWBScanner.DECODER_ACTIVE = false;
					JavaScript_mediaDevices_API.scanner_timeout = null;
					
					const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
					await wait(100); //waiting for last frame to finish decoding, tho it really shouldn't matter, and can be handled in another way
					MWBScanner.destroyPreview(); //not truly awaitable at this point
					//await wait(1000);
					//await wait(1000);
					
					//no need for above arbitrary max wait, but at least 128 for destroyPreview to finalize and another 100 of leeway
					await wait(128);
					await wait(100);
				}, MWBScanner.decoder_timeout * 1000); //also link this with the setting minTimeout for frames and interval decoding //that should also be tied with fps from caps of this track | 10 *
			};
		})
		.catch(function(e) {
			JavaScript_mediaDevices_API.handleError(e); //scope
		});
	},
	
	//check if after putting the app in suspension still
	//works-uses the camera on mobile - android and rest
	//timeout would be nice
	
};

//3. SDK-related setting and features, partial view calculations, MWOverlay logic,
//	changes in DOM elements AND SDK-settings on C++ (scanRects), resize calculations,
//	event handlers, maybe back/close handling
const MW_assetsPath = "./assets/"; //added './' prefix for webpack
var MW_properties = {
	
	global: {
		partialView: //{ x: 0, y: 0, width: 100, height: 100, orientation: 0 }, //is orientation used here? -that only serves for that 'anchor' FEATURE
		{ x: 5, y: 5, width: 90, height: 54.73, orientation: 0 },
		//{ x: 25, y: 15, width: 50, height: 94.73/1.5, orientation: 0 },
		//{ x: 15, y: 15, width: 70/2, height: 94.73/2, orientation: 0 }
		//{ x: 20, y: 40, width: 64, height: 48, orientation: 0 }
		//it can be just ref, or specific props- but you'd still need to set them thru ref //1920 x 974 = 0.333 x 0.493 | 90, 54.73 | 33.33, 49.29
		blinkingLines: { v: null, h: null, visible: true }, //MWOverlay DOM elements ref //final
		overlay: { 
			mode: 1, 
			pauseMode: 2, //PM_PAUSE
			lineColor: "rgba(255, 0, 0, 1.0)", 
			locationColor: "rgba(0, 255, 0, 1.0)", 
			borderVisible: true, 
			borderWidth: 2, 
			linesWidth: 1, 
			blinkingRate: 500, 
			locationShowTime: 200 + 300, //Safari actually shows the frame with more time - actually no, even with 500ms the glitch after show happens in Landscape
			locationAllPointsDraw: true, 
			useLocationLayer: false, //use separate canvas layer for green location lines
			imageSrc: MW_assetsPath + "overlay_mw.png" 
		}, //partial const
		fullscreenButtons: {
			flash: null,	   
			zoom: null,
			close: null,
			camera: null,
			flash_icons: [MW_assetsPath + "flashbuttonoff.png", MW_assetsPath + "flashbuttonon.png"],
			zoom_icons:  [MW_assetsPath + "zoom.png"],
			close_icons:  [MW_assetsPath + "closebutton.png"],
			camera_icons: [MW_assetsPath + "camerabutton.png"],
			hideFlash: false,
			hideZoom: false,
			enableClose_setting: false, //i.e. PreviewOptions.SHOW_CLOSE_BUTTON
			hideClose: true,
			hideCamera: true
		}, //partial const
		hideDuringUpdate: false, //(mostly) const
		hardwareCameraResolution: { width: 1280, height: 720 }, //ini
		//hardwareCameraResolution: { width: 640, height: 480 },
		cameraSwitcherOptions: 0x0,
		numberOfSupporedCodes: 16, //const
		codeMasksArray: [], //const-final
		untouchedScanningRectsArray: [], //const-final
		//DOM_complete: false, //needed?
		//anyScannerStarted: false, //needed?
		video: null, //final
		container: document.getElementById("cmbweb-preview-container"), //final, null if not found
		previewType: 'dynamic', //'container' or 'dynamic'
		mirroredType: 0, //not mirrored
		has_mirror_css: false,
		returnCapturedFrame: false
	},
	
	runtime: {
		viewfinderOnScreenView: { orientation: 0, x: 0, y: 0, width: 0, height: 0 }, //only one that needs to be updated during orientation change
		untouchedScanningRectsUnion: { x: 0, y: 0, width: 100, height: 100 }, //get THIS / init from SDK
		is_portrait: false,
		operatingSystem: '', //final
		firstTimeUpdate: false,
		currentOrientation: 0, //landscape, portrait, landscapeFlipped
		errorDescriptions: {}
	},
	
	//note: initial_value for all settings are api configurable
	//also, runtime_value is set from initial_value and then gets changed
	//adapters should change gui states and also adapt gui values to expected method
	//values and vice-versa
	//requires type of control n data (int/[int]/bool/[bool], arr w/ len) value
	//n data type of method/arg, i.e. always [arg]
	
	gui2api_adapter: function () {
		//
		//all it does is convert one data type to another adequate one
		//can use the *.gui_*.cam*.*_value and their typeof to determine what 2 what
		//also can hold there gui_values and api_value(S), as in
		//copy the ones you use to init the gui s with generate
		
		//FIRST OF ALL CHANGE THE SCRIPTS TO POINT TO wa_dev		//done
		//same for bookmarks on phones 		THIS needs doing
		//in fact, do it now ..done
	},
	
	gui_accessible: {
		//
		cameraResolution: {
			values: [[640, 480], [1280, 720], [1920, 1080]],
			default_value: true, //gui toggle state i.e. 720
			initial_value: true,
			runtime_value: true
		},
		
		frontCamera: {
			values: [false, true],
			default_value: false,
			initial_value: false,
			runtime_value: false
		},
		
		multipleBarcodes: {
			values: [false, true],
			default_value: false,
			initial_value: false,
			runtime_value: false
		},
		
		activeCode: {
			values: null, //2^i
			default_value: 1, //Select barcode: on 0
			initial_value: 1,
			runtime_value: 1
		},
		
		activeCodes: {
			values: null, //binary OR union of 2^i
			default_value: [true, true, false, false, true, true, true, false, false, false, false, false, false, false, false, false],
			//115 //contains QR | DM | EAN/UPC | CODE128 | PDF
			initial_value: [true, true, false, false, true, true, true, false, false, false, false, false, false, false, false, false],
			runtime_value: [true, true, false, false, true, true, true, false, false, false, false, false, false, false, false, false]
		},
		
		effortLevel: {
			values: [1, 2], //not actually used (bool to number + 1 logic applied)
			default_value: true, //gui toggle => 2
			initial_value: 2, //needs adapter | 2-5 mapped to toggle on
			runtime_value: 2
			//gui2api
			//api2gui adapter
			//changes when/on:
		},
		
		partialView: { // !fullScreen
			values: [false, true],
			default_value: true,
			initial_value: true,
			runtime_value: true
		},
		
		partialView_XYWH: {
			values: null, //0-100 for each
			default_value: [5, 5, 90, 50],
			initial_value: [5, 5, 90, 50],
			runtime_value: [5, 5, 90, 50]
		},
		
		partialView_Anchor: {
			values: null, //0-3
			default_value: 1 //selects must have 0 reserved | select_AnchorView_handler does -= 1
			
			//NO NEED?
		},
		
		continuous: {
			values: [false, true],
			default_value: false,
			initial_value: false,
			runtime_value: false
		},
		
		parser: {
			values: [0x0, 0xFF], //again, not actually used (same values used tho)
			default_value: true, //gui toggle state i.e. 0xFF
			initial_value: true,
			runtime_value: true
		},
		
		timeout: {
			values: null, //10-60
			default_value: [30],
			initial_value: [30],
			runtime_value: [30]
		},
		
		dps: {
			values: null, //1-30 (fps max)
			default_value: [2], //20
			initial_value: [2],
			runtime_value: [2]
		},		
		
		pause: {
			values: [false, true],
			default_value: false,
			initial_value: false,
			runtime_value: false
		}		
	}
};

var MW_methods = {
	
	/**
	 * Processes preview behaviour.
	 * FEATURE: can transform based on anchor_to
	 * Generic method.
	 */
	anchorView_toOrientation: function (view, x1, y1, w1, h1, anchor_to, current_orientation) {

		if (anchor_to < 0 || anchor_to > 3 || current_orientation < 0 || current_orientation > 2) return;

		if (anchor_to == 0) //anchor_free: percentages are applied "as is" | behaviour: preview transforms dynamically for different orientations
		{
			//view.style.cssText = "left: " + x1 + "%; top: " + y1 + "%; width: " + w1 + "%; height: " + h1 + "%;";
			view.style.left 	= "" + x1 + "%";
			view.style.top 		= "" + y1 + "%";
			view.style.width 	= "" + w1 + "%";
			view.style.height 	= "" + h1 + "%";
		}
		else //anchor_to_orientation: percentages are applied wrt. orientation | behaviour: preview stays fixed/immutable wrt. orientation
		{
			//[anchor_to] x [current_orientation]
			var anchoringProperties = [
				//landscape                                 portrait                                landscape flipped
				[{ x: x1, y: y1, width: w1, height: h1 }, { x: (100 - y1 - h1), y: x1, width: h1, height: w1 }, { x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }], // landscape
				[{ x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }, { x: (100 - y1 - h1), y: (100 - x1 - w1), width: h1, height: w1 }], // portrait
				[{ x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }, { x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }]  // landscape flipped
			];
			anchor_to--;
			
			view.style.left 	= "" + anchoringProperties[anchor_to][current_orientation].x + "%";
			view.style.top 		= "" + anchoringProperties[anchor_to][current_orientation].y + "%";
			view.style.width 	= "" + anchoringProperties[anchor_to][current_orientation].width + "%";
			view.style.height 	= "" + anchoringProperties[anchor_to][current_orientation].height + "%";
		}
	},
	
	/**
	 * Transforms the viewfinder to reflect scanning area in decoder.
	 */
	rotateAny_toOrientation: function (scanningRect1, to_orientation) {
		
		if (to_orientation < 0 || to_orientation > 2) return;

		var x1 = scanningRect1.x;
		var y1 = scanningRect1.y;
		var w1 = scanningRect1.width;
		var h1 = scanningRect1.height;

		var from_orientation = MW_properties.runtime.viewfinderOnScreenView.orientation; //it was always from landscape (decoder) until now
		
		//[to_orientation] x [from_orientation] //transpose it if you want [from][to]
		/*var orientationRotation = [
			//landscape                                 portrait                                landscape flipped
			[{ x: x1, y: y1, width: w1, height: h1 }, { x: (100 - y1 - h1), y: x1, width: h1, height: w1 }, { x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }], //landscape
			[{ x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }, { x: (100 - y1 - h1), y: (100 - x1 - w1), width: h1, height: w1 }], //portrait
			[{ x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }, { x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }]  //landscape flipped
		];*/

		var orientationRotationT = [
			//landscape                                 portrait                                landscape flipped
			[{ x: x1, y: y1, width: w1, height: h1 }, { x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }], //landscape
			[{ x: (100 - y1 - h1), y: x1, width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }, { x: y1, y: (100 - x1 - w1), width: h1, height: w1 }], //portrait
			[{ x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }, { x: (100 - y1 - h1), y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }]  //landscape flipped
		];

		return orientationRotationT[from_orientation][to_orientation];
	},

	/**
	 * Transforms the viewfinder to reflect scanning area in decoder 2.
	 */
	scaleFull_toPartial: function (scanningRect1, partialScale, scaleHeight) {
		
		if (partialScale < 0.01 || partialScale > 1.0 || scaleHeight < 0 || scaleHeight > 1) return;

		var x1 = scanningRect1.x;
		var y1 = scanningRect1.y;
		var w1 = scanningRect1.width;
		var h1 = scanningRect1.height;

		var cropScaleP = (1 - partialScale) * 100; //on [0,100) scale
		//[scaleDirection]
		var scale_and_center = [
			//scale down and translate to justified position
			{ x: ((cropScaleP / 2) + (x1 * partialScale)), y: y1, width: (w1 * partialScale), height: h1 }, //scaleWidth
			{ x: x1, y: ((cropScaleP / 2) + (y1 * partialScale)), width: w1, height: (h1 * partialScale) }  //scaleHeight
		];

		return scale_and_center[scaleHeight];
	},
	
	//^ these look nice
	
	/**
	 * Calculates the scanningRects for all codes and sets them in the SDK.
	 */
	calcScanningRect: function (is_portrait, _isDivArHigher, _croppedCameraAreaScale, numberOfSupporedCodes, untouchedScanningRectsArray, viewfinderOnScreenView)
	{
		if (mwb_debug_print) console.log('calcScanningRect(' + is_portrait + ' ' + _isDivArHigher + ' ' + _croppedCameraAreaScale + ') ');

		var viewfinderAreaScale = (1 - _croppedCameraAreaScale);
		
		var widthIndex = 0;
		var heightIndex = 1;
		
		//since w3/mozilla were considerate enough to design an API that results in getting each
		//frame exaclty in the orientation its preview-ed in (unlike landscape only)
		//that messes with the calcs in scaleFull_toPartial, so this small but crucial extra step is needed:
		if (is_portrait)
		{
			widthIndex = 1;
			heightIndex = 0;
		}
		
		var codeMasksArray = MW_properties.global.codeMasksArray; //global (not arg) access like the rest
			//if (mwb_debug_print) console.log('masks');
			//if (mwb_debug_print) console.log(codeMasksArray);
		
		// determine if cutting is done by width or height
		if ((!is_portrait && _isDivArHigher) || (is_portrait && !_isDivArHigher))
		{
			// it's done by height, rare                
			var codeMask, 
				scanningRectTM;

			var i = 0;
			for (; i < numberOfSupporedCodes; i++) {
				// copy needed primitive types BY VALUE | these functions create new structures and assign primitive types by value | no ref here
				scanningRectTM = this.rotateAny_toOrientation(untouchedScanningRectsArray[i], viewfinderOnScreenView.orientation);
				scanningRectTM = this.scaleFull_toPartial(scanningRectTM, viewfinderAreaScale, heightIndex);
				
				//OK, so here, finish with this and the MAIN FLOW of execution, and then see what happens with
				//scanRects vs. the simplest way do to what you need with C++
				
				// set in decoder
				codeMask = codeMasksArray[i];
				//if (mwb_debug_print) console.log(scanningRectTM);
				//HERE - commented out the call to set for test purposes
				BarcodeScanner.MWBsetScanningRect(codeMask, scanningRectTM.x, scanningRectTM.y, scanningRectTM.width, scanningRectTM.height);
			}
		}
		else
		{
			// it's by width, most common
			var codeMask,
				scanningRectTM;

			var i = 0;
			for (; i < numberOfSupporedCodes; i++) {
				
				// copy needed primitive types BY VALUE | these functions create new structures and assign primitive types by value | no ref here
				scanningRectTM = this.rotateAny_toOrientation(untouchedScanningRectsArray[i], viewfinderOnScreenView.orientation);
				scanningRectTM = this.scaleFull_toPartial(scanningRectTM, viewfinderAreaScale, widthIndex);
				
				//HERE undefined .x => because DOM lags, previewFrame is 0, so viewfinderAreaScale is 0, and
				//scaleFull_toPartial checks 0.01 - 1, and just returns, which is undefined for scanningRectTM
				//sol: place resize in setTimeout(0) ?

				// set in decoder
				codeMask = codeMasksArray[i];
				//if (mwb_debug_print) console.log(scanningRectTM);
				//HERE - commented out the call to set for test purposes
				BarcodeScanner.MWBsetScanningRect(codeMask, scanningRectTM.x, scanningRectTM.y, scanningRectTM.width, scanningRectTM.height);
			}
		}
		
		if (true && mwb_debug_print) {
			//get viewfinder			
			var viewfnderUnionRect = BarcodeScanner.MWBgetScanningRect(0); //wait, shouldn't there be an actual call (not just once on start) for changes for this function?
			//cuz this is debug, and optional - not code dependent
			//either missed something when re-using, or no need cuz SR% are wrt. MW_overlay on screen
			//hmmm..
			
			//anyways, lets try without this part-block
			//if (mwb_debug_print) console.log('praame li nesto');
			//if (mwb_debug_print) console.log(viewfnderUnionRect);
			viewfnderUnionRect = JSON.parse(viewfnderUnionRect);
			if (mwb_debug_print) console.log('viewfinderUnion after TM ' + viewfnderUnionRect.x + ' ' + viewfnderUnionRect.y + ' ' + viewfnderUnionRect.width + ' ' + viewfnderUnionRect.height + ' ');
		}
	},
	
	/**
	 * Calculates overlay coordinates for canvas and calls calcScanningRect.
	 */
	calcPreview: function (is_portrait, hardwareCameraResolution, preview, MW_properties, Dynamic_DOM_Elements) {
		
		//obtain args
		var numberOfSupporedCodes = MW_properties.global.numberOfSupporedCodes;
		var untouchedScanningRectsArray = MW_properties.global.untouchedScanningRectsArray;
		var viewfinderOnScreenView = MW_properties.runtime.viewfinderOnScreenView;
		var previewFrame = Dynamic_DOM_Elements.previewFrame;
		
		if (mwb_debug_print) console.log('calcPreview(' + is_portrait + ') ');
		
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		var window_AR = windowWidth / windowHeight;
		var rootDivInviewTop = previewFrame.offsetTop; //or just get it through _DOM ? //document.getElementById("root-div-inview")
		var rootDivInviewLeft = previewFrame.offsetLeft;
		var rootDivInviewWidth = previewFrame.offsetWidth;
		var rootDivInviewHeigth = previewFrame.offsetHeight;
		var rootDivInview_AR = rootDivInviewWidth / rootDivInviewHeigth;
		
		var cameraWidth = hardwareCameraResolution.width;
		var cameraHeight = hardwareCameraResolution.height;
		var camera_AR = cameraWidth / cameraHeight;
		//if (mwb_debug_print) console.log('explorer reporting');
		//if (mwb_debug_print) console.log(cameraWidth + ", " + cameraHeight);
		//if (mwb_debug_print) console.log(camera_AR);
		//DOM elements weren't fully rendered (previewFRame has size of 0)
		//altough it seems (After moving this code after video load) it works just fine, both on firefox and chrome
		
		if (is_portrait) {
			cameraWidth = hardwareCameraResolution.height;
			cameraHeight = hardwareCameraResolution.width;
			camera_AR = cameraWidth / cameraHeight;
			//if (mwb_debug_print) console.log('is_port');
			//if (mwb_debug_print) console.log(cameraWidth + ", " + cameraHeight);
			//if (mwb_debug_print) console.log(camera_AR);
		}
		//if (mwb_debug_print) console.log(JavaScript_mediaDevices_API.runtime_settings_videoTrack.width);
		//if (mwb_debug_print) console.log(JavaScript_mediaDevices_API.runtime_settings_videoTrack.height);
		
		if (mwb_debug_print) console.log("in calcPreview, { "+ rootDivInview_AR +" <> "+ camera_AR +" }" + " { "+ rootDivInviewWidth +" <> "+ rootDivInviewHeigth +" }");

		if (rootDivInview_AR == camera_AR) return;
		else
			if (rootDivInview_AR > camera_AR)
			{
				// fill div by width, most likely portrait
				var scalingFactor = rootDivInviewWidth / cameraWidth;
				var new_cameraHeight = cameraHeight * scalingFactor;
				var croppedCameraArea = new_cameraHeight - rootDivInviewHeigth;
				
				// get percentages:
				var croppedCameraAreaScale = croppedCameraArea / new_cameraHeight;
				var translatedCameraTopP = -(croppedCameraAreaScale / 2) * 100;
				
				preview.style.cssText = "position: absolute; margin: auto; top: 0; bottom: 0; width: 100%; height: auto;";
				
				this.calcScanningRect(is_portrait, true, croppedCameraAreaScale, numberOfSupporedCodes, untouchedScanningRectsArray, viewfinderOnScreenView);
			}
			else
				if (rootDivInview_AR < camera_AR) // default remaining
				{
					//fill div by height
					var scalingFactor = rootDivInviewHeigth / cameraHeight;
					var new_cameraWidth = cameraWidth * scalingFactor;
					var croppedCameraArea = new_cameraWidth - rootDivInviewWidth;

					// get percentages
					var croppedCameraAreaScale = croppedCameraArea / new_cameraWidth;
					var translateCameraLeftP = -(croppedCameraAreaScale / 2) * 100;

					var croppedinDivAreaScale = croppedCameraArea / rootDivInviewWidth;
					var translateinDivLeftP = -(croppedinDivAreaScale / 2) * 100;
					translateinDivLeftP += 0;
					
					preview.style.cssText = "position: absolute; margin-left: " + translateinDivLeftP + "%; width: auto; height: 100%;";
					
					this.calcScanningRect(is_portrait, false, croppedCameraAreaScale, numberOfSupporedCodes, untouchedScanningRectsArray, viewfinderOnScreenView);
				}
	},
	
	/**
	 * Draws overlay lines inside the canvasOverlay area.
	 * @param  {object} lines	canvases for overlay blinking lines
	 * @param  {float} x1		canvasOverlay Left
	 * @param  {float} y1		canvasOverlay Top
	 * @param  {float} w1		canvasOverlay Width
	 * @param  {float} h1		canvasOverlay Left
	 * @param  {float} lineThickness CanvasBlinkingLine lineThickness
	 */
	drawOverlayLines: function (lines, x1, y1, w1, h1, lineThickness) {

		var startLeft = x1;
		var startTop = y1;
		lines.v.style.left = lines.h.style.left = (startLeft - 0) + "px";
		lines.v.style.top = lines.h.style.top = (startTop - 0) + "px";

		lines.v.width = lines.h.width = w1;
		lines.v.height = lines.h.height = h1;
		
		
		lines.v.width = lineThickness;
		lines.v.style.left = (startLeft + (w1 / 2) - (lines.v.width / 2) - 0) + "px";

		lines.h.height = lineThickness;
		lines.h.style.top = (startTop + (h1 / 2) - (lines.h.height / 2) - 0) + "px";
		
		// NOTE: at the time this is called the canvas lines have already been added to the html document and the animation has been started and can't be changed at this point
		// SOLUTION: execute these instructions in createPreview before canvas lines are added (because resize and subsequently this function is called after)
		//canvasBlinkingLineV.style.backgroundColor = canvasBlinkingLineH.style.backgroundColor = mwOverlayProperties.lineColor;
		//canvasBlinkingLineV.style.animation = canvasBlinkingLineH.style.animation = "fadeColor " + mwOverlayProperties.blinkingRate + "ms infinite";
	},
	
	/**
	 * Stops or restarts blinking lines in overlay for PM_STOP_BLINKING depending on pause state
	 */
	toggleBlinkingLines: function () {
		//use this code and set anim to 0 (this resets lines to full stroke)
		var this_root = Dynamic_DOM_Elements;
		var anim_state = (MWBScanner.PAUSE_DECODING) ? 0 : MW_properties.global.overlay.blinkingRate;
		
		this_root.lineV.style.animation = this_root.lineH.style.animation = "fadeColor " + anim_state + "ms infinite";
		
	},
	
	/**
	 * Update overlay elements accordingly
	 */
	handleOverlayModes: function () {
		
		var canvasOverlay = Dynamic_DOM_Elements.overlay;
		var lines = MW_properties.global.blinkingLines;
		var mwOverlayProperties = MW_properties.global.overlay;
		var viewfinderOnScreenView = MW_properties.runtime.viewfinderOnScreenView;
		
		var ctx = canvasOverlay.getContext("2d");
		
		if (mwOverlayProperties.mode == 0) {
			
			lines.v.style.visibility = "hidden";
			lines.h.style.visibility = "hidden";
			
			ctx.clearRect(0, 0, canvasOverlay.width, canvasOverlay.height);
		}
		else if (mwOverlayProperties.mode == 1)
		{
			// draw fullcanvas shadow and clear the viewfinder area
			ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
			ctx.fillRect(0, 0, canvasOverlay.width, canvasOverlay.height);
			ctx.clearRect(viewfinderOnScreenView.x, viewfinderOnScreenView.y, viewfinderOnScreenView.width, viewfinderOnScreenView.height);

			if (mwOverlayProperties.borderVisible)
			{
				// draw red viewfinder border
				ctx.lineWidth = mwOverlayProperties.borderWidth;
				ctx.strokeStyle = mwOverlayProperties.lineColor;
				ctx.strokeRect(viewfinderOnScreenView.x, viewfinderOnScreenView.y, viewfinderOnScreenView.width, viewfinderOnScreenView.height);
			}
			
			// draw red lines
			this.drawOverlayLines(
			lines,
			canvasOverlay.offsetLeft + viewfinderOnScreenView.x,
			canvasOverlay.offsetTop + viewfinderOnScreenView.y,
			viewfinderOnScreenView.width,
			viewfinderOnScreenView.height,
			mwOverlayProperties.linesWidth);
			
			//show lines if visible is set
			lines.v.style.visibility = (lines.visible) ? "visible" : "hidden";
			lines.h.style.visibility = (lines.visible) ? "visible" : "hidden";
			
			// draw pause rects or stop blinking lines
			if (mwOverlayProperties.pauseMode == 2) //PM_STOP_BLINKING
			this.toggleBlinkingLines();
			else if (mwOverlayProperties.pauseMode == 1) //PM_PAUSE
			this.drawPauseRects();
		}
		else if (mwOverlayProperties.mode == 2)
		{
			lines.v.style.visibility = "hidden";
			lines.h.style.visibility = "hidden";
			
			ctx.clearRect(0, 0, canvasOverlay.width, canvasOverlay.height);
			// if mwOverlay mode is set to image hide lines | place in createPreview
            //if (mwOverlayProperties.mode == 2) {
            //    mwBlinkingLines.v.style.visibility = "hidden";
            //    mwBlinkingLines.h.style.visibility = "hidden";
            //}
			
			//if (document.getElementById("canvas-line-v") != null) document.getElementById("canvas-line-v").style.visibility = "hidden"; // handled in createPreview
			//if (document.getElementById("canvas-line-h") != null) document.getElementById("canvas-line-h").style.visibility = "hidden";

			var imageOverlay = document.createElement("img");
			imageOverlay.src = mwOverlayProperties.imageSrc;

			imageOverlay.onload = function () {
				ctx.drawImage(imageOverlay, 0, 0, imageOverlay.width, imageOverlay.height,      // source rectangle
											0, 0, canvasOverlay.width, canvasOverlay.height);   // destination rectangle
			}
		}
	},
	
	/**
	 * Draws overlay pause rectangles inside the canvasOverlay area for PM_PAUSE
	 * and alternates display with overlay lines
	 */
	drawPauseRects: function () {
		//first 'disapper' lines
		var this_root = Dynamic_DOM_Elements;
		
		if(MWBScanner.PAUSE_DECODING)
		{
			this_root.lineV.style.display = "none";
			this_root.lineH.style.display = "none";
		}
		else
		{
			//if resumed re-enable lines
			this_root.lineV.style.display = "initial";
			this_root.lineH.style.display = "initial";
		}
		
		//then draw pause lines on canvas
		let pauseOverlay = Dynamic_DOM_Elements.pause;
		let previewFrame = Dynamic_DOM_Elements.previewFrame;
		
		//set pause canvas over preview i.e. copy overlay pos and size to pause overlay
		Dynamic_DOM_Elements.setTop_forPreviewTypeElements(pauseOverlay);
		pauseOverlay.style.left = previewFrame.style.left;
		pauseOverlay.width = previewFrame.offsetWidth;
		pauseOverlay.height = previewFrame.offsetHeight;
		
		var ctx = pauseOverlay.getContext("2d");
		
		let mwOverlayProperties = MW_properties.global.overlay;
		
		//calculate position and size for pause rectangles
		let r1 = {x:0, y: 0, w: 0, h: 0};
		let r2 = {x:0, y: 0, w: 0, h: 0};
		
		let aspectRatio = pauseOverlay.width / pauseOverlay.height;
		
		let AR_dynamic_props = [
			//x-axis percentages 42-5-6-5-42 (ok for AR 0.6)
			{rh: 20, rw: 5, r1x: 42, r2x: 53},
			//x-axis percentages 43-4-6-4-43 (ok for AR 1.6)
			{rh: 25, rw: 4, r1x: 43, r2x: 53},
			//x-axis percentages 45-3-4-3-45 (ok for AR 3.6)
			{rh: 30, rw: 3, r1x: 45, r2x: 52}
		];
		
		let AR_group = 1;
		if (aspectRatio < 1.0) AR_group = 0;
		if (aspectRatio > 2.2) AR_group = 2;
		
		let best_props = AR_dynamic_props[AR_group];
		
		r1.y = r2.y = (pauseOverlay.height / 100) * ((100 - best_props.rh) / 2);
		r1.h = r2.h = (pauseOverlay.height / 100) * best_props.rh;
		
		r1.w = r2.w = (pauseOverlay.width / 100) * best_props.rw;
		
		//x-axis percentages 43-4-6-4-43 (ok for AR 1.6)
		r1.x = (pauseOverlay.width / 100) * best_props.r1x;
		r2.x = (pauseOverlay.width / 100) * best_props.r2x;
		
		
		ctx.lineWidth = mwOverlayProperties.borderWidth * 1;
		ctx.fillStyle = mwOverlayProperties.lineColor;
		
		if(MWBScanner.PAUSE_DECODING)
		{
			ctx.fillRect(r1.x, r1.y, r1.w, r1.h);
			ctx.fillRect(r2.x, r2.y, r2.w, r2.h);
		}
		else
		{
			//if resumed remove pause rectangles
			ctx.clearRect(r1.x-1, r1.y-1, r1.w+2, r1.h+2);
			ctx.clearRect(r2.x-1, r2.y-1, r2.w+2, r2.h+2);
		}
	},
	
	calcCameraSwitcherPos: async function () {
		
		let previewFrame = Dynamic_DOM_Elements.previewFrame;
		let cameraSwitcher = Dynamic_DOM_Elements.cameraSwitcher;
		
		//set camera switcher over preview
		cameraSwitcher.style.top = previewFrame.style.top;
		cameraSwitcher.style.left = previewFrame.style.left;
		//cameraSwitcher.width = previewFrame.offsetWidth;
		//cameraSwitcher.height = previewFrame.offsetHeight;
		
		//needs to be visible to have size
		let cs_displayState = cameraSwitcher.style.display;
		cameraSwitcher.style.visibility = "hidden";
		cameraSwitcher.style.display = "initial";
		
		let aspectRatio = previewFrame.width / previewFrame.height;
		
		let AR_dynamic_props = [
			//cam_list_port percentages (ok for AR 0.6)
			{x: 10, y: 20, w: 80, h: 60},
			//cam_list_norm percentages (ok for AR 1.6)
			{x: 10, y: 10, w: 80, h: 80},
			//cam_list_land percentages (ok for AR 3.6)
			{x: 20, y: 10, w: 60, h: 80}
		];

		let AR_group = 1;
		if (aspectRatio < 1.0) AR_group = 0;
		if (aspectRatio > 2.2) AR_group = 2;

		let best_props = AR_dynamic_props[AR_group];
		
		cameraSwitcher.style.top = previewFrame.offsetTop + ((previewFrame.offsetHeight * best_props.y) / 100.0) + "px";
		cameraSwitcher.style.left = previewFrame.offsetLeft + ((previewFrame.offsetWidth * best_props.x) / 100.0) + "px";
		
		//adjust font size and padding
		let width_percentage = cameraSwitcher.offsetWidth / previewFrame.offsetWidth;
		let height_percentage = cameraSwitcher.offsetHeight / previewFrame.offsetHeight;
		
		if (mwb_debug_print)
		{
			console.log('width and height percentages');
			console.log(width_percentage);
			console.log(height_percentage);
		}
		
		function adjustFontSize() {
			let fontSizes = ["1.125em", "0.75em"];
			let paddings = ["10px", "5px"];
			if (typeof width_percentage == 'number'  && (!isNaN(width_percentage)) && (!isNaN(aspectRatio)))
			{
				let item_count = cameraSwitcher.children.length;
				let fontSize = (width_percentage > 0.9) ? fontSizes[1] : fontSizes[0];
				let padding = (width_percentage > 0.9) ? paddings[1] : paddings[0];
				
				for (let i = 0; i < item_count; i++)
				{
					let item_i = cameraSwitcher.children[i];
					item_i.style.fontSize = fontSize;
					item_i.style.padding = padding;
				}
			}
		}
		adjustFontSize();
		
		//calc centering values
		let topOffset_fromPreview = (previewFrame.offsetHeight - cameraSwitcher.offsetHeight) / 2;
		let leftOffset_fromPreview = (previewFrame.offsetWidth - cameraSwitcher.offsetWidth) / 2;
		
		if (mwb_debug_print)
		{
			console.log(previewFrame.offsetHeight + " - " + cameraSwitcher.offsetHeight);
			console.log(previewFrame.offsetWidth + " - " + cameraSwitcher.offsetWidth);
			
			console.log(previewFrame.offsetTop + " + " + topOffset_fromPreview);
			console.log(previewFrame.offsetLeft + " + " + leftOffset_fromPreview);
		}
		
		cameraSwitcher.style.top = previewFrame.offsetTop + topOffset_fromPreview + "px";
		cameraSwitcher.style.left = previewFrame.offsetLeft + leftOffset_fromPreview + "px";
		
		//restore state as before
		cameraSwitcher.style.visibility = ""; //"visible";
		cameraSwitcher.style.display = cs_displayState;
	},
	
	/**
	 * Resizes the canvas to fill browser window dynamically.
	 */
	resizeCanvas: function (MW_properties, Dynamic_DOM_Elements) {
		
		//obtain args
		var viewfinderUnionRect = MW_properties.runtime.untouchedScanningRectsUnion; // get viewfinder (landscape)
		//var viewfinderUnionRect = JSON.parse(BarcodeScanner.MWBgetScanningRect(0));
		
		//var untouchedScanningRectsUnion = MW_properties.runtime.untouchedScanningRectsUnion;
		//untouchedScanningRectsUnion.x = viewfinderUnionRect.x;
		//untouchedScanningRectsUnion.y = viewfinderUnionRect.y;
		//untouchedScanningRectsUnion.width = viewfinderUnionRect.width;
		//untouchedScanningRectsUnion.height = viewfinderUnionRect.height;
		//^THIS is supposed to NOT be touched!
		
		var previewFrame = Dynamic_DOM_Elements.previewFrame;
		var canvasOverlay = Dynamic_DOM_Elements.overlay;
		let locateOverlay = Dynamic_DOM_Elements.locate;
		var lines = MW_properties.global.blinkingLines;
		var flash = Dynamic_DOM_Elements.flash;
		var zoom = Dynamic_DOM_Elements.zoom;
		var close = Dynamic_DOM_Elements.close;
		var camera = Dynamic_DOM_Elements.camera;
		let cameraSwitcher = Dynamic_DOM_Elements.cameraSwitcher;
		var mwOverlayProperties = MW_properties.global.overlay;
		var viewfinderOnScreenView = MW_properties.runtime.viewfinderOnScreenView;
		
		if (mwb_debug_print) console.log('resizeCanvas ');

		// set canvas over preview
		Dynamic_DOM_Elements.setTop_forPreviewTypeElements(canvasOverlay);
		canvasOverlay.style.left = previewFrame.style.left;
		canvasOverlay.width = previewFrame.offsetWidth; // capturePreviewFrame is a <div> element so it doesn't have width and height properties
		canvasOverlay.height = previewFrame.offsetHeight;
		
		// set locate canvas over preview i.e. copy overlay pos and size to locate overlay
		Dynamic_DOM_Elements.setTop_forPreviewTypeElements(locateOverlay);
		locateOverlay.style.left = previewFrame.style.left;
		locateOverlay.width = previewFrame.offsetWidth;
		locateOverlay.height = previewFrame.offsetHeight;
		
		// and clear it
		let ctx_locate = locateOverlay.getContext("2d");
		ctx_locate.clearRect(0, 0, locateOverlay.width, locateOverlay.height);
		
		// linking image buttons to position
		flash.style.top = (canvasOverlay.offsetTop + 2) + "px";
		flash.style.left = canvasOverlay.offsetLeft + "px";
		zoom.style.top = (canvasOverlay.offsetTop + 2) + "px";
		zoom.style.left = ((canvasOverlay.offsetWidth + canvasOverlay.offsetLeft) - zoom.offsetWidth) + "px";
		
		close.style.top = ((canvasOverlay.offsetTop + canvasOverlay.height) - ((close.offsetHeight * 2) + 2)) + "px";
		close.style.left = ((canvasOverlay.offsetWidth + canvasOverlay.offsetLeft) - (close.offsetWidth * 2)) + "px";
		
		camera.style.top = ((canvasOverlay.offsetTop + canvasOverlay.height) - ((camera.offsetHeight * 1) + 2)) + "px";
		camera.style.left = (canvasOverlay.offsetLeft + 8) + "px";
		
		this.calcCameraSwitcherPos();

		// set viewfinder in pixels
		viewfinderOnScreenView.x = canvasOverlay.width * (viewfinderUnionRect.x / 100);
		viewfinderOnScreenView.y = canvasOverlay.height * (viewfinderUnionRect.y / 100);
		viewfinderOnScreenView.width = canvasOverlay.width * (viewfinderUnionRect.width / 100);
		viewfinderOnScreenView.height = canvasOverlay.height * (viewfinderUnionRect.height / 100);

		/**
		 * Your drawings need to be inside this function otherwise they will be reset when 
		 * you resize the browser window and the canvas goes will be cleared.
		 */
		
		//handle overlay mode
		MW_methods.handleOverlayModes();
	},
	
	/**
	 * Resize partial scanning view.
	 */
	resizePartialScannerView: async function resizeView(MW_properties, Dynamic_DOM_Elements) { //function name not needed | also this was referenced from global var
		//setTimeout(function(){let this_root = MW_methods;
		//obtain needed args
		var hideDuringUpdate = MW_properties.global.hideDuringUpdate;
		var proxyWrapPreview = Dynamic_DOM_Elements.proxyWrapPreview;
		var lines = MW_properties.global.blinkingLines; //Dynamic_DOM_Elements.lines; //_DOM doesn't work but MW_ works (its the time of setting those)
		
		var previewFrame = Dynamic_DOM_Elements.previewFrame;
		var partialView = MW_properties.global.partialView;
		var viewfinderOnScreenView = MW_properties.runtime.viewfinderOnScreenView;
		
		var is_portrait = MW_properties.runtime.is_portrait;
		var hardwareCameraResolution = MW_properties.global.hardwareCameraResolution;
		var preview = Dynamic_DOM_Elements.preview;
		
		//var viewfinderUnionRect = MW_properties.runtime.untouchedScanningRectsUnion;
		//var canvasOverlay = Dynamic_DOM_Elements.canvas;
		//var flash = Dynamic_DOM_Elements.flash;
		//var zoom = Dynamic_DOM_Elements.zoom;
		//var mwOverlayProperties = MW_properties.global.overlay;
		
		if (mwb_debug_print) console.log('resizePartialView | window size ' + window.innerWidth + ' ' + window.innerHeight);

		// USE THIS IF YOU WANT TO STORE THE VALUES OF THE RESIZE FOR THE NEXT SCAN
		/*partialView.x = x1;
		partialView.y = y1;
		partialView.width = w1;
		partialView.height = h1;*/
		
		//cameraSwitcher font helper
		let cameraSwitcher_displayState = Dynamic_DOM_Elements.cameraSwitcher_isVisible();
		if (cameraSwitcher_displayState) JavaScript_mediaDevices_API.cameraHandler();

		// improve UIX during update | users don't need to see the underlying changes only the final result
		if (hideDuringUpdate) {
			proxyWrapPreview.style.visibility = "hidden"; //HERE
			//canvasOverlay.style.display = "none";
			lines.v.style.display = "none";
			lines.h.style.display = "none";
		}
			
		if (mwb_debug_print) console.log('anchorView_toOrientation: ' + 'anchor_to ' + partialView.orientation + ' -> ' + 'current_orientation ' + viewfinderOnScreenView.orientation);
		this.anchorView_toOrientation(previewFrame, partialView.x, partialView.y, partialView.width, partialView.height, partialView.orientation, viewfinderOnScreenView.orientation);
		//HERE - either anchorView_toOrientation messes up, or the DOM is lagging after the resize event is fired and so previewFrame height is 0 - in which case, use setTimeout(0) | so lets get to it
		
		
		if (mwb_debug_print) console.log('is in the clouds');
		if (mwb_debug_print) console.log('anchor: ' + partialView.orientation + " [0-3], " + viewfinderOnScreenView.orientation + " [0-2]");
		
		//maybe wait(1) between these calcs?
		
		this.calcPreview(is_portrait, hardwareCameraResolution, preview, MW_properties, Dynamic_DOM_Elements); //ALSO HERE - or previewFrame direct?
		this.resizeCanvas(MW_properties, Dynamic_DOM_Elements);
		
		//cameraSwitcher font helper (checks pre-changes displayState so its ok)
		if (cameraSwitcher_displayState) JavaScript_mediaDevices_API.cameraHandler();
		
		// reappear video preview
		setTimeout(function () {
			if (hideDuringUpdate) {
				proxyWrapPreview.style.visibility = "visible";
				//canvasOverlay.style.display = "initial";
				lines.v.style.display = "initial";
				lines.h.style.display = "initial";
			}
		}, 1000); //THIS might be able to do with less - depending on device's speed?
		//}, 100);
	},
	
	eventHandlers: {
		//
		resize: function(e) {
			
			if (mwb_debug_print) { console.log('window resized'); console.log(e); }
			MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements);
			setTimeout(function()
			{
				MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements);
			}, 20);
		},
		
		loadeddata: function() {
			
			var camera_event = new CustomEvent("cameraReady", {"detail":"Camera is ready."});
			document.dispatchEvent(camera_event);
		},
		
		preview_closed: function() {
			
			var preview_event = new CustomEvent("cameraPreviewClosed", {"detail":"Camera preview closed."});
			document.dispatchEvent(preview_event);
		}
	},
	
	helpers: {
		already_inited: false,
		init_codeMasks_and_scanRects_and_union: function (MW_properties) {
			
			var _numberOfSupporedCodes = MW_properties.global.numberOfSupporedCodes;
			var codeMasksArray = MW_properties.global.codeMasksArray;
			var untouchedScanningRectsArray = MW_properties.global.untouchedScanningRectsArray;
			var untouchedScanningRectsUnion = MW_properties.runtime.untouchedScanningRectsUnion;
			
			if (!this.already_inited) //fill arrays first time
			{
				//BarcodeScanner.MWBinitDecoder(); //calling it here ensures the calls went thru | calling prinf after init in C++ also does that
				//leaving it to main, might take a while (after this point) so either call this in module.print or above call
				for (var _i = 0; _i < _numberOfSupporedCodes; _i++)
				{			
					codeMasksArray.push(Math.pow(2, _i));
					
					var rect = BarcodeScanner.MWBgetScanningRect(codeMasksArray[_i]);
					//if (mwb_debug_print) console.log(codeMasksArray[_i] + ', ');
					//if (mwb_debug_print) console.log(rect);
					var rect = JSON.parse(rect);
					untouchedScanningRectsArray.push(rect);
				}
				
				this.already_inited = true;
			}
			else //2+ 'th start
			{				
				for (var _i = 0; _i < _numberOfSupporedCodes; _i++)
				{					
					var rect = BarcodeScanner.MWBgetScanningRect(codeMasksArray[_i]);
					//if (mwb_debug_print) console.log(codeMasksArray[_i] + ', ');
					//if (mwb_debug_print) console.log(rect);
					var rect = JSON.parse(rect);
					untouchedScanningRectsArray[_i] = rect;
				}
			}
			
			//nope, still not as needed - LOOK BETTER INTO IT
			
			/*
			that setup is fine, but - you are supposed to call union (0) again, at a new run/start
			because in the meantime, scanRects and/or activeCodes (and their scanRects, and the union)
			might have changed
			
			well same goes for all scanRects, and the 'untouched' refers to them not being altered to fit
			resizes and preview crop transformation changes
			*/
			
			//if (mwb_debug_print) console.log(untouchedScanningRectsArray);
			var sdk_union = JSON.parse(BarcodeScanner.MWBgetScanningRect(0));
			
			untouchedScanningRectsUnion.x = sdk_union.x;
			untouchedScanningRectsUnion.y = sdk_union.y;
			untouchedScanningRectsUnion.width = sdk_union.width;
			untouchedScanningRectsUnion.height = sdk_union.height;

			if (mwb_debug_print) console.log('-> one-time initCodeMasksArray_and_untouchedScanningRectsArray_and_untouchedScanningRectsUnion ')
		},
		
		reset_Decoder: function () { if (mwb_debug_print) console.log('reset scanning rects'); BarcodeScanner.MWBinitDecoder(); },
		
		IsJsonString: function (jsonString, jsonDefault) { //add it later (on 5 total places)
			var jsonObject = null;
			try {
				jsonObject = JSON.parse(jsonString);
			} catch (e) {
				return jsonDefault;
			}
			return jsonObject;
		},
		
		//orientation
		OrientationType_hash: [],
		
		OrientationType_hash_init: function ()
		{
			//enum OrientationType {
			//	"portrait-primary",
			//	"portrait-secondary",
			//	"landscape-primary",
			//	"landscape-secondary"
			//};
			
			//var OrientationType_hash = [];
			this.OrientationType_hash["landscape-primary"] 	= 0;
			this.OrientationType_hash["portrait-primary"] 	= 1;
			this.OrientationType_hash["landscape-secondary"]= 2;
			//if (mwb_debug_print) console.log(this.OrientationType_hash); //[] (0) in Safari
		},
		
		_Screen_Orientation: (typeof screen.orientation === 'undefined') ? 'undefined' : screen.orientation,
		orientationChangeHandler: function () {
			//if (mwb_debug_print) console.log('its magic');
			//if (mwb_debug_print) console.log(screen);
			//if (mwb_debug_print) console.log(typeof screen); //object on Safari
			//if (mwb_debug_print) console.log(screen.orientation);
			//if (mwb_debug_print) console.log(typeof screen.orientation); //undefined on Safari
			
			//call here if (typeof MW_methods.helpers._Screen_Orientation === 'undefined')
				//or differnt handler
			
			let orientation_number = 0; //land assumed for default
			
			if (MW_methods.helpers._Screen_Orientation === 'undefined') //because of ctx change that will be undefined (different than 'undefined' of type string)
			{
				//welcome
				orientation_number = (window.innerWidth > window.innerHeight) ? /*MW_methods.helpers.OrientationType_hash["landscape-primary"]*/ 0 : /*MW_methods.helpers.OrientationType_hash["portrait-primary"]*/ 1;
				
				if (mwb_debug_print) console.log('HMM ' + screen.width + " " + screen.height + " => " + orientation_number); //screen wh are different than window.inner wh
				
				//also obtain availHeight, availLeft, availTop, availWidth and previous orientation
				//that will give you a clue about land or land-flipped
			}
			else
			{
				//logs
				if (mwb_debug_print) console.log('ORIENTATION CHANGE ' + MW_methods.helpers._Screen_Orientation);
				//if (mwb_debug_print) console.log(MW_methods.helpers.OrientationType_hash);
				//set properties
				orientation_number = MW_methods.helpers.OrientationType_hash[MW_methods.helpers._Screen_Orientation.type];
			}
			
			//
			
			let is_portrait = ((orientation_number % 2) == 1);
			if (mwb_debug_print) console.log(orientation_number + ' & ' + is_portrait);
			
			let prev_is_portrait = MW_properties.runtime.is_portrait;
			
			MW_properties.runtime.viewfinderOnScreenView.orientation = orientation_number;
			MW_properties.runtime.is_portrait = is_portrait;
			
			if (mwb_debug_print) console.log("HMM " + MW_properties.runtime.is_portrait);
			
			//since w3/mozilla were considerate enough to design an API that results in getting each
			//frame exaclty in the orientation its preview-ed in (unlike landscape only),
			//the hardwareCameraResolution also has to change values to reflect that when in portrait (already had been handled in calcPreview)
			{
				//no need to obtain frame size values from video, a simple swap should suffice
				//but that requires too many extra steps, so best to do it str8 from the source
				var videoWidth = Dynamic_DOM_Elements.preview.videoWidth,// || video.naturalWidth;
				videoHeight = Dynamic_DOM_Elements.preview.videoHeight;// || video.naturalHeight;
				
				//MW_properties.global.hardwareCameraResolution.width = videoWidth;
				//MW_properties.global.hardwareCameraResolution.height = videoHeight;
				
				//does it change at this point tho? -y.
				if (mwb_debug_print) console.log('new frame size: ' + videoWidth + 'x' + videoHeight);
				
				//MW_properties.global.hardwareCameraResolution assumes static WxH
				//for camera, e.g. 1280x720, regardless of land/port
				//since Safari doens't get its camera WH values from runtime caps api
				//it gets them from here, BUT the higher value MUST ALWAYS BE WIDTH
				
				var videoWidth_b = videoWidth,
					videoHeight_s = videoHeight;
					
				if (videoWidth < videoHeight)
				{
					videoWidth_b = videoHeight;
					videoHeight_s = videoWidth;
				}
				
				if (mwb_debug_print) console.log('explorer reporting');
				//if (MW_properties.global.hardwareCameraResolution.width == 0) //or JavaScript_mediaDevices_API.runtime_settings_videoTrack.width
				MW_properties.global.hardwareCameraResolution.width  = videoWidth_b;
				//if (MW_properties.global.hardwareCameraResolution.height == 0) //or JavaScript_mediaDevices_API.runtime_settings_videoTrack.height
				MW_properties.global.hardwareCameraResolution.height = videoHeight_s;
				
				//there seems to be some override on 2+ runs/reloads in Safari
				//so the portrait bug is fixed on 1st run, but re-appears on 2+
				//so lets set those values always, for now (they should be the same anyways)
				
				
				if (mwb_debug_print) console.log(MW_properties.global.hardwareCameraResolution);
			}
			
			// PREVIEW UPDATE SHOULD BE DONE AFTER UI CHANGE WHICH MAY TAKE SOME TIME TO COMPLETE RENDERING AFTER ORIENTATION CHANGE | HANDLED BY window.resizeEvent->resizePartialScannerView
		},
		
		safari_video_click_workaround: function (video) {
			let virtual_button = document.createElement('button');
			virtual_button.onclick = function() {
				//
				video.play(); if (mwb_debug_print) console.log('calling play again 3');
				
				//at this point its Safari
				if (mwb_debug_print) setTimeout(function() {
					//MWBScanner.resizePreview(2, 2, 96, 50);			
					if (mwb_debug_print) console.log(Dynamic_DOM_Elements.preview);
				}, 2500);
				
				this.onclick = null;
			};
			virtual_button.click();
		},
		
		safari_audio_click_workaround: function (audio) {
			if (BeepHelper.webAudio_supported) {
				if (mwb_debug_print) console.log('AudioContext is supported');
				BeepHelper.webAudio_init();
			}
			else {
				if (mwb_debug_print) console.log('AudioContext is not supported, fallback to old Audio');
				audio.volume = 0;
				audio.muted = true;
				audio.play();
			}
		},
		
		get_number_of_Digits: function(x) {
			return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
		},
		
		CreateErrorProperties: function(name,message,mozilla,userFriendly,mostLikelyCause) {
			return {
				name: name,
				message: message,
				mozilla: mozilla,
				userFriendly: userFriendly,
				mostLikelyCause: mostLikelyCause
			};
		},
		
		CreateErrorDescriptions: function() {
			//Cannot start the cameraPreview when calling startScanning, only a black preview is shown.
			MW_properties.runtime.errorDescriptions["NotReadableError"] = new MW_methods.helpers.CreateErrorProperties(
				"NotReadableError",
				"Could not start video source",
				"Although the user granted permission to use the matching devices, a hardware error occurred at the operating system, browser, or Web page level which prevented access to the device.",
				"Could not start the camera",
				"Running / using the camera in another browser / native app");
			//Cannot start the cameraPreview when calling startScanning, nothing is shown. The "http:" protocol is used and domain is not localhost.
			MW_properties.runtime.errorDescriptions.ProtocolError = new MW_methods.helpers.CreateErrorProperties(
				"",
				"",
				"If a document isn't loaded in a secure context (that is, the page was loaded using HTTP rather than HTTPS), the navigator.mediaDevices property is undefined, making access to getUserMedia() impossible.",
				"Cannot use the camera under HTTP because HTTPS is needed",
				"Accessing the web app under HTTP and not HTTPS");
				
			//Cannot start the cameraPreview when calling startScanning, nothing is shown. "Camera - Block" permission setting set in browser by user.
			MW_properties.runtime.errorDescriptions.NotAllowedError = new MW_methods.helpers.CreateErrorProperties(
				"NotAllowedError",
				"Permission denied",
				"It also happens if the user has specified that the current browsing instance is not permitted access to the device, the user has denied access for the current session, or the user has denied all access to user media devices globally.",
				"Cannot use the camera because camera access isn't allowed",
				"No permission to access the camera i.e. camera is blocked in the browser for this site");
				
			//Cannot start the cameraPreview when calling startScanning, nothing is shown. No camera is present i.e. no USB camera is plugged in on a desktop computer.
			MW_properties.runtime.errorDescriptions.NotFoundError = new MW_methods.helpers.CreateErrorProperties(
				"NotFoundError",
				"Requested device not found",
				"No media tracks of the type specified were found that satisfy the given constraints.",
				"Cannot use the camera because no camera device is present",
				"There is no physical camera device plugged in");
				
			//Cannot test
			MW_properties.runtime.errorDescriptions.AbortError = new MW_methods.helpers.CreateErrorProperties(
				"AbortError",
				"",
				"Although the user and operating system both granted access to the hardware device, and no hardware issues occurred that would cause a NotReadableError, some problem occurred which prevented the device from being used.",
				"Some problem occurred which prevented the device from being used.",
				"");
				
			//Cannot test
			//Note: OverconstrainedError probably can never happen because we request camera properties such as resolution with values that are supported, and in the rare case they aren't any other resolutions that can be supported will be used. In case torch or zoom aren't supported they won't be requested.
			MW_properties.runtime.errorDescriptions.OverconstrainedError = new MW_methods.helpers.CreateErrorProperties(
				"OverconstrainedError",
				"",
				"The specified constraints resulted in no candidate devices which met the criteria requested.",
				"No camera is available with the resolution / features being requested",
			"");
		},
		
		otherResult: function (code, errorDetails, type) {
			return {
				code: code,
				errorDetails: errorDetails,
				type: type,
				parsedCode: null,
				isGS1: null,
				bytes: null,
				locationPoints: null,
				imageWidth: null,
				imageHeight: null,
				moduleSizeX: null,
				moduleSizeY: null,
				modulesCountX: null,
				modulesCountY: null,
				ppm: null
			};
		}
	}
};

var timePoll = 0; //for dev / testing (preview height 0 bug specifically), rm later
var callCount = 0;

//webpack extra:
require("./barcode-scanner-preview-style.css");

//4. execution flow control, pauseDecoder, args, pointers, scanImage, result callbck,
//	[future: pthreads, altho its not 'real' mthreading], clean-free
var MWBScanner = {
	
	DECODER_ACTIVE: false, //or-and pause | also, SCANNER_ACTIVE/started might be better
	
	CONTINUOUS_DECODING: false, //
	
	USE_PARSER: true, //internal use only, as in, results gets parsed on C++ side always, but this flag determines presentation or not
	
	decoder_timeout: 30, //link it w/ "30 *"
	
	dps_limit: 20,
	
	PAUSE_DECODING: false, //runtime
	
	external_helper: null, //will be set from main.js | was for gui
	
	result_callback: null,
	
	decoder: async function (video) {
		
		const DEBUG_PRINT = 0;
		var BEEP_ON_SUCCESS = false;
		var jump = 1; var jmp_count = 0; //jump one means every result is beep-ed, do not use 0 because that will be undefined
		//
		var dataPtr = null;
		var callCount = 0;
		const frameInterval = 1000 / MWBScanner.dps_limit; //50; //calc this HERE from setting
		const minTimeout = MWBScanner.decoder_timeout; //10; //this is not the ACTUAL timeout (see that "30 *" timer) //tho this isn't used - scanner_timeout is the real true timeout, which unsets DECODER_ACTIVE, which is the condition that will execute clearInterval on the next frame
		
		const totalFrames = ( 1000 / frameInterval ) * minTimeout;
		
		//var DECODER_ACTIVE = true;
		var startTime = performance.now(); //new Date().getTime();
		//
		var videoWidth = video.videoWidth,// || video.naturalWidth;
			videoHeight = video.videoHeight;// || video.naturalHeight;
		
		if (mwb_debug_print) console.log('loaded metadata of video, w,h: ' + videoWidth + ', ' + videoHeight); //w,h have values i.e. 640,480 as soon as loadedmetadata Event (first frame loaded)
			
		//can also call explorer reporting here, but resize should always be called before reaching the decoder
			
		let mwOverlayProperties = MW_properties.global.overlay;
		let viewfinderOnScreen = MW_properties.runtime.viewfinderOnScreenView;
		
		var locationClear = null;
		
		var startFrameScanning = setInterval(async function () {
			//processing
			callCount++;
			if (!MWBScanner.DECODER_ACTIVE/*callCount > totalFrames*/) { clearInterval(startFrameScanning); return; }
			
			if (MWBScanner.PAUSE_DECODING) return;
			
			//relevant on orientation change
			videoWidth = video.videoWidth;
			videoHeight = video.videoHeight;
			
			var canvasFrame = document.createElement("canvas");
			var pad = 0;
			
			canvasFrame.width = videoWidth  + (pad * 2);
			canvasFrame.height = videoHeight + (pad * 2);
			
			var ctx = canvasFrame.getContext("2d");
			
			ctx.drawImage(video, 0, 0, videoWidth, videoHeight); //source rectangle
			var imgData = ctx.getImageData(0, 0, canvasFrame.width, canvasFrame.height);
			var data = imgData.data; //new Uint8ClampedArray([1, 20, -3, 129, 15]); //checks out
			var nDataBytes = data.length * data.BYTES_PER_ELEMENT;
			
			dataPtr = Module._malloc(nDataBytes); //buffer
			Module.HEAPU8.set(data, dataPtr); //[typedArray_dataSource, heapMemory_pointer]
			
			// Call function and get result
			var jsonMWResult = "";
			var scanFrame = Module.cwrap('scanFrame', 'string', ['number', 'number', 'number', 'number']); //for some reason this has to be inside this scope
			//probs asign cwrap when Module is loaded
			
			//NOTE: no need to keep MWB_functions here as they work when defined outside but called in this scope (unlike scanFrame)
			
			startTime = performance.now(); //new Date().getTime();
			
			//set active symbologies (and all other native sdk settings) before decoding
			
			//frame TEST			
			if (false && mwb_debug_print && (callCount == ((totalFrames/4) - 1)))
			{
				//
				console.log('frame TEST x');
				let url = canvasFrame.toDataURL();
				let windowName = 'majni';
				//window.open(url, windowName);
				
				console.log(url);
			}
			
			jsonMWResult = scanFrame(dataPtr, canvasFrame.width, canvasFrame.height, DEBUG_PRINT); //dataURL is png (no bmp or something raw)
			
			var dps = 1000/(performance.now() - startTime); //not sure if this way of doing things results in proper dps
			//actually this is correct, the reason why it takes longer for frames to 'run out' is frameInterval being 50ms
			//which limits max fps to 20
			
			var MWResult_obj = (DEBUG_PRINT == 0) ? JSON.parse(jsonMWResult) : jsonMWResult;
			
			//MWResult_obj take .code and JSON.parse it as well (but how can we know if its JSON result from the parser? -needs indicator)
			
			if (DEBUG_PRINT) { console.log(MWResult_obj); return; }
			
			if (MWResult_obj.type == "No MWResult.") //maybe check for undefined
			{
				if (mwb_debug_print) console.log( "dps(" + Math.round(dps) + "), frame " + callCount + " : " + MWResult_obj.code + " " + MWResult_obj.type );
			}
			else
			{
				//location
				let result = MWResult_obj;
				
				//PPM
				var ppm;
				
				if (result.type == "Multicode")
				{
					let foundCodes = result.count;
					for (let i = 0; i < foundCodes; i++)
					{
						let result_i = result.codes[i];
						let type_supports_ppm = (result_i.type != "Dotcode" && result_i.type != "Micro QR" && result_i.type != "Maxicode");
						if (type_supports_ppm && result_i.moduleSizeX > 0.01)
						{
							let is2D = (result_i.type == "QR" || result_i.type == "Micro QR" || result_i.type == "AZTEC" || result_i.type == "Datamatrix" || result_i.type == "Dotcode" || result_i.type == "Maxicode");
							ppm = (is2D)? ((result_i.moduleSizeX + result_i.moduleSizeY) / 2) : result_i.moduleSizeX;
							
							result.codes[i].ppm = ppm;
						}
					}
				}
				else
				{
					let type_supports_ppm = (result.type != "Dotcode" && result.type != "Micro QR" && result.type != "Maxicode");
					if (type_supports_ppm && result.moduleSizeX > 0.01)
					{
						let is2D = (result.type == "QR" || result.type == "Micro QR" || result.type == "AZTEC" || result.type == "Datamatrix" || result.type == "Dotcode" || result.type == "Maxicode");
						ppm = (is2D)? ((result.moduleSizeX + result.moduleSizeY) / 2) : result.moduleSizeX;
						
						result.ppm = ppm;
					}
				}
				
				//capturedFrame
				if (MW_properties.global.returnCapturedFrame)
				result.capturedFrame = imgData;
				
				//location
				if (result != null && result.locationPoints != null)
				{
					//capturePreview.pause();
					//MWOverlay location points green box draw
					let canvasOverlay = (mwOverlayProperties.useLocationLayer) ? Dynamic_DOM_Elements.locate : Dynamic_DOM_Elements.overlay;
					let preview = Dynamic_DOM_Elements.preview;
					
					//if (mwb_debug_print) console.log(preview.offsetWidth); //one of preview's sides will be cropped and bigger than canvasOverlay | note: preview.width (and height) are 0
					//if (mwb_debug_print) console.log(preview.offsetHeight);
					//if (mwb_debug_print) console.log(canvasOverlay.width);
					//if (mwb_debug_print) console.log(canvasOverlay.height);
					
					var ctx = canvasOverlay.getContext("2d");
					
					//actual draw is further down in code, but its just calcs for getting the right coords
					//so clearing the timed clear + doing the clear now is just as ok
					
					if (locationClear != null) clearTimeout(locationClear);
					
					ctx.clearRect(viewfinderOnScreen.x + 1, viewfinderOnScreen.y + 1, viewfinderOnScreen.width - 2, viewfinderOnScreen.height - 2);
					
					const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
					await wait(10);
					//--

					if (mwb_debug_print) console.log("location points:");
					if (mwb_debug_print) console.log(result.locationPoints);
					
					//let mwOverlayProperties = MW_properties.global.overlay;
					//let viewfinderOnScreen = MW_properties.runtime.viewfinderOnScreenView;
					
					ctx.lineWidth = mwOverlayProperties.borderWidth * 1; //location lines thickness
					ctx.strokeStyle = mwOverlayProperties.locationColor;

					var navigationBarHeight = (window.innerWidth > window.innerHeight) ? ((window.innerHeight * (16 / 9)) - window.innerWidth) : ((window.innerWidth * (16 / 9)) - window.innerHeight);
					
					navigationBarHeight = 0; //above is only good for windows phone

					//mwb_debug_print = true;
					if (mwb_debug_print) console.log('navigationBarHeight: ' + navigationBarHeight);

					var window_actualWidth = preview.offsetWidth;//canvasOverlay.width;//window.innerWidth;
					var window_actualHeight = preview.offsetHeight;//canvasOverlay.height;//window.innerHeight;

					//when the navigation bar is present, the image is pushed/translated by the size of the navigation bar
					if (viewfinderOnScreen.orientation == 0 || viewfinderOnScreen.orientation == 2) //landscape or flipped landscape
					{
						window_actualWidth += navigationBarHeight;
					}
					else //portrait
					{
						window_actualHeight += navigationBarHeight;
					}
					
					var translate_x = preview.offsetWidth - canvasOverlay.width;
					var translate_y = preview.offsetHeight - canvasOverlay.height;
					translate_x /= 2;
					translate_y /= 2;
					
					var scale_x = window_actualWidth / result.imageWidth;
					var scale_y = window_actualHeight / result.imageHeight;

					if (mwb_debug_print) console.log('screen w h : ' + window.innerWidth + ' ' + window.innerHeight + ' image w h : ' + result.imageWidth + ' ' + result.imageHeight + ' scales x y : ' + scale_x + ' ' + scale_y);
					
					//alert('image w h : ' + result.imageWidth + ' ' + result.imageHeight); //TEST-DEL
					
					if (false && viewfinderOnScreen.orientation == 1) //swap scales operands to account for the rotation
					{
						scale_x = window_actualWidth / result.imageHeight;
						scale_y = window_actualHeight / result.imageWidth;
						
						//most likely there won't be any need to swap translates
						//because they aren't tied with image - however, TEST!
					}

					//viewfinderOnScreen.orientation 1 port 2 flipped land
					var coordSysOrigin_x_Axis_toCenter = 0;
					var coordSysOrigin_y_Axis_toCenter = 0;

					if (false && viewfinderOnScreen.orientation != 0) //if not landscape, do some transformations to match the position on the current orientation
					{
						coordSysOrigin_x_Axis_toCenter = canvasOverlay.width / 2; //this /2 is correct
						coordSysOrigin_y_Axis_toCenter = canvasOverlay.height / 2;

						ctx.translate(coordSysOrigin_x_Axis_toCenter, coordSysOrigin_y_Axis_toCenter);
						ctx.rotate(viewfinderOnScreen.orientation * 90 * Math.PI / 180);
					}
					
					ctx.translate(-navigationBarHeight / 2, 0); //this needs to be /2 no matter what the scale_x value is

					if (!mwOverlayProperties.locationAllPointsDraw) //draw box from p1 and p3
					{
						var x = result.locationPoints.p1.x;
						var y = result.locationPoints.p1.y;

						var w = result.locationPoints.p3.x - x;
						var h = result.locationPoints.p3.y - y;

						x *= scale_x;
						y *= scale_y;
						w *= scale_x;
						h *= scale_y;

						//draw green location border polygon | swap translation back operands to account for the different width and height for portrait, otherwise just normal translation back
						if (viewfinderOnScreen.orientation == 1)
						{
							ctx.strokeRect(x - coordSysOrigin_y_Axis_toCenter, y - coordSysOrigin_x_Axis_toCenter, w, h);
						}
						else ctx.strokeRect(x - coordSysOrigin_x_Axis_toCenter, y - coordSysOrigin_y_Axis_toCenter, w, h);
					}
					else
					{
						var x1 = result.locationPoints.p1.x;
						var y1 = result.locationPoints.p1.y;
						var x2 = result.locationPoints.p2.x;
						var y2 = result.locationPoints.p2.y;
						var x3 = result.locationPoints.p3.x;
						var y3 = result.locationPoints.p3.y;
						var x4 = result.locationPoints.p4.x;
						var y4 = result.locationPoints.p4.y;
						
						x1 *= scale_x;
						y1 *= scale_y;
						x2 *= scale_x;
						y2 *= scale_y;
						x3 *= scale_x;
						y3 *= scale_y;
						x4 *= scale_x;
						y4 *= scale_y;
						
						x1 -= translate_x;
						y1 -= translate_y;
						x2 -= translate_x;
						y2 -= translate_y;
						x3 -= translate_x;
						y3 -= translate_y;
						x4 -= translate_x;
						y4 -= translate_y;
						
						if (mwb_debug_print) ctx.strokeStyle = "rgba(255, 225, 0, 1.0)";

						//draw green location border lines | swap translation back operands to account for the different width and height for portrait, otherwise just normal translation back
						if (viewfinderOnScreen.orientation == 1)
						{
							ctx.beginPath();
							ctx.moveTo(x1 - coordSysOrigin_y_Axis_toCenter, y1 - coordSysOrigin_x_Axis_toCenter);
							ctx.lineTo(x2 - coordSysOrigin_y_Axis_toCenter, y2 - coordSysOrigin_x_Axis_toCenter);
							ctx.lineTo(x3 - coordSysOrigin_y_Axis_toCenter, y3 - coordSysOrigin_x_Axis_toCenter);
							ctx.lineTo(x4 - coordSysOrigin_y_Axis_toCenter, y4 - coordSysOrigin_x_Axis_toCenter);
							ctx.lineTo(x1 - coordSysOrigin_y_Axis_toCenter, y1 - coordSysOrigin_x_Axis_toCenter);

							ctx.stroke();
						}
						else
						{
							ctx.beginPath();
							ctx.moveTo(x1 - coordSysOrigin_x_Axis_toCenter, y1 - coordSysOrigin_y_Axis_toCenter);
							ctx.lineTo(x2 - coordSysOrigin_x_Axis_toCenter, y2 - coordSysOrigin_y_Axis_toCenter);
							ctx.lineTo(x3 - coordSysOrigin_x_Axis_toCenter, y3 - coordSysOrigin_y_Axis_toCenter);
							ctx.lineTo(x4 - coordSysOrigin_x_Axis_toCenter, y4 - coordSysOrigin_y_Axis_toCenter);
							ctx.lineTo(x1 - coordSysOrigin_x_Axis_toCenter, y1 - coordSysOrigin_y_Axis_toCenter);

							ctx.stroke();
						}
						
						//ctx.beginPath();
						//ctx.moveTo(x1, y1);
						//ctx.lineTo(x2, y2);
						//ctx.lineTo(x3, y3);
						//ctx.lineTo(x4, y4);
						//ctx.lineTo(x1, y1);

						//ctx.stroke();
					}
				}
				
				if (BEEP_ON_SUCCESS && ++jmp_count % jump == 0) mwbScanner.beep();
				
				//var successString = "dps(" + Math.round(dps) + "), good frame " + callCount + " ... " + jsonMWResult + "\n\n" + MWResult_obj.code;
				//if (mwb_debug_print) console.log("decoded string (" + callCount + ") " + MWResult_obj.code);
				
				//SHOW RESULT STRING HERE
				if (MWBScanner.CONTINUOUS_DECODING)
				{
					var successString = "dps(" + Math.round(dps) + "), good frame " + callCount + " ... " + jsonMWResult + "\n\n" + MWResult_obj.code;
					
					//MWBcloseScannerOnDecode dependency
					MWBScanner.PAUSE_DECODING = true;
					
					let locationBorderTime = (frameInterval > mwOverlayProperties.locationShowTime) ? mwOverlayProperties.locationShowTime : frameInterval;
					locationBorderTime /= 100;
					locationBorderTime *= 90;
					
					locationClear = setTimeout(async function(){
						ctx.clearRect(viewfinderOnScreen.x + 1, viewfinderOnScreen.y + 1, viewfinderOnScreen.width - 2, viewfinderOnScreen.height - 2);
						
						const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
						await wait(10);
						
						if (mwOverlayProperties.pauseMode == 2) //PM_STOP_BLINKING
						MW_methods.toggleBlinkingLines();
						else if (mwOverlayProperties.pauseMode == 1) //PM_PAUSE
						MW_methods.drawPauseRects();
						
					}, locationBorderTime);
					
					if (MWBScanner.result_callback) //return to callback!
						MWBScanner.result_callback(MWResult_obj);
					else
						if (mwb_debug_print) console.log("decoded string (" + callCount + ") " + MWResult_obj.code);
					
				}
				else
				{
					MWBScanner.PAUSE_DECODING = true; //lock it from being changable from the gui/outside
					
					//pause preview so frame fits the location
					Dynamic_DOM_Elements.preview.pause();
					
					//show location breefly
					const wait = ms => new Promise(resolve => setTimeout(resolve, ms)); //keep this in common place - helpers
					await wait(mwOverlayProperties.locationShowTime);
					
					MWBScanner.destroyPreview(true); //has_res
					await wait(128); //wait a bit for DOM actions to complete
					//100 - PC
					//1500 Note5
					//rather fast on LG
					
					//maybe poll DOM state then show alert (or clbck)
					
					MWBScanner.PAUSE_DECODING = false; //put this back (or prev runtime/gui setting?)
					
					//API callback
					if (MWBScanner.result_callback) //return to callback!
						MWBScanner.result_callback(MWResult_obj);
					else
						if (mwb_debug_print) console.log("decoded string (" + callCount + ") " + MWResult_obj.code);
					
					//var jsonObject_ParserResult = JSON.parse(MWResult_obj.code);
					
					/*if (MWBScanner.USE_PARSER) alert(MWResult_obj.type + "\n\n" + MWResult_obj.code); //same?
					else alert(MWResult_obj.type + "\n\n" + MWResult_obj.code);*/
					
					//gui
					/*let result_element_title = document.getElementById('MWResult_title');
					result_element_title.innerHTML = " \n" + MWResult_obj.type + "\n ";
					
					let result_element = document.getElementById('MWResult');
					result_element.innerHTML = " \n" + MWResult_obj.code + "\n \n ";
					
					let result_element_wrapper = document.getElementById('MWResult_wrap');
					//this style only for 'scrollable result' mostly PDF
					//result_element_wrapper.style.height = "auto";
					//result_element_wrapper.style.position = "absolute";
					result_element_wrapper.style.visibility = "visible";
					
					//as for the result being 'scrollable' if longer than screen (parsed json),
					//poll the offestHeight, if more than window.height, then style.position = as needed
					//else = other as needed
					
					if (result_element_wrapper.offsetHeight > window.innerHeight)
					{
						result_element_wrapper.style.position = "absolute";
					}
					else
					{
						result_element_wrapper.style.position = "fixed";
					}
					
					MWBScanner.gui_demo_controls_Array[0].element_ref.scrollIntoView(false); //will scroll to top where result starts from
					
					//for some reason, maybe related to this, toggle buttons have that lag, it happens only when result > screen
					
					let button1 = document.getElementsByClassName('button1')[0];
					let button2 = document.getElementsByClassName('button2')[0];
					
					button1.style.visibility = "hidden";
					
					button2.innerHTML = "OK";
					button2.onclick = function () {
						
						let result_element_wrapper = document.getElementById('MWResult_wrap');
						result_element_wrapper.style.visibility = "hidden";
				
						let result_element_title = document.getElementById('MWResult_title');
						result_element_title.innerHTML = "";
						
						let result_element = document.getElementById('MWResult');
						result_element.innerHTML = "";
						
						//button2
						this.onclick = mwbScanner.closeScanner;
						this.innerHTML = "Stop";
						this.style.visibility = "visible";
						
						let button1 = document.getElementsByClassName('button1')[0];
						
						button1.style.visibility = "visible";
					}*/					
				}
			}
			
			
			// Free memory
			Module._free(dataPtr); //but what if you change the address the dataPtr points to in C++ | Verify, and if true, store a copy to restore OG from (or just -= size)
			dataPtr = null;
			Module._free(jsonMWResult);
			
			//if (mwb_debug_print) console.log('--------------------------------> b4'); //reaches
			//if ((callCount == (totalFrames - 1)) && JavaScript_mediaDevices_API.videoTrack != null) { JavaScript_mediaDevices_API.videoTrack.stop(); //null check!
			//if (mwb_debug_print) console.log('and after'); }
			//works, but is already handled in onloadedmetadata event => true timer
			
		}, frameInterval); 
	},
	
	start: async function (callback/*, container*/) { //result_clb, video
		
		if (MWBScanner.DECODER_ACTIVE) return null; //can't start two
		MWBScanner.DECODER_ACTIVE = true;
		
		Dynamic_DOM_Elements.cameraPreview_closed = false;
		
		//MWBScanner.external_helper(MWBScanner.DECODER_ACTIVE); //gui
		
		//BarcodeScanner.MWBinitDecoder(); THIS TOO PROBS - TESTING W/ DM makes the preview (and decoder) act strangely - investigate! -got em! it was setting the next mask in the custom handlers, needs to be 2^value_i - 1
		
		//set container in MW_properties.global.container, then,
		//MW_properties.global.container = container;
		//this.resizePreview(0, 0, 100, 100);
		//MW_properties.global.video = video; //also use this if there in _DOM_elements (not creating a new one) //actually, no need to do this
		
		MWBScanner.result_callback = ((typeof callback) == 'function') ? callback : mwbScanner.dflt_clb;
		
		async function after_VideoLoadedData (mediaStream) {
		
		MW_methods.helpers.reset_Decoder(); //this here -
		//call on each start scan //above method calls it as well
		//BUT - scannerConfig() needs to be called AFTER
		//AAND - reset should happen BEFORE init, cause init gets
		
		scannerConfig(); //HERE - previous set(s) from GUI will be overrided, wb HERE? -y.
		
		//if (!Dynamic_DOM_Elements.already_inited)
		await MW_methods.helpers.init_codeMasks_and_scanRects_and_union(MW_properties);
		
		//probs wait not needed:
		const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
		await wait(1); //loading video takes some time, try in play (or pool the state each, say, 50ms, for size != 0)
		Dynamic_DOM_Elements.revealElements(); //calling it here after wait(1) works just fine for no 'flashing inter-transformation changes'
		//again, you might need to use hidden and then reveal after calcs have finished, and also those internal none-initial
		
		//^THAT HAS TO BE DONE BEFORE resize, so that elements are properly calced together wrt. eachother.
		//only thing you might want to try, is making them hidden instead of display none
		
		//if that works, it should result in everything being already transformed and in place, and can even be appeared at once
		//on first frame (rn its black previewFrame after T, then MW_overlay appears, transforms, and plays)
		
		//to get out of FS
		//document.addEventListener('backbutton', function(){MWBScanner.destroyPreview()}, false); //doesn't work
		
		MW_methods.helpers.OrientationType_hash_init();
		
		//first time 4 everything | only if != landscape
		//if (MW_methods.helpers.OrientationType_hash[screen.orientation.type] != 0)
		MW_methods.helpers.orientationChangeHandler();
		
		if (MW_methods.helpers._Screen_Orientation === 'undefined')
		{
			//
			window.addEventListener('resize', MW_methods.helpers.orientationChangeHandler, false); //same handler - checks inside, for now
		}
		else
		{
			//window.
			screen.orientation.addEventListener('change', MW_methods.helpers.orientationChangeHandler);
		}
				
		window.addEventListener('resize', MW_methods.eventHandlers.resize, false);
		
		// Observe one or multiple elements
		if (MW_properties.global.previewType == 'container' && MW_properties.global.container != null)
		Dynamic_DOM_Elements.resizeObs.observe(MW_properties.global.container);
		
		await MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements); //anchor, calcP, resizeC - which is also to be called on orient/windows size changes
		//await MW_methods.calcPreview(MW_properties.runtime.is_portrait, MW_properties.global.hardwareCameraResolution, Dynamic_DOM_Elements.preview, MW_properties, Dynamic_DOM_Elements);
		//await MW_methods.resizeCanvas(MW_properties, Dynamic_DOM_Elements);
		
		Dynamic_DOM_Elements.ready_to_use_ResizeObs = true;
		
		//MWBScanner.DECODER_ACTIVE = true;
		
		//if (mwb_debug_print) console.log(typeof MWBScanner.decoder);
		await MWBScanner.decoder(Dynamic_DOM_Elements.preview);
		//actually this point isn't even reached
		
		//DEBUG: USE THIS TO TEST RESIZE
		//setTimeout(function () {
		//	//if (mwb_debug_print) console.log(document.body.innerHTML); //doesn't print longer strings in console
		//	MW_properties.global.partialView.x = 30;
		//	MW_properties.global.partialView.y = 10;
		//	MW_properties.global.partialView.width = 30; //this can also be wrapped for fullscreen, and for transitions/zoom-out effect
		//	MW_properties.global.partialView.height = 70;
		//	MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements);
		//}, 5000);
		if (mwb_debug_print) console.log('final');
		// register an event listener to be notified and execute resizeCanvas upon window resize for desktop only AND orientation->UI change for phone/tablet
		};
		
		//promise here
		//call create
		try {
			
			MW_methods.helpers.safari_audio_click_workaround(sound);
			
			await Dynamic_DOM_Elements.main_createPreview(MW_properties, MW_methods);
			
			//var timePoll = 0; //global
			//var callCount = 0;
			
			//TEST
			/*
			var poll_PreviewFrame = setInterval(function () {
				//processing
				callCount++;
				timePoll += 4;
				if (timePoll == 100) { clearInterval(poll_PreviewFrame); timePoll = 0; callCount = 0; return; }
				
				if (mwb_debug_print) console.log('previewFrame after ' + timePoll);
				if (mwb_debug_print) console.log([Dynamic_DOM_Elements.previewFrame.offsetLeft,
				Dynamic_DOM_Elements.previewFrame.offsetTop,
				Dynamic_DOM_Elements.previewFrame.offsetWidth,
				Dynamic_DOM_Elements.previewFrame.offsetHeight]);
			}, 4);*/
			
			await JavaScript_mediaDevices_API.init_values(Dynamic_DOM_Elements.preview, after_VideoLoadedData, function(){});
			
			//anyways, figured out and fixed two mysteries - use "key": in json (getScanRects), and use MWOv.lines after they've been init-ed
		} catch(error) {
			//handle errro
		}
		
		return 0;		
	},
	
	set_DecoderTimeout: function (timeout) {
		
		var timeout1 = ((typeof timeout === 'number') && (timeout == 0 || (timeout >= 10 && timeout <= 60))) ? timeout : 30; //these mix, max, default values should be taken from gui_demo_controls (prev set there)
		
		MWBScanner.decoder_timeout = timeout1;
	},
	
	set_DpsLimit: function (dps_limit) {
		
		var dps_limit1 = ((typeof dps_limit === 'number') && (dps_limit >= 1 && dps_limit <= 30)) ? dps_limit : 30; //these mix, max, default values should be taken from gui_demo_controls (prev set there)
		
		MWBScanner.dps_limit = dps_limit1;
	},
	
	set_Continuous: function (continuous) {
		
		if (!(typeof continuous === 'boolean')) { if (mwb_debug_print) console.log('error: boolean argument required for arg in set_Continuous'); return; }
		
		MWBScanner.CONTINUOUS_DECODING = continuous;
	},
	
	set_Parsing: function (use_parser) {
		
		if (!(typeof use_parser === 'boolean')) { if (mwb_debug_print) console.log('error: boolean argument required for arg in set_Parsing'); return; }
		
		if (use_parser) BarcodeScanner.MWBsetActiveParser(0xFF);
		else BarcodeScanner.MWBsetActiveParser(0x0); //or actual masks aka _NONE
		
		//How do I test if parsing took place? THIS - add it ↓ there, use it here
		//When all could have been resolved with a simple boolean indicator in the json result.
		
		MWBScanner.USE_PARSER = use_parser;
	},
	
	set_Pause: function (pause) {
		
		if (!(typeof pause === 'boolean')) { if (mwb_debug_print) console.log('error: boolean argument required for arg in set_Pause'); return; }
		
		MWBScanner.PAUSE_DECODING = pause;
	},
	
	set_Preview_anchor: function (orientation) {
		
		var anchor_to = ((typeof orientation === 'number') && (orientation >= 0 && orientation <= 3)) ? orientation : 0;
		
		if (!MWBScanner.DECODER_ACTIVE) //might need a scanner_running/active/started flag instead
		MW_properties.global.partialView.orientation = anchor_to; //0 for none, subsequent values - 1 for respective orientation
	},
	
	resizePreview: function (x, y, w, h) { //(x, y, width, height)
	
		if (MW_properties.global.previewType == 'container') return;
		
		var x1 = ((typeof x === 'number') && (x >= 0 && x <= 100)) ? x : MW_properties.global.partialView.x;
        var y1 = ((typeof y === 'number') && (y >= 0 && y <= 100)) ? y : MW_properties.global.partialView.y;
        var w1 = ((typeof w === 'number') && (w >= 0 && w <= 100)) ? w : MW_properties.global.partialView.width;
        var h1 = ((typeof h === 'number') && (h >= 0 && h <= 100)) ? h : MW_properties.global.partialView.height;
		
		if (mwb_debug_print) console.log("RESIZE: " + [x1, y1, w1, h1]);
		
		MW_properties.global.partialView.x = x1;
		MW_properties.global.partialView.y = y1;
		MW_properties.global.partialView.width = w1; //this can also be wrapped for fullscreen, and for transitions/zoom-out effect
		MW_properties.global.partialView.height = h1;
		
		if (MWBScanner.DECODER_ACTIVE) //might need a scanner_running/active/started flag instead
		MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements);
	},
	
	destroyPreview: async function (has_res) {
		
		//clean up the get out of FS thing
		//document.removeEventListener('backbutton', function(){MWBScanner.destroyPreview()}, false);
		
		const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
		
		var this_root = JavaScript_mediaDevices_API;
		var track = this_root.videoTrack;
		Dynamic_DOM_Elements.destroyPreview(this_root, track); //not truly awaitable at this point
		
		//complete empty callback
		await wait(128);
		if (typeof has_res == "undefined")
		if (MWBScanner.result_callback) //return to callback!
			MWBScanner.result_callback(
				{
					code: "",
					type: "Cancel",
					isGS1: null,
					bytes: null,
					location: null,
					imageWidth: null,
					imageHeight: null
				}
			);
		
		//MWBScanner.external_helper(MWBScanner.DECODER_ACTIVE); //gui
	}
};

//4. main <<<<<<<<<<<>>>>>>>>>>>
  //<<<<<<<<<<<<<<>>>>>>>>>>>>>
  //----
  //exporting API methods:
  //var Scanner = function(){ var self = this; } //Scanner already exists from MWBScanner_wa.js
  var mwbScanner = null;
  mwbScanner = new Scanner(); //if you don't do this (like, have it commented) nothing works and no error is thrown
  
  //var wasmPath = (typeof setWasmPath == "function") ? setWasmPath() : "index.wasm"; //won't work here with webpack, instead
  var setWasmPath = function (wasmPath) {
	Module["wasmBinaryFile"] = (typeof wasmPath == "string" && wasmPath != "") ? wasmPath : "index.wasm";
  };
  
  
  var module_loaded = false;
  
  //-----
  var Module = {
	//wasmBinaryFile: wasmPath || "index.wasm", //won't work here with webpack
	preRun: [],
	postRun: [],
	print: (function() {
		  return function(text) {
			  //-------------
			  if (module_loaded) return; //<-- this
			  //Wrapped native API methods:
				if (mwb_debug_print) console.log(text); module_loaded = true;
				
				//Get Common Scanner Information GROUP
				BarcodeScanner.MWBgetVersion = Module.cwrap('info_MWBgetVersion', 'string', []);
				
				//Configure Common Scanner Parameters/Settings GROUP
				BarcodeScanner.MWBinitDecoder	 	= mwbScanner.generateMethod('cfg_', 'MWBinitDecoder');
				BarcodeScanner.MWBsetActiveCodes 	= mwbScanner.generateMethod('cfg_', 'MWBsetActiveCodes');
				BarcodeScanner.MWBgetActiveCodes 	= mwbScanner.generateMethod('cfg_', 'MWBgetActiveCodes'); //internal use only
				BarcodeScanner.MWBsetLevel 			= mwbScanner.generateMethod('cfg_', 'MWBsetLevel');
				BarcodeScanner.MWBsetActiveParser 	= mwbScanner.generateMethod('cfg_', 'MWBsetActiveParser');
				
				//Configure Advanced Scanner Parameters/Settings GROUP
				BarcodeScanner.MWBsetActiveSubcodes = mwbScanner.generateMethod('acfg_', 'MWBsetActiveSubcodes');
				BarcodeScanner.MWBsetFlags 			= mwbScanner.generateMethod('acfg_', 'MWBsetFlags');
				BarcodeScanner.MWBsetMinLength 		= mwbScanner.generateMethod('acfg_', 'MWBsetMinLength');
				BarcodeScanner.MWBsetDirection 		= mwbScanner.generateMethod('acfg_', 'MWBsetDirection');
				BarcodeScanner.MWBsetScanningRect 	= mwbScanner.generateMethod('acfg_', 'MWBsetScanningRect');
				BarcodeScanner.MWBgetScanningRect 	= Module.cwrap('acfg_MWBgetScanningRect', 'string', ['number']); //internal use only
				BarcodeScanner.MWBsetParam 			= mwbScanner.generateMethod('acfg_', 'MWBsetParam');
				
				BarcodeScanner.MWBduplicateCodeDelay = mwbScanner.generateMethod('acfg_', 'MWBduplicateCodeDelay'); //is in C++ ? -It is now.
				//wow, this worked better than expected
				
				if (typeof Module._free == "undefined")
				Module._free = Module.cwrap('helper_MWBfree', 'number', ['number']); //internal use only
				
				const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
				//await wait(1);
				
				//scannerConfig(); //notification that scanner is ready can be sent here
				
				
				if (mwb_debug_print) console.log('back home'); //this point is never reach when async start is called above |(tho in .html sdk_mod has no async) ---strikethrough---
				//since then, this point is infact reached, at some later time while mediaStream inits, and this behaviour is consistent even if await is used
				
				var scanner_event=new CustomEvent("preScannerModuleLoaded",{"detail":"Scanner is ready."});document.dispatchEvent(scanner_event);
				
				
				//API methods assigned with cwrap don't book-keep or have an easy wrapper
				
				//also those methods make direct sdk calls, which might be a problem
				//if done while the decoder is running
				//but because its single threaded that can't happen
				
	};
	})()
  };

//window.Module = Module;
//window.mwbScanner = mwbScanner;

//--
//--

var scannerConfig = function(){};

module.exports = {
	Module: Module,
	mwbScanner: mwbScanner,
	set_scannerConfig: function(scanCfg){ scannerConfig = scanCfg; } /*scannerConfig: scannerConfig*/ //file will be used
	,
	setWasmPath: setWasmPath
}
//5. index <<<<<<<<<<<>>>>>>>>>>> *external
