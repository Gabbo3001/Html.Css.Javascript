function limesToCut(cortesNecesarios, limones) {
    let limonesACortar = 0;
    let wedgesCount = 0;
  
    while (wedgesCount < cortesNecesarios && limones.length > 0) {
      const limonActual = limones[0];
      let wedgesFromCurrentLime = 0;
  
      switch (limonActual) {
        case 'small':
          wedgesFromCurrentLime = 6;
          break;
        case 'medium':
          wedgesFromCurrentLime = 8;
          break;
        case 'large':
          wedgesFromCurrentLime = 10;
          break;
      }
  
      if (wedgesCount + wedgesFromCurrentLime <= cortesNecesarios) {
        wedgesCount += wedgesFromCurrentLime;
      } else {
        break;
      }

      // Solo aumenta limonesACortar si necesitas todos los gajos del limón actual
      if (wedgesCount == cortesNecesarios) {
        limonesACortar++;
        break;
      }
  
      limones.shift();
    }
  
    console.log(limonesACortar);
}

const limes = ['small','large', 'large', 'medium', 'small', 'large', 'large', 'medium',]

limesToCut(42, limes); // Debería imprimir 6
