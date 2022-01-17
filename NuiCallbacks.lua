---------------------------------------------------------------------------
-- NUI CALLBACKS
---------------------------------------------------------------------------
RegisterNUICallback("bub-notify::closeSettings", function(data, callback)
	SetNuiFocus(false, false)
	callback("ok")
end)