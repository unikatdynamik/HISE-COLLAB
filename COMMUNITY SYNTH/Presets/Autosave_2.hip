Processor 
Type SynthChain ID 
TEST ARP Bypassed Gain 	      �?Balance 	        VoiceLimit 	      P@KillFadeTime 	      4@IconColour 0 packageName  BuildVersion �  EditorStates BodyShown 0 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors  Processor Type ScriptProcessor ID Interface Bypassed Script iContent.makeFrontInterface(600, 700);

//this was from David-------------------------------------

reg lastKey = -99;

inline function onButton1Control(component, value)
{
	if (lastKey != -99){
		Console.print("You are holding down " + Engine.getMidiNoteName(lastKey));	
		eventId = Synth.playNote(lastKey, 100);	
		}
};
Content.getComponent("Button1").setControlCallback(onButton1Control);
//------------
const var Arpeggiator1 = Synth.getMidiProcessor("Arpeggiator1");



//this was my Play-Button. This play C3 (60)
//Play-Button----------------------------------------------------------------------------
reg eventId = -99;
const var btnPlay = Content.getComponent("btnPlay");
inline function onbtnPlayControl(component, value)
{
    if (value)
    {
	    eventId = Synth.playNote(60, 100);	    
    }
	else
    {
	    Synth.noteOffByEventId(eventId);	    
    }
};
Content.getComponent("btnPlay").setControlCallback(onbtnPlayControl);
function onNoteOn()
{
	lastKey = Message.getNoteNumber();
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
  EditorStates BodyShown 1 Visible 1 Solo 0 contentShown 1 onInitOpen 1  ChildProcessors   Content  Control type ScriptButton id 	Button1 value 	         Control type ScriptButton id 	btnPlay value 	         UIData  ContentProperties DeviceType 	Desktop Component type ScriptFloatingTile id FloatingTile1 x 	      4@y 	      E@ContentType PresetBrowser bgColour 	   �    itemColour 	����    itemColour2 	����    Data -{
  "ShowSaveButton": true,
  "ShowExpansionsAsColumn": false,
  "ShowFolderButton": true,
  "ShowNotes": true,
  "ShowEditButtons": true,
  "ShowFavoriteIcon": true,
  "NumColumns": 3,
  "ColumnWidthRatio": [
    0.3333333333333333,
    0.3333333333333333,
    0.3333333333333333
  ]
} width 	     h�@height 	     Py@Font a Aksentuasi  Component type ScriptButton id 	Button1 x 	      C@y 	     �|@ Component type ScriptPanel id Play_Panel x 	      Q@y 	     (�@width 	     �V@height 	     @U@textColour 4286743170 borderSize 	        borderRadius 	        itemColour 0 itemColour2 0 bgColour 0 Component 	type ScriptButton id 	btnPlay x 	        y 	        width 	     @U@height 	     @U@filmstripImage  {PROJECT_FOLDER}btn_play_2.png textColour 4286743170 parentComponent Play_Panel  Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type AudioLooper ID Audio Loop Player1 Bypassed Gain 	      �?Balance 	        VoiceLimit 	      p@KillFadeTime 	      4@IconColour 0 SyncMode 	      �?PitchTracking 	      �?LoopEnabled 	        RootNote 	      P@SampleStartMod 	        Reversed 	        FileName  min     max     loopStart     loopEnd     EditorStates BodyShown 1 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor Type ScriptProcessor ID Script Processor1 Bypassed Script � function onNoteOn()
{
		if (Message.getNoteNumber() != 60)
	    Message.ignoreEvent(true);	    
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
  EditorStates 
BodyShown 1 Visible 1 Solo 0 contentShown 1 onInitOpen 1 onNoteOnOpen 0 onNoteOffOpen 0 onControllerOpen 0 onTimerOpen 0 onControlOpen 0  ChildProcessors   Content   UIData  ContentProperties DeviceType 	Desktop  Processor Type Arpeggiator ID Arpeggiator1 Bypassed EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   Content  Control type ScriptButton id BypassButton value 	         Control type ScriptButton id ResetButton value 	         Control type ScriptSlider id NumStepSlider value 	      @ Control type ScriptSlider id StepReset value 	         Control type ScriptSlider id StepSkipSlider value 	      �? Control type ScriptButton id SortKeysButton value 	         Control type ScriptSlider id SpeedKnob value 	      &@ Control type ScriptComboBox id SequenceComboBox value 	      �? Control type ScriptSlider id OctaveRange value 	         Control type ScriptSlider id 	Shuffle value 	         Control type ScriptButton id EnableTie value 	      �? Control type ScriptSliderPack id SemiToneSliderPack value 	      @data 16......C...9C...3u...LAA  Control type ScriptSliderPack id VelocitySliderPack value 	      @data 16....3.A..fHD..PqP...pBA  Control type ScriptSliderPack id LengthSliderPack value 	        data 16....MBA...GD...VP...EBA  Control type ScriptComboBox id ChannelSelector value 	      �? Control type ScriptComboBox id OutputChannelSelector value 	      �? Control type ScriptComboBox id MPEStartChannel value 	       @ Control type ScriptComboBox id MPEEndChannel value 	      0@ Control type ScriptButton id Hold value 	         Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor 	Type SimpleEnvelope ID DefaultEnvelope1 Bypassed Monophonic 	        Retrigger 	      �?Intensity 	      �?Attack 	      @Release 	      $@LinearMode 	      �?EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Attack Time Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� macro_controls  macro name 	Macro 1 value 0.0 midi_cc -1  macro name 	Macro 2 value 0.0 midi_cc -1  macro name 	Macro 3 value 0.0 midi_cc -1  macro name 	Macro 4 value 0.0 midi_cc -1  macro name 	Macro 5 value 0.0 midi_cc -1  macro name 	Macro 6 value 0.0 midi_cc -1  macro name 	Macro 7 value 0.0 midi_cc -1  macro name 	Macro 8 value 0.0 midi_cc -1  MidiAutomation   MPEData Enabled  