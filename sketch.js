let currentSection = 0;
let menuItems = [];
let displayText = "";
let scrollOffset = 0;
let textHeight = 0;
let menuBoxHeight = 80;
let contentStartY = 150;
let textSize = 14;

function setup() {
    let container = document.getElementById('p5-container');
    let width = container.clientWidth;
    let height = container.clientHeight;
    
    let canvas = createCanvas(width, height);
    canvas.parent('p5-container');
    
    // Inicializar menu
    updateDisplay();
}

function draw() {
    // Fundo gradiente
    background(26, 26, 26);
    
    // Desenhar cabeçalho
    drawHeader();
    
    // Desenhar menu
    drawMenu();
    
    // Desenhar conteúdo
    drawContent();
    
    // Desenhar instruções
    drawInstructions();
}

function drawHeader() {
    fill(255, 102, 0);
    rect(0, 0, width, 80);
    
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(36);
    textStyle(BOLD);
    text("🛹 SKATE INFOS 🛹", width / 2, 40);
    
    textSize(12);
    textStyle(NORMAL);
    fill(200);
    text("Aprenda tudo sobre skateboarding", width / 2, 65);
}

function drawMenu() {
    let menuY = 90;
    let menuWidth = width - 40;
    let itemWidth = menuWidth / menuSections.length;
    let menuX = 20;
    
    for (let i = 0; i < menuSections.length; i++) {
        let x = menuX + i * itemWidth;
        let isHovered = mouseX > x && mouseX < x + itemWidth - 10 &&
                       mouseY > menuY && mouseY < menuY + menuBoxHeight - 10;
        
        // Cor de fundo
        if (i === currentSection) {
            fill(255, 102, 0);
        } else if (isHovered) {
            fill(255, 140, 30);
        } else {
            fill(45, 45, 45);
        }
        
        stroke(255, 102, 0);
        strokeWeight(2);
        rect(x, menuY, itemWidth - 10, menuBoxHeight - 10, 8);
        
        // Texto do menu
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(12);
        textStyle(BOLD);
        let sectionLabel = menuSections[i].charAt(0).toUpperCase() + 
                          menuSections[i].slice(1);
        text(sectionLabel, x + (itemWidth - 10) / 2, menuY + (menuBoxHeight - 10) / 2);
        
        // Armazenar posição para clique
        menuItems[i] = {
            x: x,
            y: menuY,
            w: itemWidth - 10,
            h: menuBoxHeight - 10
        };
    }
}

function drawContent() {
    let contentX = 30;
    let contentWidth = width - 60;
    let contentY = contentStartY;
    
    // Desenhar fundo do conteúdo
    fill(45, 45, 45);
    stroke(255, 102, 0);
    strokeWeight(2);
    rect(contentX - 10, contentY - 10, contentWidth + 20, height - contentY - 50, 8);
    
    // Ativar clipping para o conteúdo
    clip(() => {
        rect(contentX - 10, contentY - 10, contentWidth + 20, height - contentY - 50);
    });
    
    // Desenhar título
    fill(255, 102, 0);
    textAlign(LEFT, TOP);
    textSize(24);
    textStyle(BOLD);
    text(skateData[menuSections[currentSection]].titulo, 
         contentX, contentY - scrollOffset);
    
    // Desenhar conteúdo
    fill(220, 220, 220);
    textSize(textSize);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    
    let textX = contentX;
    let textY = contentY + 35 - scrollOffset;
    
    let wrappedText = skateData[menuSections[currentSection]].conteudo;
    textHeight = textWidth(wrappedText, contentWidth - 20);
    
    text(wrappedText, textX, textY, contentWidth - 20);
}

function drawInstructions() {
    fill(150, 150, 150);
    textAlign(CENTER, BOTTOM);
    textSize(11);
    textStyle(ITALIC);
    text("Use as setas ← → para navegar | Use o mouse ou ↑↓ para scroll", 
         width / 2, height - 10);
}

function updateDisplay() {
    let section = menuSections[currentSection];
    displayText = skateData[section].conteudo;
    scrollOffset = 0;
}

function mousePressed() {
    // Verificar clique no menu
    for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];
        if (mouseX > item.x && mouseX < item.x + item.w &&
            mouseY > item.y && mouseY < item.y + item.h) {
            currentSection = i;
            updateDisplay();
            return;
        }
    }
}

function mouseWheel(event) {
    // Scroll com mouse wheel
    scrollOffset += event.delta * 0.5;
    
    // Limitar scroll
    let maxScroll = max(0, textHeight - (height - contentStartY - 50));
    scrollOffset = constrain(scrollOffset, 0, maxScroll);
    
    return false;
}

function keyPressed() {
    // Navegação com setas
    if (keyCode === LEFT_ARROW) {
        currentSection = (currentSection - 1 + menuSections.length) % menuSections.length;
        updateDisplay();
    } else if (keyCode === RIGHT_ARROW) {
        currentSection = (currentSection + 1) % menuSections.length;
        updateDisplay();
    } else if (keyCode === UP_ARROW) {
        scrollOffset -= 20;
        scrollOffset = max(0, scrollOffset);
    } else if (keyCode === DOWN_ARROW) {
        scrollOffset += 20;
        let maxScroll = max(0, textHeight - (height - contentStartY - 50));
        scrollOffset = min(scrollOffset, maxScroll);
    }
}

function windowResized() {
    let container = document.getElementById('p5-container');
    if (container) {
        let width = container.clientWidth;
        let height = container.clientHeight;
        resizeCanvas(width, height);
    }
}
