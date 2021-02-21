const rates = {}; //обьект с курсами всех валют

const elementUSD = document.querySelector("[data-value='USD']");
const arroyUpUSD = document.querySelector("#urroyUpUSD");
const arroyDovnUSD = document.querySelector("#urroyDownUSD");
const nominalUSD = document.querySelector("#nomUSD");
const yesterdaylUSD = document.querySelector("#yesUSD");

const elementEUR = document.querySelector("[data-value='EUR']");
const arroyUpEUR = document.querySelector("#urroyUpEUR");
const arroyDovnEUR = document.querySelector("#urroyDownEUR");
const nominalEUR = document.querySelector("#nomEUR");
const yesterdaylEUR = document.querySelector("#yesEUR");

const elementGBP = document.querySelector("[data-value='GBP']");
const arroyUpGBP = document.querySelector("#urroyUpGBP");
const arroyDovnGBP = document.querySelector("#urroyDownGBP");
const nominalGBP = document.querySelector("#nomGBP");
const yesterdaylGBP = document.querySelector("#yesGBP");

const elementJPY = document.querySelector("[data-value='JPY']");
const arroyUpJPY = document.querySelector("#urroyUpJPY");
const arroyDovnJPY = document.querySelector("#urroyDownJPY");
const nominalJPY = document.querySelector("#nomJPY");
const yesterdaylJPY = document.querySelector("#yesJPY");

const elementAUD = document.querySelector("[data-value='AUD']");
const arroyUpAUD = document.querySelector("#urroyUpAUD");
const arroyDovnAUD = document.querySelector("#urroyDownAUD");
const nominalAUD = document.querySelector("#nomAUD");
const yesterdaylAUD = document.querySelector("#yesAUD");

const elementAZN = document.querySelector("[data-value='AZN']");
const arroyUpAZN = document.querySelector("#urroyUpAZN");
const arroyDovnAZN = document.querySelector("#urroyDownAZN");
const nominalAZN = document.querySelector("#nomAZN");
const yesterdaylAZN = document.querySelector("#yesAZN");

const elementAMD = document.querySelector("[data-value='AMD']");
const arroyUpAMD = document.querySelector("#urroyUpAMD");
const arroyDovnAMD = document.querySelector("#urroyDownAMD");
const nominalAMD = document.querySelector("#nomAMD");
const yesterdaylAMD = document.querySelector("#yesAMD");

const elementBYN = document.querySelector("[data-value='BYN']");
const arroyUpBYN = document.querySelector("#urroyUpBYN");
const arroyDovnBYN = document.querySelector("#urroyDownBYN");
const nominalBYN = document.querySelector("#nomBYN");
const yesterdaylBYN = document.querySelector("#yesBYN");

const elementBGN = document.querySelector("[data-value='BGN']");
const arroyUpBGN = document.querySelector("#urroyUpBGN");
const arroyDovnBGN = document.querySelector("#urroyDownBGN");
const nominalBGN = document.querySelector("#nomBGN");
const yesterdaylBGN = document.querySelector("#yesBGN");

const elementBRL = document.querySelector("[data-value='BRL']");
const arroyUpBRL = document.querySelector("#urroyUpBRL");
const arroyDovnBRL = document.querySelector("#urroyDownBRL");
const nominalBRL = document.querySelector("#nomBRL");
const yesterdaylBRL = document.querySelector("#yesBRL");

const elementHUF = document.querySelector("[data-value='HUF']");
const arroyUpHUF = document.querySelector("#urroyUpHUF");
const arroyDovnHUF = document.querySelector("#urroyDownHUF");
const nominalHUF = document.querySelector("#nomHUF");
const yesterdaylHUF = document.querySelector("#yesHUF");

const elementHKD = document.querySelector("[data-value='HKD']");
const arroyUpHKD = document.querySelector("#urroyUpHKD");
const arroyDovnHKD = document.querySelector("#urroyDownHKD");
const nominalHKD = document.querySelector("#nomHKD");
const yesterdaylHKD = document.querySelector("#yesHKD");

const elementDKK = document.querySelector("[data-value='DKK']");
const arroyUpDKK = document.querySelector("#urroyUpDKK");
const arroyDovnDKK = document.querySelector("#urroyDownDKK");
const nominalDKK = document.querySelector("#nomDKK");
const yesterdaylDKK = document.querySelector("#yesDKK");

const elementINR = document.querySelector("[data-value='INR']");
const arroyUpINR = document.querySelector("#urroyUpINR");
const arroyDovnINR = document.querySelector("#urroyDownINR");
const nominalINR = document.querySelector("#nomINR");
const yesterdaylINR = document.querySelector("#yesINR");

const elementKZT = document.querySelector("[data-value='KZT']");
const arroyUpKZT = document.querySelector("#urroyUpKZT");
const arroyDovnKZT = document.querySelector("#urroyDownKZT");
const nominalKZT = document.querySelector("#nomKZT");
const yesterdaylKZT = document.querySelector("#yesKZT");

const elementCAD = document.querySelector("[data-value='CAD']");
const arroyUpCAD = document.querySelector("#urroyUpCAD");
const arroyDovnCAD = document.querySelector("#urroyDownCAD");
const nominalCAD = document.querySelector("#nomCAD");
const yesterdaylCAD = document.querySelector("#yesCAD");

const elementKGS = document.querySelector("[data-value='KGS']");
const arroyUpKGS = document.querySelector("#urroyUpKGS");
const arroyDovnKGS = document.querySelector("#urroyDownKGS");
const nominalKGS = document.querySelector("#nomKGS");
const yesterdaylKGS = document.querySelector("#yesKGS");

const elementCNY = document.querySelector("[data-value='CNY']");
const arroyUpCNY = document.querySelector("#urroyUpCNY");
const arroyDovnCNY = document.querySelector("#urroyDownCNY");
const nominalCNY = document.querySelector("#nomCNY");
const yesterdaylCNY = document.querySelector("#yesCNY");

const elementMDL = document.querySelector("[data-value='MDL']");
const arroyUpMDL = document.querySelector("#urroyUpMDL");
const arroyDovnMDL = document.querySelector("#urroyDownMDL");
const nominalMDL = document.querySelector("#nomMDL");
const yesterdaylMDL = document.querySelector("#yesMDL");

const elementNOK = document.querySelector("[data-value='NOK']");
const arroyUpNOK = document.querySelector("#urroyUpNOK");
const arroyDovnNOK = document.querySelector("#urroyDownNOK");
const nominalNOK = document.querySelector("#nomNOK");
const yesterdaylNOK = document.querySelector("#yesNOK");

const elementPLN = document.querySelector("[data-value='PLN']");
const arroyUpPLN = document.querySelector("#urroyUpPLN");
const arroyDovnPLN = document.querySelector("#urroyDownPLN");
const nominalPLN = document.querySelector("#nomPLN");
const yesterdaylPLN = document.querySelector("#yesPLN");

const elementRON = document.querySelector("[data-value='RON']");
const arroyUpRON = document.querySelector("#urroyUpRON");
const arroyDovnRON = document.querySelector("#urroyDownRON");
const nominalRON = document.querySelector("#nomRON");
const yesterdaylRON = document.querySelector("#yesRON");

const elementXDR = document.querySelector("[data-value='XDR']");
const arroyUpXDR = document.querySelector("#urroyUpXDR");
const arroyDovnXDR = document.querySelector("#urroyDownXDR");
const nominalXDR = document.querySelector("#nomXDR");
const yesterdaylXDR = document.querySelector("#yesXDR");

const elementSGD = document.querySelector("[data-value='SGD']");
const arroyUpSGD = document.querySelector("#urroyUpSGD");
const arroyDovnSGD = document.querySelector("#urroyDownSGD");
const nominalSGD = document.querySelector("#nomSGD");
const yesterdaylSGD = document.querySelector("#yesSGD");

const elementTJS = document.querySelector("[data-value='TJS']");
const arroyUpTJS = document.querySelector("#urroyUpTJS");
const arroyDovnTJS = document.querySelector("#urroyDownTJS");
const nominalTJS = document.querySelector("#nomTJS");
const yesterdaylTJS = document.querySelector("#yesTJS");

const elementTRY = document.querySelector("[data-value='TRY']");
const arroyUpTRY = document.querySelector("#urroyUpTRY");
const arroyDovnTRY = document.querySelector("#urroyDownTRY");
const nominalTRY = document.querySelector("#nomTRY");
const yesterdaylTRY = document.querySelector("#yesTRY");

const elementTMT = document.querySelector("[data-value='TMT']");
const arroyUpTMT = document.querySelector("#urroyUpTMT");
const arroyDovnTMT = document.querySelector("#urroyDownTMT");
const nominalTMT = document.querySelector("#nomTMT");
const yesterdaylTMT = document.querySelector("#yesTMT");

const elementUZS = document.querySelector("[data-value='UZS']");
const arroyUpUZS = document.querySelector("#urroyUpUZS");
const arroyDovnUZS = document.querySelector("#urroyDownUZS");
const nominalUZS = document.querySelector("#nomUZS");
const yesterdaylUZS = document.querySelector("#yesUZS");

const elementCZK = document.querySelector("[data-value='CZK']");
const arroyUpCZK = document.querySelector("#urroyUpCZK");
const arroyDovnCZK = document.querySelector("#urroyDownCZK");
const nominalCZK = document.querySelector("#nomCZK");
const yesterdaylCZK = document.querySelector("#yesCZK");

const elementUAH = document.querySelector("[data-value='UAH']");
const arroyUpUAH = document.querySelector("#urroyUpUAH");
const arroyDovnUAH = document.querySelector("#urroyDownUAH");
const nominalUAH = document.querySelector("#nomUAH");
const yesterdaylUAH = document.querySelector("#yesUAH");

const elementSEK = document.querySelector("[data-value='SEK']");
const arroyUpSEK = document.querySelector("#urroyUpSEK");
const arroyDovnSEK = document.querySelector("#urroyDownSEK");
const nominalSEK = document.querySelector("#nomSEK");
const yesterdaylSEK = document.querySelector("#yesSEK");

const elementCHF = document.querySelector("[data-value='CHF']");
const arroyUpCHF = document.querySelector("#urroyUpCHF");
const arroyDovnCHF = document.querySelector("#urroyDownCHF");
const nominalCHF = document.querySelector("#nomCHF");
const yesterdaylCHF = document.querySelector("#yesCHF");

const elementZAR = document.querySelector("[data-value='ZAR']");
const arroyUpZAR = document.querySelector("#urroyUpZAR");
const arroyDovnZAR = document.querySelector("#urroyDownZAR");
const nominalZAR = document.querySelector("#nomZAR");
const yesterdaylZAR = document.querySelector("#yesZAR");

const elementKRW = document.querySelector("[data-value='KRW']");
const arroyUpKRW = document.querySelector("#urroyUpKRW");
const arroyDovnKRW = document.querySelector("#urroyDownKRW");
const nominalKRW = document.querySelector("#nomKRW");
const yesterdaylKRW = document.querySelector("#yesKRW");

const input = document.querySelector("#input");
const result = document.querySelector("#result");
const select = document.querySelector("#select");

getCurrencies();

setInterval(getCurrencies, 10000);

async function getCurrencies() {
	const responce = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
	const data = await responce.json();
	const result = await data; //получаем обьект с данными

	rates.USD = result.Valute.USD; //записываем инфо по доллару в обьект
	rates.EUR = result.Valute.EUR;
	rates.GBP = result.Valute.GBP;

	rates.JPY = result.Valute.JPY;
	rates.AUD = result.Valute.AUD;
	rates.AZN = result.Valute.AZN;

	rates.AMD = result.Valute.AMD;
	rates.BYN = result.Valute.BYN;
	rates.BGN = result.Valute.BGN;

	rates.BRL = result.Valute.BRL;
	rates.HUF = result.Valute.HUF;
	rates.HKD = result.Valute.HKD;

	rates.DKK = result.Valute.DKK;
	rates.INR = result.Valute.INR;
	rates.KZT = result.Valute.KZT;

	rates.CAD = result.Valute.CAD;
	rates.KGS = result.Valute.KGS;
	rates.CNY = result.Valute.CNY;

	rates.MDL = result.Valute.MDL;
	rates.NOK = result.Valute.NOK;
	rates.PLN = result.Valute.PLN;

	rates.RON = result.Valute.RON;
	rates.XDR = result.Valute.XDR;
	rates.SGD = result.Valute.SGD;

	rates.TJS = result.Valute.TJS;
	rates.TRY = result.Valute.TRY;
	rates.TMT = result.Valute.TMT;

	rates.UZS = result.Valute.UZS;
	rates.CZK = result.Valute.CZK;
	rates.UAH = result.Valute.UAH;

	rates.SEK = result.Valute.SEK;
	rates.CHF = result.Valute.CHF;
	rates.ZAR = result.Valute.ZAR;
	rates.KRW = result.Valute.KRW;

	elementUSD.textContent = rates.USD.Value.toFixed(2) + " руб"; //вставляем курс на страницу и обрезаем до 2х знаков после запятой
	nominalUSD.textContent = "За"+ rates.USD.Nominal;
	yesterdaylUSD.textContent = rates.USD.Previous.toFixed(2) + " руб";

	elementEUR.textContent = rates.EUR.Value.toFixed(2) + " руб";
	nominalEUR.textContent = "За"+ rates.EUR.Nominal;
	yesterdaylEUR.textContent = rates.EUR.Previous.toFixed(2) + " руб";

	elementGBP.textContent = rates.GBP.Value.toFixed(2) + " руб";
	nominalGBP.textContent = "За"+ rates.GBP.Nominal;
    yesterdaylGBP.textContent = rates.GBP.Previous.toFixed(2) + " руб";

	elementJPY.textContent = rates.JPY.Value.toFixed(2) + " руб";
	nominalJPY.textContent = "За"+ rates.JPY.Nominal;
    yesterdaylJPY.textContent = rates.JPY.Previous.toFixed(2) + " руб";

	elementAUD.textContent = rates.AUD.Value.toFixed(2) + " руб"; //вставляем курс на страницу и обрезаем до 2х знаков после запятой
	nominalAUD.textContent = "За"+ rates.AUD.Nominal;
    yesterdaylAUD.textContent = rates.AUD.Previous.toFixed(2) + " руб";

	elementAZN.textContent = rates.AZN.Value.toFixed(2) + " руб";
	nominalAZN.textContent = "За"+ rates.AZN.Nominal;
    yesterdaylAZN.textContent = rates.AZN.Previous.toFixed(2) + " руб";

	elementAMD.textContent = rates.AMD.Value.toFixed(2) + " руб";
	nominalAMD.textContent = "За"+ rates.AMD.Nominal;
    yesterdaylAMD.textContent = rates.AMD.Previous.toFixed(2) + " руб";

	elementBYN.textContent = rates.BYN.Value.toFixed(2) + " руб";
	nominalBYN.textContent = "За"+ rates.BYN.Nominal;
    yesterdaylBYN.textContent = rates.BYN.Previous.toFixed(2) + " руб";

	elementBGN.textContent = rates.BGN.Value.toFixed(2) + " руб";
	nominalBGN.textContent = "За"+ rates.BGN.Nominal;
    yesterdaylBGN.textContent = rates.BGN.Previous.toFixed(2) + " руб";

	elementBRL.textContent = rates.BRL.Value.toFixed(2) + " руб";
	nominalBRL.textContent = "За" + rates.BRL.Nominal;
    yesterdaylBRL.textContent = rates.BRL.Previous.toFixed(2) + " руб";

	elementHUF.textContent = rates.HUF.Value.toFixed(2) + " руб";
	nominalHUF.textContent = "За"+ rates.HUF.Nominal;
    yesterdaylHUF.textContent = rates.HUF.Previous.toFixed(2) + " руб";

	elementHKD.textContent = rates.HKD.Value.toFixed(2) + " руб";
	nominalHKD.textContent = "За"+ rates.HKD.Nominal;
    yesterdaylHKD.textContent = rates.HKD.Previous.toFixed(2) + " руб";

	elementDKK.textContent = rates.DKK.Value.toFixed(2) + " руб";
	nominalDKK.textContent = "За"+ rates.DKK.Nominal;
    yesterdaylDKK.textContent = rates.DKK.Previous.toFixed(2) + " руб";

	elementINR.textContent = rates.INR.Value.toFixed(2) + " руб";
	nominalINR.textContent = "За"+ rates.INR.Nominal;
    yesterdaylINR.textContent = rates.INR.Previous.toFixed(2) + " руб";

	elementKZT.textContent = rates.KZT.Value.toFixed(2) + " руб";
	nominalKZT.textContent = "За"+ rates.KZT.Nominal;
    yesterdaylKZT.textContent = rates.KZT.Previous.toFixed(2) + " руб";

	elementCAD.textContent = rates.CAD.Value.toFixed(2) + " руб";
	nominalCAD.textContent = "За"+ rates.CAD.Nominal;
    yesterdaylCAD.textContent = rates.CAD.Previous.toFixed(2) + " руб";

	elementKGS.textContent = rates.KGS.Value.toFixed(2) + " руб";
	nominalKGS.textContent = "За"+ rates.KGS.Nominal;
    yesterdaylKGS.textContent = rates.KGS.Previous.toFixed(2) + " руб";

	elementCNY.textContent = rates.CNY.Value.toFixed(2) + " руб";
	nominalCNY.textContent = "За"+ rates.CNY.Nominal;
    yesterdaylCNY.textContent = rates.CNY.Previous.toFixed(2) + " руб";

	elementMDL.textContent = rates.MDL.Value.toFixed(2) + " руб";
	nominalMDL.textContent = "За"+ rates.MDL.Nominal;
    yesterdaylMDL.textContent = rates.MDL.Previous.toFixed(2) + " руб";

	elementNOK.textContent = rates.NOK.Value.toFixed(2) + " руб";
	nominalNOK.textContent = "За"+ rates.NOK.Nominal;
    yesterdaylNOK.textContent = rates.NOK.Previous.toFixed(2) + " руб";

	elementPLN.textContent = rates.PLN.Value.toFixed(2) + " руб";
	nominalPLN.textContent = "За"+ rates.PLN.Nominal;
    yesterdaylPLN.textContent = rates.PLN.Previous.toFixed(2) + " руб";

	elementRON.textContent = rates.RON.Value.toFixed(2) + " руб";
	nominalRON.textContent = "За"+ rates.RON.Nominal;
    yesterdaylRON.textContent = rates.RON.Previous.toFixed(2) + " руб";

	elementXDR.textContent = rates.XDR.Value.toFixed(2) + " руб";
	nominalXDR.textContent = "За"+ rates.XDR.Nominal;
    yesterdaylXDR.textContent = rates.XDR.Previous.toFixed(2) + " руб";

	elementSGD.textContent = rates.SGD.Value.toFixed(2) + " руб";
	nominalSGD.textContent = "За"+ rates.SGD.Nominal;
    yesterdaylSGD.textContent = rates.SGD.Previous.toFixed(2) + " руб";

	elementTJS.textContent = rates.TJS.Value.toFixed(2) + " руб";
	nominalTJS.textContent = "За"+ rates.TJS.Nominal;
    yesterdaylTJS.textContent = rates.TJS.Previous.toFixed(2) + " руб";

	elementTRY.textContent = rates.TRY.Value.toFixed(2) + " руб";
	nominalTRY.textContent = "За"+ rates.TRY.Nominal;
    yesterdaylTRY.textContent = rates.TRY.Previous.toFixed(2) + " руб";

	elementTMT.textContent = rates.TMT.Value.toFixed(2) + " руб";
	nominalTMT.textContent = "За"+ rates.TMT.Nominal;
    yesterdaylTMT.textContent = rates.TMT.Previous.toFixed(2) + " руб";

	elementUZS.textContent = rates.UZS.Value.toFixed(2) + " руб";
	nominalUZS.textContent = "За"+ rates.UZS.Nominal;
    yesterdaylUZS.textContent = rates.UZS.Previous.toFixed(2) + " руб";

	elementCZK.textContent = rates.CZK.Value.toFixed(2) + " руб";
	nominalCZK.textContent = "За"+ rates.CZK.Nominal;
    yesterdaylCZK.textContent = rates.CZK.Previous.toFixed(2) + " руб";

	elementUAH.textContent = rates.UAH.Value.toFixed(2) + " руб";
	nominalUAH.textContent = "За"+ rates.UAH.Nominal;
    yesterdaylUAH.textContent = rates.UAH.Previous.toFixed(2) + " руб";

	elementSEK.textContent = rates.SEK.Value.toFixed(2) + " руб";
	nominalSEK.textContent = "За"+ rates.SEK.Nominal;
    yesterdaylSEK.textContent = rates.SEK.Previous.toFixed(2) + " руб";

	elementCHF.textContent = rates.CHF.Value.toFixed(2) + " руб";
	nominalCHF.textContent = "За"+ rates.CHF.Nominal;
    yesterdaylCHF.textContent = rates.CHF.Previous.toFixed(2) + " руб";

	elementZAR.textContent = rates.ZAR.Value.toFixed(2) + " руб";
	nominalZAR.textContent = "За"+ rates.ZAR.Nominal;
    yesterdaylZAR.textContent = rates.ZAR.Previous.toFixed(2) + " руб";

	elementKRW.textContent = rates.KRW.Value.toFixed(2) + " руб";
	nominalKRW.textContent = "За"+ rates.KRW.Nominal;
    yesterdaylKRW.textContent = rates.KRW.Previous.toFixed(2) + " руб";

	if (rates.USD.Value > rates.USD.Previous) {
		elementUSD.classList.add("top"); //если курс вырос добавляем класс top
		arroyDovnUSD.classList.add("hidden");
		arroyUpUSD.classList.remove("hidden");
	} else {
		elementUSD.classList.add("bottom"); //если упал добавляем класс bottom
		arroyUpUSD.classList.add("hidden");
		arroyDovnUSD.classList.remove("hidden");
	}

	if (rates.EUR.Value > rates.EUR.Previous) {
		elementEUR.classList.add("top");
		arroyDovnEUR.classList.add("hidden");
		arroyUpEUR.classList.remove("hidden");
	} else {
		elementEUR.classList.add("bottom");
		arroyUpEUR.classList.add("hidden");
		arroyDovnEUR.classList.remove("hidden");
	}

	if (rates.GBP.Value > rates.GBP.Previous) {
		elementGBP.classList.add("top");
		arroyDovnGBP.classList.add("hidden");
		arroyUpGBP.classList.remove("hidden");
	} else {
		elementGBP.classList.add("bottom");
		arroyUpGBP.classList.add("hidden");
		arroyDovnGBP.classList.remove("hidden");
	}

	if (rates.JPY.Value > rates.JPY.Previous) {
		elementJPY.classList.add("top");
		arroyDovnJPY.classList.add("hidden");
		arroyUpJPY.classList.remove("hidden");
	} else {
		elementJPY.classList.add("bottom");
		arroyUpJPY.classList.add("hidden");
		arroyDovnJPY.classList.remove("hidden");
	}

	if (rates.AUD.Value > rates.AUD.Previous) {
		elementAUD.classList.add("top"); //если курс вырос добавляем класс top
		arroyDovnAUD.classList.add("hidden");
		arroyUpAUD.classList.remove("hidden");
	} else {
		elementAUD.classList.add("bottom"); //если упал добавляем класс bottom
		arroyUpAUD.classList.add("hidden");
		arroyDovnAUD.classList.remove("hidden");
	}

	if (rates.AZN.Value > rates.AZN.Previous) {
		elementAZN.classList.add("top");
		arroyDovnAZN.classList.add("hidden");
		arroyUpAZN.classList.remove("hidden");
	} else {
		elementAZN.classList.add("bottom");
		arroyUpAZN.classList.add("hidden");
		arroyDovnAZN.classList.remove("hidden");
	}

	if (rates.AMD.Value > rates.AMD.Previous) {
		elementAMD.classList.add("top");
		arroyDovnAMD.classList.add("hidden");
		arroyUpAMD.classList.remove("hidden");
	} else {
		elementAMD.classList.add("bottom");
		arroyUpAMD.classList.add("hidden");
		arroyDovnAMD.classList.remove("hidden");
	}

	if (rates.BYN.Value > rates.BYN.Previous) {
		elementBYN.classList.add("top");
		arroyDovnBYN.classList.add("hidden");
		arroyUpBYN.classList.remove("hidden");
	} else {
		elementBYN.classList.add("bottom");
		arroyUpBYN.classList.add("hidden");
		arroyDovnBYN.classList.remove("hidden");
	}
	if (rates.BGN.Value > rates.BGN.Previous) {
		elementBGN.classList.add("top");
		arroyDovnBGN.classList.add("hidden");
		arroyUpBGN.classList.remove("hidden");
	} else {
		elementBGN.classList.add("bottom");
		arroyUpBGN.classList.add("hidden");
		arroyDovnBGN.classList.remove("hidden");
	}

	if (rates.BRL.Value > rates.BRL.Previous) {
		elementBRL.classList.add("top");
		arroyDovnBRL.classList.add("hidden");
		arroyUpBRL.classList.remove("hidden");
	} else {
		elementBRL.classList.add("bottom");
		arroyUpBRL.classList.add("hidden");
		arroyDovnBRL.classList.remove("hidden");
	}
	if (rates.HUF.Value > rates.HUF.Previous) {
		elementHUF.classList.add("top");
		arroyDovnHUF.classList.add("hidden");
		arroyUpHUF.classList.remove("hidden");
	} else {
		elementHUF.classList.add("bottom");
		arroyUpHUF.classList.add("hidden");
		arroyDovnHUF.classList.remove("hidden");
	}
	if (rates.HKD.Value > rates.HKD.Previous) {
		elementHKD.classList.add("top");
		arroyDovnHKD.classList.add("hidden");
		arroyUpHKD.classList.remove("hidden");
	} else {
		elementHKD.classList.add("bottom");
		arroyUpHKD.classList.add("hidden");
		arroyDovnHKD.classList.remove("hidden");
	}

	if (rates.DKK.Value > rates.DKK.Previous) {
		elementDKK.classList.add("top");
		arroyDovnDKK.classList.add("hidden");
		arroyUpDKK.classList.remove("hidden");
	} else {
		elementDKK.classList.add("bottom");
		arroyUpDKK.classList.add("hidden");
		arroyDovnDKK.classList.remove("hidden");
	}
	if (rates.INR.Value > rates.INR.Previous) {
		elementINR.classList.add("top");
		arroyDovnINR.classList.add("hidden");
		arroyUpINR.classList.remove("hidden");
	} else {
		elementINR.classList.add("bottom");
		arroyUpINR.classList.add("hidden");
		arroyDovnINR.classList.remove("hidden");
	}
	if (rates.KZT.Value > rates.INR.Previous) {
		elementKZT.classList.add("top");
		arroyDovnKZT.classList.add("hidden");
		arroyUpKZT.classList.remove("hidden");
	} else {
		elementKZT.classList.add("bottom");
		arroyUpKZT.classList.add("hidden");
		arroyDovnKZT.classList.remove("hidden");
	}
	if (rates.CAD.Value > rates.CAD.Previous) {
		elementCAD.classList.add("top");
		arroyDovnCAD.classList.add("hidden");
		arroyUpCAD.classList.remove("hidden");
	} else {
		elementCAD.classList.add("bottom");
		arroyUpCAD.classList.add("hidden");
		arroyDovnCAD.classList.remove("hidden");
	}

	if (rates.KGS.Value > rates.KGS.Previous) {
		elementKGS.classList.add("top");
		arroyDovnKGS.classList.add("hidden");
		arroyUpKGS.classList.remove("hidden");
	} else {
		elementKGS.classList.add("bottom");
		arroyUpKGS.classList.add("hidden");
		arroyDovnKGS.classList.remove("hidden");
	}
	if (rates.CNY.Value > rates.CNY.Previous) {
		elementCNY.classList.add("top");
		arroyDovnCNY.classList.add("hidden");
		arroyUpCNY.classList.remove("hidden");
	} else {
		elementCNY.classList.add("bottom");
		arroyUpCNY.classList.add("hidden");
		arroyDovnCNY.classList.remove("hidden");
	}

	if (rates.MDL.Value > rates.MDL.Previous) {
		elementMDL.classList.add("top");
		arroyDovnMDL.classList.add("hidden");
		arroyUpMDL.classList.remove("hidden");
	} else {
		elementMDL.classList.add("bottom");
		arroyUpMDL.classList.add("hidden");
		arroyDovnMDL.classList.remove("hidden");
	}
	if (rates.NOK.Value > rates.NOK.Previous) {
		elementNOK.classList.add("top");
		arroyDovnNOK.classList.add("hidden");
		arroyUpNOK.classList.remove("hidden");
	} else {
		elementNOK.classList.add("bottom");
		arroyUpNOK.classList.add("hidden");
		arroyDovnNOK.classList.remove("hidden");
	}
	if (rates.PLN.Value > rates.PLN.Previous) {
		elementPLN.classList.add("top");
		arroyDovnPLN.classList.add("hidden");
		arroyUpPLN.classList.remove("hidden");
	} else {
		elementPLN.classList.add("bottom");
		arroyUpPLN.classList.add("hidden");
		arroyDovnPLN.classList.remove("hidden");
	}

	if (rates.RON.Value > rates.RON.Previous) {
		elementRON.classList.add("top");
		arroyDovnRON.classList.add("hidden");
		arroyUpRON.classList.remove("hidden");
	} else {
		elementRON.classList.add("bottom");
		arroyUpRON.classList.add("hidden");
		arroyDovnRON.classList.remove("hidden");
	}
	if (rates.XDR.Value > rates.XDR.Previous) {
		elementXDR.classList.add("top");
		arroyDovnXDR.classList.add("hidden");
		arroyUpXDR.classList.remove("hidden");
	} else {
		elementXDR.classList.add("bottom");
		arroyUpXDR.classList.add("hidden");
		arroyDovnXDR.classList.remove("hidden");
	}
	if (rates.SGD.Value > rates.SGD.Previous) {
		elementSGD.classList.add("top");
		arroyDovnSGD.classList.add("hidden");
		arroyUpSGD.classList.remove("hidden");
	} else {
		elementSGD.classList.add("bottom");
		arroyUpSGD.classList.add("hidden");
		arroyDovnSGD.classList.remove("hidden");
	}

	if (rates.TJS.Value > rates.TJS.Previous) {
		elementTJS.classList.add("top");
		arroyDovnTJS.classList.add("hidden");
		arroyUpTJS.classList.remove("hidden");
	} else {
		elementTJS.classList.add("bottom");
		arroyUpTJS.classList.add("hidden");
		arroyDovnTJS.classList.remove("hidden");
	}
	if (rates.TRY.Value > rates.TRY.Previous) {
		elementTRY.classList.add("top");
		arroyDovnTRY.classList.add("hidden");
		arroyUpTRY.classList.remove("hidden");
	} else {
		elementTRY.classList.add("bottom");
		arroyUpTRY.classList.add("hidden");
		arroyDovnTRY.classList.remove("hidden");
	}
	if (rates.TMT.Value > rates.TMT.Previous) {
		elementTMT.classList.add("top");
		arroyDovnTMT.classList.add("hidden");
		arroyUpTMT.classList.remove("hidden");
	} else {
		elementTMT.classList.add("bottom");
		arroyUpTMT.classList.add("hidden");
		arroyDovnTMT.classList.remove("hidden");
	}

	if (rates.UZS.Value > rates.UZS.Previous) {
		elementUZS.classList.add("top");
		arroyDovnUZS.classList.add("hidden");
		arroyUpUZS.classList.remove("hidden");
	} else {
		elementUZS.classList.add("bottom");
		arroyUpUZS.classList.add("hidden");
		arroyDovnUZS.classList.remove("hidden");
	}
	if (rates.CZK.Value > rates.CZK.Previous) {
		elementCZK.classList.add("top");
		arroyDovnCZK.classList.add("hidden");
		arroyUpCZK.classList.remove("hidden");
	} else {
		elementCZK.classList.add("bottom");
		arroyUpCZK.classList.add("hidden");
		arroyDovnCZK.classList.remove("hidden");
	}
	if (rates.UAH.Value > rates.UAH.Previous) {
		elementUAH.classList.add("top");
		arroyDovnUAH.classList.add("hidden");
		arroyUpUAH.classList.remove("hidden");
	} else {
		elementUAH.classList.add("bottom");
		arroyUpUAH.classList.add("hidden");
		arroyDovnUAH.classList.remove("hidden");
	}

	if (rates.SEK.Value > rates.SEK.Previous) {
		elementSEK.classList.add("top");
		arroyDovnSEK.classList.add("hidden");
		arroyUpSEK.classList.remove("hidden");
	} else {
		elementSEK.classList.add("bottom");
		arroyUpSEK.classList.add("hidden");
		arroyDovnSEK.classList.remove("hidden");
	}
	if (rates.CHF.Value > rates.CHF.Previous) {
		elementCHF.classList.add("top");
		arroyDovnCHF.classList.add("hidden");
		arroyUpCHF.classList.remove("hidden");
	} else {
		elementCHF.classList.add("bottom");
		arroyUpCHF.classList.add("hidden");
		arroyDovnCHF.classList.remove("hidden");
	}
	if (rates.ZAR.Value > rates.ZAR.Previous) {
		elementZAR.classList.add("top");
		arroyDovnZAR.classList.add("hidden");
		arroyUpZAR.classList.remove("hidden");
	} else {
		elementZAR.classList.add("bottom");
		arroyUpZAR.classList.add("hidden");
		arroyDovnZAR.classList.remove("hidden");
	}
	if (rates.KRW.Value > rates.KRW.Previous) {
		elementKRW.classList.add("top");
		arroyDovnKRW.classList.add("hidden");
		arroyUpKRW.classList.remove("hidden");
	} else {
		elementKRW.classList.add("bottom");
		arroyUpKRW.classList.add("hidden");
		arroyDovnKRW.classList.remove("hidden");
	}
}

input.oninput = convertValue;
select.oninput = convertValue;

console.log(rates.Nominal);

function convertValue() {
	result.value =
		((parseFloat(input.value) / rates[select.value].Value).toFixed(2) *
		rates[select.value].Nominal).toFixed(2);
    
}
