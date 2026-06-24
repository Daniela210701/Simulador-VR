document.addEventListener("DOMContentLoaded", () => {
  
  const startButton = document.getElementById('btn-start');
  const welcomeScreen = document.getElementById('welcome-screen');
  
  const hudPanel = document.getElementById('hud-panel');
  const hudTitle = document.getElementById('hud-title');
  const hudDesc = document.getElementById('hud-desc');

  startButton.addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.visibility = 'hidden';
  });

  const crystal = document.getElementById('mystic-crystal');
  const crystalColors = ['#00f2fe', '#e91e63', '#7cfc00', '#b8860b'];
  let crystalIndex = 0;

  crystal.addEventListener('click', () => {
    hudPanel.setAttribute('visible', 'true');
    hudTitle.setAttribute('value', 'CRISTAL ANCESTRAL');
    hudDesc.setAttribute('value', 'Nucleo de energia geometrica flotando sobre la isla central.');
    
    crystalIndex = (crystalIndex + 1) % crystalColors.length;
    crystal.setAttribute('color', crystalColors[crystalIndex]);
  });

  const torii = document.getElementById('torii-gate');
  torii.addEventListener('click', () => {
    hudPanel.setAttribute('visible', 'true');
    hudTitle.setAttribute('value', 'GRAN TORII PORTAL');
    hudDesc.setAttribute('value', 'Umbral que conecta el plano real con las dimensiones tridimensionales web.');
    
    torii.setAttribute('animation__pulse', {
      property: 'scale',
      from: '1.2 1.2 1.2', to: '1.25 1.25 1.25',
      dir: 'alternate', dur: 200, loop: 2
    });
  });

  const treeMaster = document.getElementById('tree-master');
  treeMaster.addEventListener('click', () => {
    hudPanel.setAttribute('visible', 'true');
    hudTitle.setAttribute('value', 'ARBORETO MAESTRO');
    hudDesc.setAttribute('value', 'Estructura botanica generada con esferas superpuestas de alta densidad.');
  });

  const airLanterns = document.querySelectorAll('#lanterns-group a-box');
  airLanterns.forEach((lantern, index) => {
    lantern.addEventListener('click', () => {
      hudPanel.setAttribute('visible', 'true');
      hudTitle.setAttribute('value', `LINTERNA FLOTANTE N° ${index + 1}`);
      hudDesc.setAttribute('value', 'Geometria suspendida en el aire activa por induccion de mirada.');
      lantern.setAttribute('color', '#ff00ff');
    });
  });

});