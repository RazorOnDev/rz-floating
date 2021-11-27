fx_version 'cerulean'
game 'gta5'
 
author 'dsc.gg/rzshop'
 
ui_page 'ui/index.html'
 
files ({ 
    'ui/*.html',
    'ui/js/*.js',
    'ui/css/*.css', 
    'ui/fonts/*.ttf',
    'ui/fonts/*.otf'
})
 
client_scripts { 
    'Client/CLmain.lua' 
}

exports {
    'showFloating'
}