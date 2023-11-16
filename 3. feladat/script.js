let crystals = 0;
let item = "";

document.getElementById("purchased").style.color = "green";

function GetCrystal() {
    crystals += 10000;
    UpdateCrystalCount();
}

function UpdateCrystalCount() {
    document.getElementById("crystals").innerHTML = crystals;
}

function GetCostFromItem(item) {
    switch (item) {
        case "Bronz":
            return 500;
        case "Ezüst":
            return 1000;
        case "Arany":
            return 4000;
        case "Gyémánt":
            return 15000;
        case "Smaragd":
            return 60000;
        case "Rubin":
            return 170000;
    
        default:
            return 0;
    }
}

function Select(value) {
    document.getElementById("item").innerHTML = `${value} - Ár: ${GetCostFromItem(value)}`;
    item = value;
}

function Purchase() {
    let cost = GetCostFromItem(item);
    if (crystals - cost < 0) {
        alert("Nincs elég kristályod")
        return;
    }
    crystals -= cost;
    UpdateCrystalCount();
    document.getElementById("purchased").innerHTML = `Vásárolt tárgy: ${item}, ${GetCostFromItem(item)} kristályért`;
}