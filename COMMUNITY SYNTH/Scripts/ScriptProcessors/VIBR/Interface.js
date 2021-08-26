Content.makeFrontInterface(1200, 700);

Engine.loadFontAs("{PROJECT_FOLDER}Declaration.ttf", "GLOBALFONT");

Engine.setGlobalFont("GLOBALFONT");


	//DISPLAY VALUES
	



//IMAGE POOL

Engine.loadImageIntoPool("{PROJECT_FOLDER}GUI.png");
Engine.loadImageIntoPool("{PROJECT_FOLDER}GUIDETAILS.png");




//VU METER

/** Creates a VU-Meter from a filmstrip for the master volume. */
inline function createFilmStripVuMeter(name, x, y, isLeft)
{
	local widget = Content.addPanel(name, x, y);
    
    Content.setPropertiesFromJSON(name, {
      "width": 60, // this uses the exact dimensions of one filmstrip
      "height": 100,
      "opaque": true // opaque is important in order to increase the drawing performance
    });
    
    // Put the image in your image folder
    widget.loadImage("{PROJECT_FOLDER}LED_Output_Meter_V1_128_Frames_127_x_167_pixels.png", "filmstrip");
    
    widget.data.value = 0.0;
    widget.data.isLeft = isLeft;
    
    // Set the initial image 
    widget.setImage("filmstrip", 0,0);
    
    widget.setTimerCallback(function()
    {
    	// Get the peak value from the master output
    	var newValue = Engine.getMasterPeakLevel(this.data.isLeft ? 0 : 1);
    	
    	if(newValue > this.data.value)
    		this.data.value = newValue;
    	else
    		// Just decay the current value (0.92 controls the decay time)
    		this.data.value = this.data.value * 0.92;
    	
    	// Calculate the filmstrip index
    	// this must be an integer value
    	// 84 is used instead of 128 because 84 is ~0dB which is
    	// more accurate for this example filmstrip
    	var index = parseInt(this.data.value *84.0);
    	
    	// If you just want to paint one image, 
    	// you don't need the paint routine, but
    	// just use this method
    	// the yOffset is index * heightOfFilmstrip
    	this.setImage("filmstrip", 0, index * 167);	
    });
    
    widget.startTimer(30);
    return widget;
};


const var VuMeterLeft = createFilmStripVuMeter("VuMeterLeft", 1090, 30, false);
const var VuMeterRight = createFilmStripVuMeter("VuMeterRight", 1050, 30, true);



// PANEL VISIBILITY




// PRESET BROWSER


const var presetPnl = Content.getComponent("presetPnl");

inline function onShowPresetBrowserControl(component, value)
{
	//SHOW

	    presetPnl.showControl(value);
       
	   
	        
	 
};

Content.getComponent("ShowPresetBrowser").setControlCallback(onShowPresetBrowserControl);

// 




inline function onHidePresetBrowserControl(component, value)
{
	//HIDE

	    presetPnl.showControl(!value);
	    
	
	    
};

Content.getComponent("HidePresetBrowser").setControlCallback(onHidePresetBrowserControl);






// SHOW CURRENT PRESET NAME IN A LABEL

const var PresetName = Content.getComponent("PresetName");


inline function onKnob1Control(component, value)
{
	if (Engine.getCurrentUserPresetName() == "")
	    Content.getComponent("PresetName").set("text", "P R E S E T S");
	else
	    Content.getComponent("PresetName").set("text", Engine.getCurrentUserPresetName());
};


Content.getComponent("ShowPresetBrowser").setControlCallback(onShowPresetBrowserControl);

// Prev and Next Preset Buttons

Content.getComponent("NextBtn").setControlCallback(onNextBtnControl);

inline function onNextBtnControl(component, value)
{
    if(value == 1)
    
    Engine.loadNextUserPreset(false);
};


Content.getComponent("PrevBtn").setControlCallback(onPrevBtnControl);

inline function onPrevBtnControl(component, value)
{
    if(value == 1)
    
    Engine.loadPreviousUserPreset(false);
};




	// DYNAMIC PANELS



const var DynamicPnl1 = Content.getComponent("DynamicPnl1");
const var DynamicPnl2 = Content.getComponent("DynamicPnl2");

inline function onBtnGeneratorSwitchControl(component, value)
{
	//SHOW
        DynamicPnl1.showControl(!value);
	    DynamicPnl2.showControl(value);
       
	   
	        
	 
};

Content.getComponent("BtnGeneratorSwitch").setControlCallback(onBtnGeneratorSwitchControl);






};function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 