---@param title string
---@param text string
---@param icon string :: Choose which icons you wanna use here: https://fonts.google.com/icons?selected=Material+Icons
    -- Choose your icon
    -- Take <span class="">iconName</span> version
    -- Insert it on the icon parameter.
---@param duration integer

RegisterNetEvent('bub-notify:showNotify')
AddEventHandler('bub-notify:showNotify', function(title, text, icon, duration)
    SendNUIMessage({
        type = "showNotification",
        title = title,
        text = text,
        icon = icon,
        duration = duation,
    })
end)

RegisterNetEvent('bub-notify:openNotificationMenu')
AddEventHandler('bub-notify:openNotificationMenu', function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = "setNotificationSettings",
        bool = true,
    })
end)

RegisterCommand(Config.Command, function()
    print("Hello")
    TriggerEvent('bub-notify:openNotificationMenu')
end)

