/*
* Test des urls par défaut des services (utilisées si aucune url n"est spécifiée par l"utilisateur)
*/

import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import DefaultUrlService from "../../src/Services/DefaultUrlService";

describe("-- Test DefaultUrlService --", function () {

    describe("URLs par defaut des services", function () {

        var key = "CLE";
        var keys = ["CLE1", "CLE2"];

        it("DefaultUrlService", function () {

            expect(DefaultUrlService.Alti.url(key)["elevation-json"]).to.be.equal("https://wxs.ign.fr/CLE/alti/rest/elevation.json");
            expect(DefaultUrlService.Alti.url(key)["elevation-xml"]).to.be.equal("https://wxs.ign.fr/CLE/alti/rest/elevation.xml");
            expect(DefaultUrlService.Alti.url(key)["profil-json"]).to.be.equal("https://wxs.ign.fr/CLE/alti/rest/elevationLine.json");
            expect(DefaultUrlService.Alti.url(key)["profil-xml"]).to.be.equal("https://wxs.ign.fr/CLE/alti/rest/elevationLine.xml");
            expect(DefaultUrlService.Alti.url(key)["wps"]).to.be.equal("https://wxs.ign.fr/CLE/alti/wps");
            expect(DefaultUrlService.ProcessIsoCurve.url(key)).to.be.equal("https://wxs.ign.fr/CLE/geoportail/isochrone/rest/1.0.0/isochrone");
            expect(DefaultUrlService.AutoComplete.url(key)).to.be.equal("https://wxs.ign.fr/CLE/ols/apis/completion" );
            expect(DefaultUrlService.ReverseGeocode.url(key)).to.be.equal("https://wxs.ign.fr/CLE/geoportail/ols");
            expect(DefaultUrlService.Config.url([key])).deep.to.be.equal(["https://raw.githubusercontent.com/IGNF/geoportal-configuration/main/dist/CLEConfig.json"]);
            expect(DefaultUrlService.Config.url(keys)).deep.to.be.equal(["https://raw.githubusercontent.com/IGNF/geoportal-configuration/main/dist/CLE1Config.json","https://raw.githubusercontent.com/IGNF/geoportal-configuration/main/dist/CLE2Config.json"]);
            expect(DefaultUrlService.Geocode.url(key)).to.be.equal("https://wxs.ign.fr/CLE/geoportail/ols");
            expect(DefaultUrlService.Route.url(key)).to.be.equal("https://wxs.ign.fr/CLE/geoportail/itineraire/rest/1.0.0/route");
        });
    });
});
