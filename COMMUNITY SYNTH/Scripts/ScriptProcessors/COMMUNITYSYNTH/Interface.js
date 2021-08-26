// UD AUDIO BASS SYNTH - HISE COMMUNITY PROJECT


//NAMING CONVENTION

//Sli = Slider
//Knb = Knob
//Btn = Button
//Tbl = Table
//Cmb = Combobox
//Lbl = Label
//Img = Image
//Vie = Viewport
//Pnl = Panel	
//Awf = AudioWaveform
//Slp = Sliderpack
//Flt = FloatingTile

//DynPnl = Dynamic panel
//ClrPnl = Color panel
//BrdPnl = Border panel

//Dis = Display
//Tab = Tab
//TabBtn = Tab button
//TabBtnPnl = Tab button panel

//----------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------
//GENERAL SETTINGS
//----------------------------------------------------------------------------------------------------------


//INTERFACE--------------------------------------------------------------------------------------------------

Content.makeFrontInterface(1600, 900);

//GLOBALFONT--------------------------------------------------------------------------------------------------

Engine.loadFontAs("{PROJECT_FOLDER}Declaration.ttf", "GLOBALFONT");
Engine.loadFontAs("{PROJECT_FOLDER}jd_lcd_rounded.ttf", "LCD DISPLAY");

Engine.setGlobalFont("GLOBALFONT");

//IMAGE POOL----------------------------------------------------------------------------------------------------------------------------

Engine.loadImageIntoPool("{PROJECT_FOLDER}GUI1.png");

//SKINS--------------------------------------------------------------------------------------------------------

const var CmbSkins = Content.getComponent("CmbSkins");

//SWAP MAIN SKIN IMAGE

const var images = [Content.getComponent("GUI1"),
                    Content.getComponent("GUI2"),];
                    
//KEYS COVER IMAGE
                    
const var keyscover = [Content.getComponent("KEYS COVER1"),
                    Content.getComponent("KEYS COVER2"),];


inline function onCmbSkinsControl(component, value)
{    
    for (i = 0; i < images.length; i++) images[i].showControl(i == value - 1);
    for (i = 0; i < keyscover.length; i++) keyscover[i].showControl(i == value - 1);
};



Content.getComponent("CmbSkins").setControlCallback(onCmbSkinsControl);

//----------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------
//GUI SETTINGS
//----------------------------------------------------------------------------------------------------------


//GUI RESIZING-------------------------------------------------------------------------------------------------------------------

const var Knob1 = Content.getComponent("KnbZoom");

inline function onKnob1Control(component, value)
{
	Settings.setZoomLevel(value);
};

Content.getComponent("KnbZoom").setControlCallback(onKnob1Control);

const var Panel1 = Content.getComponent("PnlZoom");
Panel1.setControlCallback(onPanel1Control);

inline function onPanel1Control(component, value)
{
    Knob1.setValue(value);
    Knob1.changed();
}

Panel1.setPaintRoutine(function(g)
{
    g.fillAll(Colours.black);
    
    if (this.data.inTheZone)
    {
        g.setColour(Colours.white);
        g.fillTriangle([this.getWidth() - 30, this.getHeight() - 30, 30, 30], Math.PI / 10);
    }
});

Panel1.setMouseCallback(function(event) {
   
    if (event.x >= this.getWidth() - 30 && event.y >= this.getHeight() - 30)
    {        
        if (event.clicked)
        {
            this.data.resizing = true;
            this.data.width = this.getWidth();
            this.data.height = this.getHeight();
        }
        
        this.data.inTheZone = true;
    }
    else
    {
        this.data.inTheZone = false;
    }

    if (event.mouseUp)
        this.data.resizing = false;
    
    if (this.data.resizing)
    {
        var p1 = 1 + 1 / this.data.width * event.dragX;
        var p2 = 1 + 1 / this.data.height * event.dragY;
        this.setValue(Math.range(p1 * p2, 0, 1));
        this.changed();
    }
    
    this.repaint();
});





//TABS--------------------------------------------------------------------------------------------------

const var NUM_BUTTONS = 4;
const var buttons = [];
const var panels = [];

for (i = 0; i < NUM_BUTTONS; i++)
{
    buttons[i] = Content.getComponent("MainDisTabBtn" + (i+1));
    panels[i] = Content.getComponent("MainDisTab" + (i+1));
    buttons[i].setControlCallback(onMainDisTabBtnControl);
}

inline function onMainDisTabBtnControl(component, value)
{
    local idx = buttons.indexOf(component);
    
    for (i = 0; i < panels.length; i++)
    {
        panels[i].showControl(idx == i);
    }
    
}






// PANEL VISIBILITY----------------------------------------------------------------------------------------------------------------------------




// PRESET BROWSER--------------------------------------------------------------------------------------------------------------------------------


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


inline function onPresetHiddenKnbControl(component, value)
{
	if (Engine.getCurrentUserPresetName() == "")
	    Content.getComponent("PresetName").set("text", "P R E S E T S");
	else
	    Content.getComponent("PresetName").set("text", Engine.getCurrentUserPresetName());
};


Content.getComponent("PresetHiddenKnb").setControlCallback(onPresetHiddenKnbControl);

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


	// SAVE PRESET

//----------------------------------------------------------------------------------------------------------------------------


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

    

const var DynamicPnl3 = Content.getComponent("DynamicPnl3");

inline function onEQVisibilityBtnControl(component, value)
{
	// EQ
    DynamicPnl3.showControl(value);
};

Content.getComponent("EQVisibilityBtn").setControlCallback(onEQVisibilityBtnControl);


// HIGHLIGHT


const var WaveformGenerator1 = Synth.getChildSynth("Waveform Generator1");

// Generator1

const var Gen1EnableWaveform2 = Content.getComponent("Gen1EnableWaveform2");
const var DetuneH2Pnl1 = Content.getComponent("DetuneH2Pnl1");
const var WaveformH2Pnl1 = Content.getComponent("WaveformH2Pnl1");


inline function onGen1EnableWaveform2Control(component, value)
{
	
    WaveformGenerator1.setAttribute(WaveformGenerator1.EnableSecondOscillator, value);
    
    //Highlight Waveform2
    DetuneH2Pnl1.showControl(value);
    WaveformH2Pnl1.showControl(value);
    
    
};


Content.getComponent("Gen1EnableWaveform2").setControlCallback(onGen1EnableWaveform2Control);

//

const var WaveformGenerator2 = Synth.getChildSynth("Waveform Generator2");

//Generator 2

const var Gen2EnableWaveform2 = Content.getComponent("Gen2EnableWaveform2");
const var DetuneH2Pnl2 = Content.getComponent("DetuneH2Pnl2");
const var WaveformH2Pnl2 = Content.getComponent("WaveformH2Pnl2");


inline function onGen2EnableWaveform2Control(component, value)
{
	
    WaveformGenerator2.setAttribute(WaveformGenerator2.EnableSecondOscillator, value);
    
    //Highlight Waveform2
    DetuneH2Pnl2.showControl(value);
    WaveformH2Pnl2.showControl(value);
    
    
};


Content.getComponent("Gen2EnableWaveform2").setControlCallback(onGen2EnableWaveform2Control);

//

const var Generator2Enable = Content.getComponent("Generator2Enable");
const var DetuneH1Pnl2 = Content.getComponent("DetuneH1Pnl2");
const var WaveformH1Pnl2 = Content.getComponent("WaveformH1Pnl2");


inline function onGenerator2EnableControl(component, value)
{
    WaveformGenerator2.setBypassed(!value);
    DynamicPnl2.set("enabled", value);
    
    //Highlight Generator2 Waveform1
	DetuneH1Pnl2.showControl(value);
    WaveformH1Pnl2.showControl(value);
};

Content.getComponent("Generator2Enable").setControlCallback(onGenerator2EnableControl);


//----------------------------------------------------------------------------------------------------------------------------

//DISPLAY VALUES----------------------------------------------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------------------------
//SOUND SETTINGS
//----------------------------------------------------------------------------------------------------------


//XY PAD----------------------------------------------------------------------------------------------------------------------------

//variables-----------------------------------------------------------------------------------------

//knobs used by the panel to make the ellipse move correctly
const var grpPadKnob = [];

//actual values you want to get for your parameters
const var grpValueLabel = [];
const var grpValKnob = [];
const var posVal = [0, 0, 0, 0];


for (i = 0; i < 4; i++)
{
    grpPadKnob[i] = Content.getComponent("padKnob"+(i+1));
    grpValueLabel[i] = Content.getComponent("LblXY"+(i+1));
    grpValKnob[i] = Content.getComponent("knobCtrlVal"+(i+1));
    
    grpPadKnob[i].setControlCallback(XYPad);
}

//-------------------------------------------------------------------------------------------------

//XY Pad Control-----------------------------------------------------------------------------------
const var XYPadPnl = Content.getComponent("XYPadPnl");
const var knobs = []; 

// Mouse CB
XYPadPnl.setMouseCallback(function(event)
{
    if (event.clicked || event.drag  || event.mousewheel)
    {
        this.data.x = Math.range(event.x / this.getWidth(), 0,  1);
        this.data.y = Math.range(event.y / this.getHeight(), 0, 1);       
        grpPadKnob[0].setValue(1*this.data.x);
        grpPadKnob[1].setValue(1-(1*this.data.y));
        grpPadKnob[2].setValue(1*this.data.y);
        grpPadKnob[3].setValue(1-(1*this.data.x));
        grpPadKnob[0].changed();
        grpPadKnob[1].changed();
        grpPadKnob[2].changed();
        grpPadKnob[3].changed();        
    }    
});
//-------------------------------------------------------------------------------------------------

// Paint routine---------------------------------------------------------------------------------------------
XYPadPnl.setPaintRoutine(function(g){    
    g.fillAll(this.get("itemColour"));
    
    g.setColour(Colours.grey);
    //g.drawLine(0, this.getWidth(), 0, this.getHeight(), 0.5);
    //g.drawLine(0, this.getWidth(), this.getHeight(), 0, 0.5);
    
    var w = this.getWidth();
    var h = this.getHeight();
    
    var x = Math.range(grpPadKnob[0].getValue() / 1 * w, 0, w);
    var y = h - Math.range(grpPadKnob[1].getValue() / 1 * h, 0, h);

    posVal[0] = (1-x/w) - y/h;
    posVal[1] = y/w - x/h;
    posVal[2] = x/w - y/h;
    posVal[3] = (y/w + x/h)-1;

    g.fillEllipse([x-5, y-5, 10, 10]);
    //g.drawRect([x, y, 40, 40], 4);
    g.drawLine(0, x, 0, y, 1);
    g.drawLine(this.getWidth(), x, 0, y, 1);
    g.drawLine(this.getHeight(), x, this.getHeight(), y, 1);
    g.drawLine(0, x, this.getWidth(), y, 1);   
    //g.setColour(Colours.grey);
    //g.setFont("GUI-Barlow-Medium", 14.0);
    //g.drawAlignedText(127-x, [x+2, y-140, 200, this.getHeight()], "left");
    //g.drawAlignedText(127-y, [x, y-120, 37, this.getHeight()], "right");
});
//-------------------------------------------------------------------------------------------------


//Knob-Function-----------------------------------------------------------------------------------
inline function XYPad(component, value)
{
    for (i = 0; i < grpValKnob.length; i++)
    {                        
        if (posVal[i] >= 0)
        {
            grpValueLabel[i].set("text", posVal[i]);
            grpValKnob[i].setValue(posVal[i]);
        }
        // or whatever you want to do
    }
    


    //Control Knob 1 and Label 1 and set any Attribues
	    //Do stuff : Use posVal[0]
	    
    
	    //WaveformGenerator1.setAttribute(WaveformGenerator1.Mix,posVal[0]);

	  
    //Control Knob 2 and Label 2 and set any Attribues
        //Do stuff : Use posVal[1]
    
    //Control Knob 3 and Label 3 and set any Attribues
        //Do stuff : Use posVal[2]
    
    //Control Knob 4 and Label 4 and set any Attribues
        //Do stuff : Use posVal[3]
    
    XYPadPnl.repaint();
};
//-------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------
//ANALYZER & VISUALIZATION
//----------------------------------------------------------------------------------------------------------


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


const var VuMeterLeft = createFilmStripVuMeter("VuMeterLeft", 1450, 100, false);
const var VuMeterRight = createFilmStripVuMeter("VuMeterRight", 1410, 100, true);


//----------------------------------------------------------------------------------------------------------------------------




// MACROS----------------------------------------------------------------------------------------------------------------------------

Engine.setFrontendMacros(["LFO1", "LFO2", "LFO3", "LFO4"]);

// ENDLESS KNOB----------------------------------------------------------------------------------------------------------------------------


function onNoteOn()
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
 