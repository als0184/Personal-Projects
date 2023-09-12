#Persistent  ; Keep the script running
clipboardHistory := []  ; Initialize an empty array...
currentIndex := 0
isScriptChange := false ; Flag to check if the clipboard change was triggered by script

OnClipboardChange:
    if (isScriptChange) ; If the change was triggered by our script, reset the flag and return
    {
        isScriptChange := false
        return
    }
    
    ; Add new clipboard content to the start of the history
    clipboardHistory.InsertAt(1, Clipboard)
    
    ; Limit the history to the last 3 copies...
    if (clipboardHistory.Length() > 3)
    {
        clipboardHistory.RemoveAt(4)
    }
    currentIndex := 1
return

; Use Ctrl+Shift+V to cycle through clipboard history
^+v::
    ; If there's no history, exit
    if (clipboardHistory.Length() = 0)
        return
    
    currentIndex++
    if (currentIndex > clipboardHistory.Length())
    {
        currentIndex := 1
    }
    
    ; Set the clipboard to the current index
    isScriptChange := true 
    Clipboard := clipboardHistory[currentIndex]
    
    ; Send a paste command
    Send, ^v
return
