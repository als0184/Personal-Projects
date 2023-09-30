Set objShell = CreateObject("Shell.Application")
objShell.MinimizeAll
Set objShell = Nothing

Set objShell = WScript.CreateObject("WScript.Shell")
objShell.SendKeys "^{F10}", True
WScript.Sleep 100
objShell.SendKeys "v", True
WScript.Sleep 100
objShell.SendKeys "i", True
WScript.Sleep 100
objShell.SendKeys "{ESC}", True

Set objShell = CreateObject("Shell.Application")
objShell.UndoMinimizeALL
Set objShell = Nothing

