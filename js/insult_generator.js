var all_insults = "aldrabão,abécula,agarrado,analfabruto,atraso de vida,apanhado do clima,azeiteiro,alcoviteira,aselha,asno,anjinho,asqueroso,arruaceiro,artolas,|badameco,bandido,bruto,besta quadrada,barrigudo,brutamontes,borra-botas,bufo,boca de xarroco,boi,basbaque,biltre,bexigoso,bichona,bêbedo,bebedolas,batoque,banana,bardajona,badalhoca,bisbilhoteira,bandalho,bota de elástico,baldas,brochista,boneca de trapos,beata,bronco,bexigoso,betinho,bárbaro,|cunanas,camelo,chalado,camafeu,cona de sabão,cara de cu à paisana,coirão,choninhas,carroceiro,cabeçudo,cavalgadura,canalha,cretino,calhandreira,caga-tacos,cegueta,caixa de óculos,cornudo,coxo,candongueiro,careca,chupado das carochas,copinho de leite,cacique,calão,cabra,cabrão,cusca,coscuvilheira,cão,cabeça no ar,convencido,chanfrado,cagão,chato,cobardola,cavalona,chico-esperto,charlatão,caloteiro,cigano,comuna,carrancudo,corno,caceteiro,canalha,carapau de corrida,choné,cabeça de abóbora,|delambida,desenxabida,doido varrido,doidivanas,desmancha prazeres,desastrada,desengonçado,desaustinado,desbocado,|escanifobética,estafermo,embusteiro,estúpido,esqueleto vaidoso,engraxador,esgalgado,empecilho,estroina,escarumba,estouvada,estupor,espantalho,estapafúrdio,energúmeno,espalhafatoso,enjoado da trampa,|flausina,farsante,filho da puta,fufa,fersureira,falhado,foleiro,facínora,falsário,franganote,fanfarrão,fanático,fanchono,filho da mãe,|gatuno,gordalhufo,gabiru,galinha choca,galdéria,gabarola,gosma,gandulo,ganancioso,garganeira,|histérica,herege,|idiota,imbecil,incapaz,incompetente,inútil,|javardo,judeu,|lambisgóia,ladrão,lavajão,lambéconas,lambe-botas,lingrinhas,larápio,larilas,labrego,louco,lorpa,lunático,|morcão,malacueco,maluco,mariquinhas pé-de-salsa,meliante,mentiroso,malandro,malandreco,malandrim,marreco,maneta,mouco,mariconço,maricas,menino da mamã,mastronço,mostrengo,moina,meia-leca,medroso,monhé,molengão,mafioso,medricas,masoquista,mineteiro,maltrapilho,maria-vai-com-as-outras,miserável,magricela,mula,mal enjorcado,mimado,|nódoa,nulidade,nabo,nojento,não-tens-onde-cair-morto,nababo,|otário,olhos de carneiro mal morto,orelhas de abano,obcecado,ordinário,obstinado,|palerma,parvalhão,pateta,parvo,porcalhão,piroso,pirata,piolhoso,peida-gadoxa,pantomineiro,pote de banhas,pernas de alicate,pelintra,patego,panasca,paneleiro,putéfia,puta,panilas,pés de chumbo,patife,perliquiteques,palhaço,palhaçote,porco,punheteiro,preguiçoso,pacóvio,pobre de espírito,proxeneta,patinho feio,panhonhas,pintor,parasita,presunçoso,palonça,peneirenta,pobre diabo,|quadrilheira,queixinhas,quatro-olhos,|ranhoso,reles,rasca,rameira,rabeta,rafeiro,reaccionário,reaças,raquítico,|salafrário,safardana,sevandija,sacripanta,sacrista,sacana,sovina,somítico,safado,sabujo,saloio,soba,sebento,sapatona,sádico,serigaita,sarnento,snob,|tarado,trombalazanas,trapaceiro,trabeculoso,tísico,trombudo,trauliteiro,tinhoso,trique-lariques,tosco,totó,trombeiro,trouxa,tonto,traste,trinca-espinhas,troca-tintas,|unhas de fome,urso,|vaca gorda,vigarista,vândalo,vígaro,vigarista,velhaco,vendido,vagabundo,vira-casacas,vaidoso,|xé-xé,|zero à esquerda,zarolho,Zé-ninguém,|";

function main() {
	write_meaning();
	replace_fb_url();
}

function write_meaning() {
	var name = get_parameter("name");

	if (!name || name == "undefined") {
		return;
	}

	var full_name = name.toLowerCase();
	full_name = full_name.replace("+", " ");
	full_name = remove_glyphs(full_name);
	var names = full_name.split(" ");

	var meaning_matrix = [];

	for (var i = 0; i < names.length; i++) {
		var name = names[i];

		meaning_matrix.push(get_meaning(name));
	}

	pretty_print(meaning_matrix, full_name);
}


function get_meaning(name) {
	seed = serialize_name(name);
	seed_once(seed);

	var insults_res = [];
	for (var i = 0; i < name.length; i++) {
		char = name[i];

		var insults_from_char = (get_insults(char));
		var splt = insults_from_char.split(",");

		r = random_int(0, splt.length - 2);

		insults_res.push(splt[r]);
	}

	reset_seed();
	return insults_res;
}


function get_insults(char) {
	split_by_char = all_insults.split("|");

	for (var i = 0; i < split_by_char.length; i++) {
		row = split_by_char[i];

		if (row[0] == char) {
			return row;
		}
	}
}
