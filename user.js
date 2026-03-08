// ==UserScript==
// @name         Geo-FS Pushback Remake
// @version      2.1
// @description  Professional MSFS-inspired Pushback with Realistic Ground Crew Voiceovers
// @author       SirJackie
// @match        http://*/geofs.php*
// @match        https://*/geofs.php*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const VO = {
        synth: window.speechSynthesis,
        _queue: [],
        _busy: false,
        _cfg: { rate: 0.88, pitch: 0.85, volume: 1.0, lang: 'en-US' },

        speak(text, delayMs = 0) {
            setTimeout(() => {
                this._queue.push(text);
                if (!this._busy) this._flush();
            }, delayMs);
        },

        _flush() {
            if (!this._queue.length) { this._busy = false; return; }
            this._busy = true;
            const utt = new SpeechSynthesisUtterance(this._queue.shift());
            Object.assign(utt, this._cfg);
            const voices = this.synth.getVoices();
            const pick = voices.find(v => /male|david|mark|james|guy/i.test(v.name))
                      || voices.find(v => v.lang.startsWith('en'));
            if (pick) utt.voice = pick;
            utt.onend  = () => this._flush();
            utt.onerror = () => this._flush();
            this.synth.speak(utt);
        },

        cancel() {
            this._queue = [];
            this._busy  = false;
            this.synth.cancel();
        }
    };
    window.addEventListener('click', () => {
        if (VO.synth.getVoices().length === 0) VO.synth.getVoices();
    }, { once: true });


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
        window[_0x76c3fa(0x154)] = {}, pushback[_0x76c3fa(0x172)] = 0x0, pushback[_0x76c3fa(0x15d)] = 0x0,
        pushback[_0x76c3fa(0x170)] = function(_0x31fdd2) {
            const _0x49007b = _0x76c3fa;
            pushback[_0x49007b(0x172)] = _0x31fdd2, _0x31fdd2 === 0.5 ? _0x31fdd2 = 0x1 : null, _0x31fdd2 === -0.5 ? _0x31fdd2 = -0x1 : null,
            pushback[_0x49007b(0x12d)] && clearInterval(pushback['lockInt']),
            pushback['lockInt'] = setInterval(function() {
                const _0x1aa8f1 = _0x49007b;
                pushback[_0x1aa8f1(0x134)](_0x31fdd2);
            });
        },
        pushback['stopBack'] = function() {
            const _0x26af9d = _0x76c3fa;
            clearInterval(pushback[_0x26af9d(0x12d)]), pushback[_0x26af9d(0x172)] = 0x0, pushback['pushBack'](0x0), clearInterval(pushback[_0x26af9d(0x12d)]);
        },
        pushback[_0x76c3fa(0x134)] = function(_0x1edcab) {
            const _0x13edf9 = _0x76c3fa;
            let _0x27e6dc = Math['round'](geofs['animation']['values'][_0x13edf9(0x137)]),
                _0x5497ae = _0x1edcab * Math[_0x13edf9(0x144)](_0x27e6dc * Math['PI'] / 0xb4),
                _0x1082b7 = _0x1edcab * Math[_0x13edf9(0x151)](_0x27e6dc * Math['PI'] / 0xb4);
            geofs[_0x13edf9(0x163)]['instance'][_0x13edf9(0x16b)]['setLinearVelocity']([_0x5497ae, _0x1082b7, 0x0]);
        },
        pushback[_0x76c3fa(0x16f)] = function(_0x136d38) {
            const _0x3613ab = _0x76c3fa;
            pushback[_0x3613ab(0x15d)] = _0x136d38, geofs[_0x3613ab(0x12a)]['values'][_0x3613ab(0x141)] = _0x136d38;
        };


        let _parkingBrakeOn       = true;   // tracks ; toggle
        let _completing           = false;  // true while graceful decel in progress
        let _engineWatcherActive  = false;

 
        function setStatus(text, color) {
            const el = document.getElementById('pb-status');
            if (!el) return;
            el.innerText   = text;
            el.style.color = color || '#00a1ff';
        }
        function rampSpeedTo(targetSliderVal, msPerStep, onDone) {
            const sI = document.getElementById('i-speed');
            if (!sI) { onDone && onDone(); return; }
            let sv   = parseFloat(sI.value);
            const step = targetSliderVal > sv ? 1 : -1;
            const ci = setInterval(() => {
                sv += step;
                sI.value = sv;
                sI.oninput();
                if ((step > 0 && sv >= targetSliderVal) ||
                    (step < 0 && sv <= targetSliderVal)) {
                    clearInterval(ci);
                    sI.value = targetSliderVal;
                    sI.oninput();
                    onDone && onDone();
                }
            }, msPerStep);
        }

      
        function _destroyTug() {
            geofs.animation.values.pushBackTruck = 0;
            try {
                if (geofs.aircraft.instance.parts.pushbackTruck)
                    geofs.aircraft.instance.parts.pushbackTruck.object3d.destroy();
            } catch(e) {}
            pushback['revertUpdate']();
            pushback['stopBack']();
        }

       
        function _finalizeEnd(graceful) {
            _completing = false;
            _destroyTug();

            const btn       = document.getElementById('pb-toggle');
            const centerRow = document.getElementById('pb-center-row');
            if (btn)       { btn.innerText = "REQUEST PUSHBACK"; btn.style.background = "#00a1ff"; }
            if (centerRow) centerRow.style.display = 'none';

            _removeKeybinds();

            if (graceful) {
                setStatus('PUSHBACK COMPLETE — START ENGINES', '#00c864');
                startEngineWatcher();
            } else {
                setStatus('STANDBY', '#aaa');
            }
        }

        
        function _endPushback(graceful) {
            if (pushback._brakeWatcher) clearInterval(pushback._brakeWatcher);
            pushback['pushBackState'] = false;

            if (!graceful) {

                VO.cancel();
                VO.speak("Pushback aborted. Disconnecting.");
                _finalizeEnd(false);
                return;
            }

            _completing = true;
            VO.cancel();
            VO.speak("Slowing down.");
            VO.speak("Pushback complete. Clear to start engines.", 2000);
            setStatus('DECELERATING…', '#ffa500');

            rampSpeedTo(40, 40, () => {
                _finalizeEnd(true);
            });
        }

        pushback._endPushback = _endPushback;

        function _onKeyDown(e) {
            if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

            // [ ; ] 
            if (e.key === ';') {
                e.preventDefault();
                _parkingBrakeOn = !_parkingBrakeOn;
                if (_parkingBrakeOn) {
                    geofs.aircraft.instance.setup.contactProperties.wheel.lockSpeed = defaultFriction || 1;
                    setStatus('PARKING BRAKE SET', '#ffa500');
                } else {
                    geofs.aircraft.instance.setup.contactProperties.wheel.lockSpeed = 0.5;
                    setStatus('PARKING BRAKE RELEASED', '#00ff99');
                }
            }

            // Set key Engine
            if (e.key === 'e' || e.key === 'E') {
                if (pushback['pushBackState'] || _completing) {
                    e.preventDefault();
                    e.stopPropagation();
                    try { geofs.aircraft.instance.engine.start(); } catch(err) {}
                    // Nudge animation value so engine watcher fires
                    try { geofs.animation.values.engineOn = 1; } catch(err) {}
                }
            }
        }

        function _addKeybinds()    { document.addEventListener('keydown', _onKeyDown, true); }
        function _removeKeybinds() { document.removeEventListener('keydown', _onKeyDown, true); }

        function startEngineWatcher() {
            if (_engineWatcherActive) return;
            _engineWatcherActive = true;
            let _prev = false;
            const _ei = setInterval(() => {
                try {
                    const on = geofs.animation.values.engineOn  > 0 ||
                               geofs.animation.values.engine1On > 0 ||
                               geofs.animation.values.n1        > 5;
                    if (on && !_prev) {
                        clearInterval(_ei);
                        _engineWatcherActive = false;
                        VO.cancel();
                        VO.speak("Ground crew disconnecting. Headset out.");
                        VO.speak("Have a safe flight. See you next time.", 2200);
                        setStatus('HAVE A NICE FLIGHT', '#00c864');
                    }
                    _prev = !!on;
                } catch(e) {}
            }, 500);
            setTimeout(() => { clearInterval(_ei); _engineWatcherActive = false; }, 600000);
        }

        let panelElement = null;

        function createModernPanel() {
            if (panelElement) {
                panelElement.style.display = (panelElement.style.display === 'none') ? 'block' : 'none';
                return;
            }
            panelElement = document.createElement('div');
            panelElement.id = "pb-modern-panel";
            panelElement.style.cssText = `
                position: fixed; top: 120px; right: 20px; width: 270px;
                background: rgba(10, 10, 10, 0.52); backdrop-filter: blur(6px);
                border: 1px solid rgba(255,255,255,0.15); color: white;
                z-index: 10000; font-family: 'Segoe UI', sans-serif;
                border-radius: 2px; box-shadow: 0 12px 32px rgba(0,0,0,0.6);
                user-select: none;
            `;

            panelElement.innerHTML = `
                <div style="background:rgba(0,161,255,0.72);padding:7px 12px;display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-weight:bold;letter-spacing:1.5px;font-size:11px;">✈ PUSHBACK SYSTEM</span>
                    <span id="closePB" style="cursor:pointer;font-size:14px;">✕</span>
                </div>

                <div style="background:rgba(0,0,0,0.4);padding:5px 12px;border-bottom:1px solid rgba(255,255,255,0.08);text-align:center;">
                    <span id="pb-status" style="font-size:10px;letter-spacing:1px;color:#aaa;">STANDBY</span>
                </div>

                <div style="padding:14px;display:flex;flex-direction:column;gap:13px;">

                    <button id="pb-toggle" style="width:100%;background:#00a1ff;border:none;color:white;padding:10px;font-weight:bold;cursor:pointer;font-size:11px;letter-spacing:1px;border-radius:2px;transition:background 0.2s;">REQUEST PUSHBACK</button>

                    <div style="background:rgba(255,255,255,0.04);padding:9px;border-radius:2px;">
                        <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:6px;color:#ccc;">
                            <span>TUG POWER</span>
                            <span id="v-speed" style="color:#00a1ff;font-weight:bold;">0.0</span>
                        </div>
                        <input type="range" id="i-speed" min="0" max="80" value="40" style="width:100%;cursor:pointer;accent-color:#00a1ff;">
                    </div>

                    <div style="background:rgba(255,255,255,0.04);padding:9px;border-radius:2px;">
                        <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:6px;color:#ccc;">
                            <span>STEERING</span>
                            <span id="v-yaw" style="color:#00a1ff;font-weight:bold;">0.00</span>
                        </div>
                        <input type="range" id="i-yaw" min="0" max="100" value="50" style="width:100%;cursor:pointer;accent-color:#00a1ff;">
                        <div style="display:flex;justify-content:space-between;font-size:9px;color:#555;margin-top:4px;">
                            <span>◀ LEFT</span><span>CENTER</span><span>RIGHT ▶</span>
                        </div>
                    </div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                        <button id="pb-forward" style="background:transparent;border:1px solid #00a1ff;color:#00a1ff;padding:7px;font-size:10px;cursor:pointer;border-radius:2px;letter-spacing:1px;">▲ FORWARD</button>
                        <button id="pb-reverse" style="background:transparent;border:1px solid #00a1ff;color:#00a1ff;padding:7px;font-size:10px;cursor:pointer;border-radius:2px;letter-spacing:1px;">▼ REVERSE</button>
                    </div>

                    <!-- CENTER / COMPLETE — shown only during active pushback -->
                    <div id="pb-center-row" style="display:none;gap:8px;grid-template-columns:1fr 1fr;">
                        <button id="pb-center" style="background:transparent;border:1px solid #ffa500;color:#ffa500;padding:7px;font-size:10px;cursor:pointer;border-radius:2px;letter-spacing:1px;">⟳ CENTER</button>
                        <button id="pb-complete" style="background:rgba(0,200,100,0.15);border:1px solid #00c864;color:#00c864;padding:7px;font-size:10px;cursor:pointer;border-radius:2px;letter-spacing:1px;">✔ COMPLETE</button>
                    </div>

                    <div style="font-size:9px;color:#555;text-align:center;border-top:1px solid rgba(255,255,255,0.07);padding-top:9px;">
                        [;] PARKING BRAKE &nbsp;·&nbsp; [E] ENGINE START
                    </div>
                </div>
            `;

            document.body.appendChild(panelElement);

            const d           = document;
            const yI          = d.getElementById('i-yaw');
            const sI          = d.getElementById('i-speed');
            const btn         = d.getElementById('pb-toggle');
            const yV          = d.getElementById('v-yaw');
            const sV          = d.getElementById('v-speed');
            const centerRow   = d.getElementById('pb-center-row');
            const centerBtn   = d.getElementById('pb-center');
            const completeBtn = d.getElementById('pb-complete');


            btn.onclick = async function() {
                if (pushback['pushBackState'] === false && !_completing) {
                    if (!pushback['checkAircraft'](geofs.aircraft.instance.id)) return;

                    VO.cancel();
                    VO.speak("Headset connected. Left wing clear.");
                    VO.speak("Right wing clear.", 1600);
                    VO.speak("Ready to push. Release parking brake.", 3200);

                    setStatus('AWAITING BRAKE RELEASE — PRESS ; TO RELEASE', '#ffa500');
                    _parkingBrakeOn = true;

                    _addKeybinds();

                    let brakeWatcher = setInterval(async () => {
                        const brakeOn = geofs.aircraft.instance.setup.contactProperties.wheel.lockSpeed > 0.4;
                        if (!brakeOn) {
                            clearInterval(brakeWatcher);

                            await pushback['setUpdate']();
                            pushback['addPushBackTruck']();
                            pushback['pushBackState'] = true;
                            geofs.animation.values.pushBackTruck = 1;
                            defaultFriction = geofs.aircraft.instance.setup.contactProperties.wheel.lockSpeed || 1;
                            geofs.aircraft.instance.setup.contactProperties.wheel.lockSpeed = 0.5;

                            btn.innerText           = "END PUSHBACK";
                            btn.style.background    = "#c0392b";
                            centerRow.style.display = 'grid';
                            setStatus('PUSHING BACK', '#00ff99');

                            VO.speak("Brakes released. Start pushback.");
                        }
                    }, 250);

                    pushback._brakeWatcher = brakeWatcher;

                } else {
             
                    _endPushback(false);
                }
            };
            centerBtn.onclick = function() {
                VO.cancel();
                VO.speak("Steering to center.");
                let steps = 30, current = parseFloat(yI.value);
                const delta = (50 - current) / steps;
                const ci = setInterval(() => {
                    current += delta;
                    yI.value = Math.round(current);
                    yI.oninput();
                    steps--;
                    if (steps <= 0) { yI.value = 50; yI.oninput(); clearInterval(ci); }
                }, 33);
            };

            completeBtn.onclick = function() {
                if (_completing) return; 
                pushback['pushBackState'] = false; 
                _endPushback(true);
            };

            yI.oninput = function() {
                const v = (this.value - 50) / 50;
                yV.innerText = v.toFixed(2);
                if (pushback['pushBackState']) pushback['startYaw'](v);
            };
            sI.oninput = function() {
                const v = (this.value - 40) / 2;
                sV.innerText = v.toFixed(1);
                if (pushback['pushBackState']) pushback['startBack'](v);
            };

            d.getElementById('pb-forward').onclick = () => { sI.value = 60; sI.oninput(); };
            d.getElementById('pb-reverse').onclick = () => { sI.value = 20; sI.oninput(); };
            d.getElementById('closePB').onclick    = () => panelElement.style.display = 'none';
        }

        pushback[_0x76c3fa(0x14c)] = ![],
        pushback['checkAircraft'] = function(_0x2ab80f) {
            return pushbackInfo[_0x2ab80f] ? !![] : ![];
        },
        pushback[_0x76c3fa(0x128)] = function() {
            const _0x482a25 = _0x76c3fa;
            for (let _0x91881f = 0x0; _0x91881f < geofs[_0x482a25(0x163)]['instance'][_0x482a25(0x162)][_0x482a25(0x12f)][_0x482a25(0x14a)]; _0x91881f++) {
                if (geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f][_0x482a25(0x132)])
                    for (let _0x4f6ba4 = 0x0; _0x4f6ba4 < geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f]['animations'][_0x482a25(0x14a)]; _0x4f6ba4++) {
                        geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f][_0x482a25(0x132)][_0x4f6ba4]['value'] == _0x482a25(0x15d) && (geofs[_0x482a25(0x163)]['instance']['setup']['parts'][_0x91881f][_0x482a25(0x132)][_0x4f6ba4][_0x482a25(0x156)] = 'yawPushback', geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f][_0x482a25(0x14f)] && (pushback[_0x482a25(0x14e)] = geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)]['parts'][_0x91881f]['animations'][_0x4f6ba4]['ratio']));
                    }
            }
        },
        pushback[_0x76c3fa(0x175)] = function() {
            const _0xc0bea3 = _0x76c3fa;
            clearInterval(pushback[_0xc0bea3(0x12d)]), geofs['aircraft'][_0xc0bea3(0x167)]['setup']['contactProperties'][_0xc0bea3(0x171)][_0xc0bea3(0x178)] = defaultFriction;
            for (let _0x1f9728 = 0x0; _0x1f9728 < geofs[_0xc0bea3(0x163)][_0xc0bea3(0x167)]['setup']['parts']['length']; _0x1f9728++) {
                if (geofs['aircraft']['instance']['setup']['parts'][_0x1f9728]['animations'])
                    for (let _0x104b0f = 0x0; _0x104b0f < geofs[_0xc0bea3(0x163)][_0xc0bea3(0x167)][_0xc0bea3(0x162)][_0xc0bea3(0x12f)][_0x1f9728]['animations'][_0xc0bea3(0x14a)]; _0x104b0f++) {
                        geofs['aircraft'][_0xc0bea3(0x167)][_0xc0bea3(0x162)][_0xc0bea3(0x12f)][_0x1f9728][_0xc0bea3(0x132)][_0x104b0f][_0xc0bea3(0x156)] == _0xc0bea3(0x141) && (geofs['aircraft']['instance'][_0xc0bea3(0x162)][_0xc0bea3(0x12f)][_0x1f9728][_0xc0bea3(0x132)][_0x104b0f][_0xc0bea3(0x156)] = _0xc0bea3(0x15d));
                    }
            }
        },
        pushback[_0x76c3fa(0x13d)] = function() { pushback['addPushBackTruck'](); },
        pushback[_0x76c3fa(0x15e)] = function() {
            const _0x41d712 = _0x76c3fa;
            if (pushbackInfo[geofs['aircraft'][_0x41d712(0x167)]['id']]) {
                let _0x1c84f4 = { 'name': _0x41d712(0x14b), 'model': pushbackModels[pushbackInfo[geofs['aircraft'][_0x41d712(0x167)]['id']][_0x41d712(0x153)]], 'position': pushbackInfo[geofs[_0x41d712(0x163)][_0x41d712(0x167)]['id']][_0x41d712(0x13f)], 'animations': [{ 'type': _0x41d712(0x15f), 'axis': 'Z', 'value': _0x41d712(0x141), 'ratio': pushback['defaultYaw'] }, { 'value': _0x41d712(0x135), 'type': _0x41d712(0x157), 'value': _0x41d712(0x15c) }, { 'type': _0x41d712(0x15f), 'value': 'atilt', 'axis': 'X', 'ratio': -0x1 }], 'rotation': [0x0, 0x0, 0x0] };
                geofs[_0x41d712(0x163)][_0x41d712(0x167)][_0x41d712(0x143)]([_0x1c84f4], _0x41d712(0x150), 0x1, _0x41d712(0x16e));
            }
        };


        let _0x184d9f = document['getElementsByClassName']('geofs-autopilot-bar'),
            _0x5ca6a9 = document[_0x76c3fa(0x147)](_0x76c3fa(0x140));
        _0x5ca6a9[_0x76c3fa(0x155)]['add'](_0x76c3fa(0x164)),
        _0x5ca6a9['id'] = _0x76c3fa(0x12c),
        _0x5ca6a9['style'][_0x76c3fa(0x13e)] = _0x76c3fa(0x165),
        _0x5ca6a9[_0x76c3fa(0x131)] = _0x76c3fa(0x13a),
        _0x184d9f[0x0][_0x76c3fa(0x15b)](_0x5ca6a9);

        _0x5ca6a9[_0x76c3fa(0x125)] = function() { createModernPanel(); };
    }


    function _0x1c81() {
        const _0x53a943 = ['then', 'lockSpeed', '1258782BnpTvr', 'round', '6TtZgaV', '12AvIPhZ', 'onclick', 'speedInfo', '319TOOmos', 'setUpdate', 'DUMMY_TEXT_TO_KEEP_INDEX', 'animation', '363367mttbUH', 'pushbackButtonMain', 'lockInt', 'keyCode', 'parts', 'checkAircraft', 'innerHTML', 'animations', ',left=', 'pushBack', 'view', 'contactProperties', 'heading360', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Pushback/main/pushback%20data/pushbackModel.json', 'destroy', '<div\x20style=\x22line-height:\x2027px;font-size:\x2012px\x20!important;pointer-events:\x20none;color:\x20#FFF;text-align:\x20center;\x22>PUSHBACK</div>', '4303656PWCiJH', 'json', 'addPushBackTruckHandler', 'cssText', 'pos', 'div', 'yawPushback', 'width', 'addParts', 'sin', 'stopBack', 'body', 'createElement', '1931860IqPriw', 'addEventListener', 'length', 'pushbackTruck', 'pushBackState', 'oninput', 'defaultYaw', 'collisionPoints', 'https://raw.githubusercontent.com/', 'cos', 'close', 'model', 'pushback', 'classList', 'value', 'show', 'object3d', 'document', '75250HvkrXo', 'append', 'pushBackTruck', 'yaw', 'addPushBackTruck', 'rotate', 'open', 'groundContact', 'setup', 'aircraft', 'control-pad', 'width:\x2090px;height:\x2025px;margin:\x200px\x2010px;border-radius:\x2015px;outline:\x20none;', 'height', 'instance', 'values', 'yawInfo', 'getElementById', 'rigidBody', '324036SVkzvQ', '4544724bXaXlh', 'Zup', 'startYaw', 'startBack', 'wheel', 'speed', 'onbeforeunload', '160yAxlOT', 'revertUpdate', 'Title'];
        _0x1c81 = function() { return _0x53a943; };
        return _0x1c81();
    }

})();
