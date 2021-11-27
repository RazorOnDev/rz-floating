
-- Client Side RZ Floating Notify --

--[[ EXAMPLE:
exports['rz-floating']:showFloating('Floating Content Text')
exports['rz-floating']:showFloating('Press ~r~[E]~w~ to interact')
]]

-- Test Command --
RegisterCommand('+testFloating', function()
	showFloating('Press ~r~[E]~w~ to interact.')
end)


-- Functions --
function showFloating(content) 
    SendNUIMessage({
        help = content 
    })
end

RegisterNetEvent('rz-floating:showFloating', function(content)
    showFloating(content)
end)
