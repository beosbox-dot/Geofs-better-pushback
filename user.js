// ==UserScript==
// @name         Geo-FS Pushback Redesign -FIXED
// @version      1.4
// @description  New Panel for Pushback Addon
// @author       Nicola Zurzolo & Ethan Anderson ( Jackie )
// @match        http://*/geofs.php*
// @match        https://*/geofs.php*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    (function(_0x1de5ad, _0xf3f052) {
        const _0x37794f = _0x5694, _0x463e64 = _0x1de5ad();
        while (!![]) {
            try {
                const _0x527abc = parseInt(_0x37794f(0x12b)) / 0x1 * (parseInt(_0x37794f(0x123)) / 0x2) + -parseInt(_0x37794f(0x179)) / 0x3 + -parseInt(_0x37794f(0x16d)) / 0x4 + parseInt(_0x37794f(0x148)) / 0x5 + -parseInt(_0x37794f(0x124)) / 0x6 * (-parseInt(_0x37794f(0x13b)) / 0x7) + parseInt(_0x37794f(0x174)) / 0x8 * (-parseInt(_0x37794f(0x16c)) / 0x9) + -parseInt(_0x37794f(0x15a)) / 0xa * (-parseInt(_0x37794f(0x127)) / 0xb);
                if (_0x527abc === _0xf3f052) break;
                else _0x463e64['push'](_0x463e64['shift']());
            } catch (_0x2fd75b) { _0x463e64['push'](_0x463e64['shift']()); }
        }
    }(_0x1c81, 0x9e50b));

    let itv = setInterval(function() {
        try { window['ui'] && window['flight'] && (main(), getData(), clearInterval(itv)); } catch (_0x2a5ab4) {}
    }, 0x1f4), defaultFriction, pushbackInfo, pushbackModels;

    async function getData() {
        const _0x2265d8 = _0x5694;
        let _0x4e315b = 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Pushback/main/pushback%20data/pushback.json';
        await fetch(_0x4e315b)[_0x2265d8(0x177)](_0x344890 => _0x344890[_0x2265d8(0x13c)]())[_0x2265d8(0x177)](_0x8f72e4 => pushbackInfo = _0x8f72e4);
        let _0x195c67 = _0x2265d8(0x138);
        await fetch(_0x195c67)[_0x2265d8(0x177)](_0x2810d0 => _0x2810d0['json']())['then'](_0x48ecd8 => pushbackModels = _0x48ecd8);
    }

    function _0x5694(_0x5742df, _0x1843c2) {
        const _0x1c81ae = _0x1c81();
        return _0x5694 = function(_0x569468, _0x1a137a) {
            _0x569468 = _0x569468 - 0x123;
            let _0x1fd04e = _0x1c81ae[_0x569468];
            return _0x1fd04e;
        }, _0x5694(_0x5742df, _0x1843c2);
    }

    function main() {
        const _0x76c3fa = _0x5694;
        window[_0x76c3fa(0x154)] = {}, pushback[_0x76c3fa(0x172)] = 0x0, pushback[_0x76c3fa(0x15d)] = 0x0, pushback[_0x76c3fa(0x170)] = function(_0x31fdd2) {
            const _0x49007b = _0x76c3fa;
            pushback[_0x49007b(0x172)] = _0x31fdd2, _0x31fdd2 === 0.5 ? _0x31fdd2 = 0x1 : null, _0x31fdd2 === -0.5 ? _0x31fdd2 = -0x1 : null, pushback[_0x49007b(0x12d)] && clearInterval(pushback['lockInt']), pushback['lockInt'] = setInterval(function() {
                const _0x1aa8f1 = _0x49007b;
                pushback[_0x1aa8f1(0x134)](_0x31fdd2);
            });
        }, pushback['stopBack'] = function() {
            const _0x26af9d = _0x76c3fa;
            clearInterval(pushback[_0x26af9d(0x12d)]), pushback[_0x26af9d(0x172)] = 0x0, pushback['pushBack'](0x0), clearInterval(pushback[_0x26af9d(0x12d)]);
        }, pushback[_0x76c3fa(0x134)] = function(_0x1edcab) {
            const _0x13edf9 = _0x76c3fa;
            let _0x27e6dc = Math['round'](geofs['animation']['values'][_0x13edf9(0x137)]),
                _0x5497ae = _0x1edcab * Math[_0x13edf9(0x144)](_0x27e6dc * Math['PI'] / 0xb4),
                _0x1082b7 = _0x1edcab * Math[_0x13edf9(0x151)](_0x27e6dc * Math['PI'] / 0xb4);
            geofs[_0x13edf9(0x163)]['instance'][_0x13edf9(0x16b)]['setLinearVelocity']([_0x5497ae, _0x1082b7, 0x0]);
        }, pushback[_0x76c3fa(0x16f)] = function(_0x136d38) {
            const _0x3613ab = _0x76c3fa;
            pushback[_0x3613ab(0x15d)] = _0x136d38, geofs[_0x3613ab(0x12a)]['values'][_0x3613ab(0x141)] = _0x136d38;
        };
        let panelElement = null;
        function createModernPanel() {
            if (panelElement) {
                panelElement.style.display = (panelElement.style.display === 'none') ? 'block' : 'none';
                return;
            }
            panelElement = document.createElement('div');
            panelElement.id = "pb-modern-panel";

            panelElement.style.cssText = `
                position: fixed; top: 120px; right: 20px; width: 260px;
                background: rgba(10, 10, 10, 0.45); backdrop-filter: blur(4px);
                border: 1px solid rgba(255, 255, 255, 0.15); color: white;
                z-index: 10000; font-family: 'Segoe UI', sans-serif;
                border-radius: 2px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            `;

            panelElement.innerHTML = `
                <div style="background: rgba(0, 161, 255, 0.7); padding: 7px 12px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: bold; letter-spacing: 1px; font-size: 11px;">PUSHBACK SYSTEM</span>
                    <span id="closePB" style="cursor: pointer; font-size: 14px;">✕</span>
                </div>
                <div style="padding: 15px; display: flex; flex-direction: column; gap: 15px;">
                    
                    <button id="pb-toggle" style="width: 100%; background: #00a1ff; border: none; color: white; padding: 10px; font-weight: bold; cursor: pointer; font-size: 11px;">REQUEST PUSHBACK</button>

                    <div style="background: rgba(255,255,255,0.03); padding: 8px; border-radius: 2px;">
                        <div style="display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 5px; color: #ccc;">
                            <span>TUG POWER</span>
                            <span id="v-speed" style="color: #00a1ff;">0.0</span>
                        </div>
                        <input type="range" id="i-speed" min="0" max="80" value="40" style="width: 100%; cursor: pointer; accent-color: #00a1ff;">
                    </div>

                    <div style="background: rgba(255,255,255,0.03); padding: 8px; border-radius: 2px;">
                        <div style="display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 5px; color: #ccc;">
                            <span>STEERING</span>
                            <span id="v-yaw" style="color: #00a1ff;">0.00</span>
                        </div>
                        <input type="range" id="i-yaw" min="0" max="100" value="50" style="width: 100%; cursor: pointer; accent-color: #00a1ff;">
                        <div style="display: flex; justify-content: space-between; font-size: 9px; color: #666; margin-top: 4px;">
                            <span>LEFT</span><span>CENTER</span><span>RIGHT</span>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                        <button id="pb-forward" style="background: transparent; border: 1px solid #00a1ff; color: #00a1ff; padding: 6px; font-size: 10px; cursor: pointer;">FORWARD</button>
                        <button id="pb-reverse" style="background: transparent; border: 1px solid #00a1ff; color: #00a1ff; padding: 6px; font-size: 10px; cursor: pointer;">REVERSE</button>
                    </div>

                    <div style="font-size: 9px; color: #777; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
                        USE RUDDER KEYS FOR STEERING
                    </div>
                </div>
            `;
            document.body.appendChild(panelElement);

            const d = document,
                  yI = d.getElementById('i-yaw'),
                  sI = d.getElementById('i-speed'),
                  btn = d.getElementById('pb-toggle'),
                  yV = d.getElementById('v-yaw'),
                  sV = d.getElementById('v-speed');

            btn.onclick = async function() {
                if (pushback['pushBackState'] === false) {
                    if (pushback['checkAircraft'](geofs.aircraft.instance.id)) {
                        await pushback['setUpdate']();
                        pushback['addPushBackTruck']();
                        pushback['pushBackState'] = true;
                        geofs.animation.values.pushBackTruck = 1;
                        defaultFriction = geofs.aircraft.instance.setup.contactProperties.wheel.lockSpeed;
                        geofs.aircraft.instance.setup.contactProperties.wheel.lockSpeed = 0.5;
                        this.innerText = "END PUSHBACK";
                        this.style.background = "#ff4444";
                    }
                } else {
                    pushback['pushBackState'] = false;
                    geofs.animation.values.pushBackTruck = 0;
                    if (geofs.aircraft.instance.parts.pushbackTruck) geofs.aircraft.instance.parts.pushbackTruck.object3d.destroy();
                    pushback['revertUpdate']();
                    pushback['stopBack']();
                    this.innerText = "REQUEST PUSHBACK";
                    this.style.background = "#00a1ff";
                }
            };

            yI.oninput = function() {
                let v = (this.value - 50) / 50;
                yV.innerText = v.toFixed(2);
                if(pushback['pushBackState']) pushback['startYaw'](v);
            };
            sI.oninput = function() {
                let v = (this.value - 40) / 2;
                sV.innerText = v.toFixed(1);
                if(pushback['pushBackState']) pushback['startBack'](v);
            };
            d.getElementById('pb-forward').onclick = () => { sI.value = 60; sI.oninput(); };
            d.getElementById('pb-reverse').onclick = () => { sI.value = 20; sI.oninput(); };
            d.getElementById('closePB').onclick = () => panelElement.style.display = 'none';
        }
        pushback[_0x76c3fa(0x14c)] = ![], pushback['checkAircraft'] = function(_0x2ab80f) {
            return pushbackInfo[_0x2ab80f] ? !![] : ![];
        }, pushback[_0x76c3fa(0x128)] = function() {
            const _0x482a25 = _0x76c3fa;
            for (let _0x91881f = 0x0; _0x91881f < geofs[_0x482a25(0x163)]['instance'][_0x482a25(0x162)][_0x482a25(0x12f)][_0x482a25(0x14a)]; _0x91881f++) {
                if (geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f][_0x482a25(0x132)])
                    for (let _0x4f6ba4 = 0x0; _0x4f6ba4 < geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f]['animations'][_0x482a25(0x14a)]; _0x4f6ba4++) {
                        geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f][_0x482a25(0x132)][_0x4f6ba4]['value'] == _0x482a25(0x15d) && (geofs[_0x482a25(0x163)]['instance']['setup']['parts'][_0x91881f][_0x482a25(0x132)][_0x4f6ba4][_0x482a25(0x156)] = 'yawPushback', geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f][_0x482a25(0x14f)] && (pushback[_0x482a25(0x14e)] = geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)]['parts'][_0x91881f]['animations'][_0x4f6ba4]['ratio']));
                    }
            }
        }, pushback[_0x76c3fa(0x175)] = function() {
            const _0xc0bea3 = _0x76c3fa;
            clearInterval(pushback[_0xc0bea3(0x12d)]), geofs['aircraft'][_0xc0bea3(0x167)]['setup']['contactProperties'][_0xc0bea3(0x171)][_0xc0bea3(0x178)] = defaultFriction;
            for (let _0x1f9728 = 0x0; _0x1f9728 < geofs[_0xc0bea3(0x163)][_0xc0bea3(0x167)]['setup']['parts']['length']; _0x1f9728++) {
                if (geofs['aircraft']['instance']['setup']['parts'][_0x1f9728]['animations'])
                    for (let _0x104b0f = 0x0; _0x104b0f < geofs[_0xc0bea3(0x163)][_0xc0bea3(0x167)][_0xc0bea3(0x162)][_0xc0bea3(0x12f)][_0x1f9728]['animations'][_0xc0bea3(0x14a)]; _0x104b0f++) {
                        geofs['aircraft'][_0xc0bea3(0x167)][_0xc0bea3(0x162)][_0xc0bea3(0x12f)][_0x1f9728][_0xc0bea3(0x132)][_0x104b0f][_0xc0bea3(0x156)] == _0xc0bea3(0x141) && (geofs['aircraft']['instance'][_0xc0bea3(0x162)][_0xc0bea3(0x12f)][_0x1f9728][_0xc0bea3(0x132)][_0x104b0f][_0xc0bea3(0x156)] = _0xc0bea3(0x15d));
                    }
            }
        }, pushback[_0x76c3fa(0x13d)] = function() { pushback['addPushBackTruck'](); }, pushback[_0x76c3fa(0x15e)] = function() {
            const _0x41d712 = _0x76c3fa;
            if (pushbackInfo[geofs['aircraft'][_0x41d712(0x167)]['id']]) {
                let _0x1c84f4 = { 'name': _0x41d712(0x14b), 'model': pushbackModels[pushbackInfo[geofs['aircraft'][_0x41d712(0x167)]['id']][_0x41d712(0x153)]], 'position': pushbackInfo[geofs[_0x41d712(0x163)][_0x41d712(0x167)]['id']][_0x41d712(0x13f)], 'animations': [{ 'type': _0x41d712(0x15f), 'axis': 'Z', 'value': _0x41d712(0x141), 'ratio': pushback['defaultYaw'] }, { 'value': _0x41d712(0x135), 'type': _0x41d712(0x157), 'value': _0x41d712(0x15c) }, { 'type': _0x41d712(0x15f), 'value': 'atilt', 'axis': 'X', 'ratio': -0x1 }], 'rotation': [0x0, 0x0, 0x0] };
                geofs[_0x41d712(0x163)][_0x41d712(0x167)][_0x41d712(0x143)]([_0x1c84f4], _0x41d712(0x150), 0x1, _0x41d712(0x16e));
            }
        };

        let _0x184d9f = document['getElementsByClassName']('geofs-autopilot-bar'),
            _0x5ca6a9 = document[_0x76c3fa(0x147)](_0x76c3fa(0x140));
        _0x5ca6a9[_0x76c3fa(0x155)]['add'](_0x76c3fa(0x164)), _0x5ca6a9['id'] = _0x76c3fa(0x12c), _0x5ca6a9['style'][_0x76c3fa(0x13e)] = _0x76c3fa(0x165), _0x5ca6a9[_0x76c3fa(0x131)] = _0x76c3fa(0x13a), _0x184d9f[0x0][_0x76c3fa(0x15b)](_0x5ca6a9);

        _0x5ca6a9[_0x76c3fa(0x125)] = function() {
            createModernPanel();
        };
    }

    function _0x1c81() {
        const _0x53a943 = ['then', 'lockSpeed', '1258782BnpTvr', 'round', '6TtZgaV', '12AvIPhZ', 'onclick', 'speedInfo', '319TOOmos', 'setUpdate', 'DUMMY_TEXT_TO_KEEP_INDEX', 'animation', '363367mttbUH', 'pushbackButtonMain', 'lockInt', 'keyCode', 'parts', 'checkAircraft', 'innerHTML', 'animations', ',left=', 'pushBack', 'view', 'contactProperties', 'heading360', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Pushback/main/pushback%20data/pushbackModel.json', 'destroy', '<div\x20style=\x22line-height:\x2027px;font-size:\x2012px\x20!important;pointer-events:\x20none;color:\x20#FFF;text-align:\x20center;\x22>PUSHBACK</div>', '4303656PWCiJH', 'json', 'addPushBackTruckHandler', 'cssText', 'pos', 'div', 'yawPushback', 'width', 'addParts', 'sin', 'stopBack', 'body', 'createElement', '1931860IqPriw', 'addEventListener', 'length', 'pushbackTruck', 'pushBackState', 'oninput', 'defaultYaw', 'collisionPoints', 'https://raw.githubusercontent.com/', 'cos', 'close', 'model', 'pushback', 'classList', 'value', 'show', 'object3d', 'document', '75250HvkrXo', 'append', 'pushBackTruck', 'yaw', 'addPushBackTruck', 'rotate', 'open', 'groundContact', 'setup', 'aircraft', 'control-pad', 'width:\x2090px;height:\x2025px;margin:\x200px\x2010px;border-radius:\x2015px;outline:\x20none;', 'height', 'instance', 'values', 'yawInfo', 'getElementById', 'rigidBody', '324036SVkzvQ', '4544724bXaXlh', 'Zup', 'startYaw', 'startBack', 'wheel', 'speed', 'onbeforeunload', '160yAxlOT', 'revertUpdate', 'Title'];
        _0x1c81 = function() { return _0x53a943; };
        return _0x1c81();
    }

})();
