#Persistent

clipboardHistory := []  ; Initialize an empty array...
currentIndex := 0
isScriptChange := false 

OnClipboardChange:
    if (isScriptChange) 
    {
        isScriptChange := false
        return
    }
    
    ; Add new clipboard content to the start of the history
    clipboardHistory.InsertAt(1, Clipboard)
    
    ; Limit the history to the last 3 copies... edit this value if you want to increase the amount of copied items you have saved
    if (clipboardHistory.Length() > 3)
    {
    ; Remove the oldest entry. Adjust this value if the history size limit is changed        
        clipboardHistory.RemoveAt(4)
    }
    currentIndex := 1
return

; Use Ctrl+Shift+V to cycle through clipboard history
^+v::
    if (clipboardHistory.Length() = 0)
        return
    
    currentIndex++
    if (currentIndex > clipboardHistory.Length())
    {
        currentIndex := 1
    }
    isScriptChange := true 
    Clipboard := clipboardHistory[currentIndex]
    
    ; Send a paste command
    Send, ^v
return