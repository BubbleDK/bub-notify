fx_version 'bodacious'
games { 'gta5' }

ui_page 'ui/index.html'

lua54 'yes'

files {
    'ui/index.html',
    'ui/style.css',
    'ui/libraries/axios.min.js',
    'ui/script.js'
}

client_scripts {
    'client/c_main.lua',
    'NuiCallbacks.lua'
}

shared_scripts {
	'Config.lua'
}