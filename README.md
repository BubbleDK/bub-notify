# bub-notify
 
Requirements:
- None

Installation:
- Drag the bub-notify folder into your resource folder
- ensure bub-notify in your server.cfg
- Enjoy your script!


Notifications:
---@param title string
---@param text string
---@param icon string :: Choose which icons you wanna use here: https://fonts.google.com/icons?selected=Material+Icons
    -- Choose your icon
    -- Take <span class="">iconName</span>
    -- Insert it on the icon parameter.
---@param duration integer (IN MS)

--- EXAMPLE CLIENT :: TriggerEvent('bub-notify:showNotify', 'This is the title', 'This is the text', '<span class="material-icons">settings</span>', 3000)
--- EXAMPLE SERVER :: TriggerClientEvent('bub-notify:showNotify', source, 'This is the title', 'This is the text', '<span class="material-icons">settings</span>', 3000)

# Permanent Discord Invite: https://discord.gg/urDEgc6nac (For support, and to be notified about updates)
