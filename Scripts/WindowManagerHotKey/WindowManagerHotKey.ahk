; Center window with while keeping size Ctrl+Alt+C
^!c::

; Get the size of the active window
WinGetPos, , , Width, Height, A  
; Get the screen width
ScreenWidth := A_ScreenWidth 
; Get the screen height
ScreenHeight := A_ScreenHeight 
; Calculate the new X position
NewX := (ScreenWidth - Width) // 2  
; Calculate the new Y position
NewY := (ScreenHeight - Height) // 2 
; Move the active window to the new position
WinMove, A,, NewX, NewY
return

; Move window to the left half of the screen with Ctrl+Alt+Left
^!Left::
WinMove, A,, 0, 0, A_ScreenWidth // 2, A_ScreenHeight
return

; Move window to the right half of the screen with Ctrl+Alt+Right
^!Right::
WinMove, A,, A_ScreenWidth // 2, 0, A_ScreenWidth // 2, A_ScreenHeight
return

; Move window to the top half of the screen with Ctrl+Alt+Up
^!Up::
WinMove, A,, 0, 0, A_ScreenWidth, A_ScreenHeight // 2
return

; Move window to the bottom half of the screen with Ctrl+Alt+Down
^!Down::
WinMove, A,, 0, A_ScreenHeight // 2, A_ScreenWidth, A_ScreenHeight // 2
return