// Module Imports
import * as express from "express";
import * as fs from "fs";
import * as discord from "discord.js";
import * as fetch from "node-fetch";
import {hasPermission} from "./permissions/permissions";
// Constants
const server: express.Application = express();
const PORT: number = Number(process.env.PORT) || 8000;
const views: string = `${__dirname}/views`;
const roles: Map<string,any[]> = new Map();

// Map sets
roles.set("Site Owner", ["864594544929931296"]);
roles.set("Owner", ["859605537959837736"]);

// Functions
function getSiteRole(member: discord.GuildMember): any {
    roles.forEach((value,key) => {
        value.forEach(v => {
            
        });
    })
}
// Server Setup
server.use(express.static("./public"));
server.set("trusted", true);
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

// Responses
server.get("*", function (req, res) {
    let path = req.path.split("?")[0].toLowerCase();
    if (path === "/") {
        return res.sendFile(`${views}/index.html`);
    }
    if (fs.existsSync(`${views}/${path}.html`)) {
        return res.sendFile(`${views}/${path}.html`);
    } else {
        return res.sendFile(`${views}/404.html`);
    }
});