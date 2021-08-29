const R6StatsKey = "Here R6 Stats Key";
/*
To obtain the code, contact the R6Stats Discord.
https://discord.com/invite/pUdraS3
*/

importClass(org.jsoup.Jsoup);
const R6stats = require("player-stats.js");
const allsee = "\u200b".repeat(500);
const OperKoreaName = {
    "SAS Recruit": "SAS 예비병력",
    "FBI Recruit": "FBI 예비병력",
    "GIGN Recruit": "GIGN 예비병력",
    "SPETZNAZ Recruit": "스페츠나츠 예비병력",
    "GSG-9 Recruit": "GSG-9 예비병력",
    "Sledge": "슬렛지",
    "Thatcher": "대처",
    "Smoke": "스모크",
    "Mute": "뮤트",
    "Ash": "애쉬",
    "Thermite": "써마이트",
    "Castle": "캐슬",
    "Pulse": "펄스",
    "Twitch": "트위치",
    "Montagne": "몽타뉴",
    "Doc": "닥",
    "Rook": "룩",
    "Glaz": "글라즈",
    "Fuze": "퓨즈",
    "Kapkan": "캅칸",
    "Tachanka": "타찬카",
    "Blitz": "블리츠",
    "IQ": "아이큐",
    "Jäger": "예거",
    "Bandit": "밴딧",
    "Buck": "벅",
    "Frost": "프로스트",
    "Blackbeard": "블랙비어드",
    "Valkyrie": "발키리",
    "Capitão": "카피탕",
    "Caveira": "카베이라",
    "Hibana": "히바나",
    "Echo": "에코",
    "Jackal": "자칼",
    "Mira": "미라",
    "Ying": "잉",
    "Lesion": "리전",
    "Zofia": "조피아",
    "Ela": "엘라",
    "Dokkaebi": "도깨비",
    "Vigil": "비질",
    "Finka": "핀카",
    "Lion": "라이언",
    "Maestro": "마에스트로",
    "Alibi": "알리바이",
    "Maverick": "매버릭",
    "Clash": "클래시",
    "Nomad": "노매드",
    "Kaid": "카이드",
    "Gridlock": "그리드락",
    "Mozzie": "모지",
    "Nøkk": "뇌크",
    "Warden": "워든",
    "Amaru": "아마루",
    "Goyo": "고요",
    "Wamai": "와마이",
    "Kali": "칼리",
    "Iana": "이아나",
    "Oryx": "오릭스",
    "Ace": "에이스",
    "Melusi": "멜루시",
    "Zero": "제로",
    "Flores": "플로리스",
    "Aruni": "아루니",
    "Thunderbird": "썬더 버드"
};
const operimg = {
    "Mute": "https://cdn.r6stats.com/badges/mute_badge.png",
    "Smoke": "https://cdn.r6stats.com/badges/smoke_badge.png",
    "Sledge": "https://cdn.r6stats.com/badges/sledge_badge.png",
    "Thatcher": "https://cdn.r6stats.com/badges/thatcher_badge.png",
    "Castle": "https://cdn.r6stats.com/badges/castle_badge.png",
    "Ash": "https://cdn.r6stats.com/badges/ash_badge.png",
    "Thermite": "https://cdn.r6stats.com/badges/thermite_badge.png",
    "Pulse": "https://cdn.r6stats.com/badges/pulse_badge.png",
    "Twitch": "https://cdn.r6stats.com/badges/twitch_badge.png",
    "Montagne": "https://cdn.r6stats.com/badges/montagne_badge.png",
    "Doc": "https://cdn.r6stats.com/badges/doc_badge.png",
    "Rook": "https://cdn.r6stats.com/badges/rook_badge.png",
    "Blitz": "https://cdn.r6stats.com/badges/blitz_badge.png",
    "IQ": "https://cdn.r6stats.com/badges/iq_badge.png",
    "Jäger": "https://cdn.r6stats.com/badges/jager_badge.png",
    "Bandit": "https://cdn.r6stats.com/badges/bandit_badge.png",
    "Glaz": "https://cdn.r6stats.com/badges/glaz_badge.png",
    "Fuze": "https://cdn.r6stats.com/badges/fuze_badge.png",
    "Kapkan": "https://cdn.r6stats.com/badges/kapkan_badge.png",
    "Tachanka": "https://cdn.r6stats.com/badges/tachanka_badge.png",
    "Buck": "https://cdn.r6stats.com/badges/buck_badge.png",
    "Frost": "https://cdn.r6stats.com/badges/frost_badge.png",
    "Valkyrie": "https://cdn.r6stats.com/badges/valkyrie_badge.png",
    "Blackbeard": "https://cdn.r6stats.com/badges/blackbeard_badge.png",
    "Capitão": "https://cdn.r6stats.com/badges/capitao_badge.png",
    "Caveira": "https://cdn.r6stats.com/badges/caveira_badge.png",
    "Hibana": "https://cdn.r6stats.com/badges/hibana_badge.png",
    "Echo": "https://cdn.r6stats.com/badges/echo_badge.png",
    "Jackal": "https://cdn.r6stats.com/badges/jackal_badge.png",
    "Mira": "https://cdn.r6stats.com/badges/mira_badge.png",
    "Ying": "https://cdn.r6stats.com/badges/ying_badge.png",
    "Lesion": "https://cdn.r6stats.com/badges/lesion_badge.png",
    "Zofia": "https://cdn.r6stats.com/badges/zofia_badge.png",
    "Ela": "https://cdn.r6stats.com/badges/ela_badge.png",
    "Dokkaebi": "https://cdn.r6stats.com/badges/dokkaebi_badge.png",
    "Vigil": "https://cdn.r6stats.com/badges/vigil_badge.png",
    "Lion": "https://cdn.r6stats.com/badges/lion_badge.png",
    "Finka": "https://cdn.r6stats.com/badges/finka_badge.png",
    "Alibi": "https://cdn.r6stats.com/badges/alibi_badge.png",
    "Maestro": "https://cdn.r6stats.com/badges/maestro_badge.png",
    "Maverick": "https://cdn.r6stats.com/badges/maverick_badge.png",
    "Clash": "https://cdn.r6stats.com/badges/clash_badge.png",
    "SAS Recruit": "https://cdn.r6stats.com/badges/recruit_badge.png",
    "FBI Recruit": "https://cdn.r6stats.com/badges/recruit_badge.png",
    "GIGN Recruit": "https://cdn.r6stats.com/badges/recruit_badge.png",
    "GSG-9 Recruit": "https://cdn.r6stats.com/badges/recruit_badge.png",
    "Spetsnaz Recruit": "https://cdn.r6stats.com/badges/recruit_badge.png",
    "Kaid": "https://cdn.r6stats.com/badges/kaid_badge.png",
    "Nomad": "https://cdn.r6stats.com/badges/nomad_badge.png",
    "Gridlock": "https://cdn.r6stats.com/badges/gridlock_badge.png",
    "Mozzie": "https://cdn.r6stats.com/badges/mozzie_badge.png",
    "Nøkk": "https://cdn.r6stats.com/badges/nokk_badge.png",
    "Warden": "https://cdn.r6stats.com/badges/warden_badge.png",
    "Amaru": "https://cdn.r6stats.com/badges/amaru_badge.png",
    "Goyo": "https://cdn.r6stats.com/badges/goyo_badge.png",
    "Kali": "https://cdn.r6stats.com/badges/kali_badge.png",
    "Wamai": "https://cdn.r6stats.com/badges/wamai_badge.png",
    "Oryx": "https://cdn.r6stats.com/badges/oryx_badge.png",
    "Iana": "https://cdn.r6stats.com/badges/iana_badge.png",
    "Ace": "https://cdn.r6stats.com/badges/ace_badge.png",
    "Melusi": "https://cdn.r6stats.com/badges/melusi_badge.png",
    "Zero": "https://cdn.r6stats.com/badges/zero_badge.png",
    "Flores": "https://cdn.r6stats.com/badges/flores_badge.png",
    "Aruni": "https://cdn.r6stats.com/badges/aruni_badge.png",
    "Thunderbird": "https://cdn.r6stats.com/badges/thunderbird_badge.png"
};
let RankTies = {
    "Not ranked yet.": "https://1.bp.blogspot.com/-mJplONtR7kE/Xm3UVIOKdKI/AAAAAAAAFw4/5OP_xi9nXTw5N3vZcCiPNV0wZCTRZmSwQCLcBGAsYHQ/s1600/hd-rank0.png",
    "Unranked": "https://1.bp.blogspot.com/-mJplONtR7kE/Xm3UVIOKdKI/AAAAAAAAFw4/5OP_xi9nXTw5N3vZcCiPNV0wZCTRZmSwQCLcBGAsYHQ/s1600/hd-rank0.png",
    "Copper V": "https://1.bp.blogspot.com/-iCcUJjIGEjg/Xm4n9tVSoII/AAAAAAAAFy0/n9ZT7A28Ml4el7Ct3qe-eEglrb4MtSAzACLcBGAsYHQ/s1600/1584277437510-1.png",
    "Copper IV": "https://1.bp.blogspot.com/-9b-akS9x8pA/Xm3UVBSHKzI/AAAAAAAAFw8/F3dDPTOcd8sv1dBDZkL9Bxr7be84CoJUQCLcBGAsYHQ/s1600/hd-rank1.png",
    "Copper III": "https://1.bp.blogspot.com/-hRzg2KandBE/Xm3UYlQ12_I/AAAAAAAAFxo/z9-CBJ7Q82gRX3bJyppJ6CqGVxOxenD4ACLcBGAsYHQ/s1600/hd-rank2.png",
    "Copper II": "https://1.bp.blogspot.com/-XnHmrwz0Swg/Xm3UZopfftI/AAAAAAAAFx0/cHYQtBBccsMX7olAl1Um9b7819hnK_V3ACLcBGAsYHQ/s1600/hd-rank3.png",
    "Copper I": "https://1.bp.blogspot.com/-ynFgImloahs/Xm3UZoQnqNI/AAAAAAAAFx4/igK8MiAsHy8lWe78wvENDQQLOA6CcO_bwCLcBGAsYHQ/s1600/hd-rank4.png",
    "Bronze V": "https://1.bp.blogspot.com/-onnaOvmDpWw/Xm4oAOzlafI/AAAAAAAAFy4/zWkW4VmNfigLlVOZKEeZYVJupxChhSvgQCLcBGAsYHQ/s1600/1584277437510-2.png",
    "Bronze IV": "https://1.bp.blogspot.com/-xzz6MXrAacY/Xm3UaJqporI/AAAAAAAAFx8/AZDum8ywWr4zSTWhUl1r8VHAhpXLx2ZzgCLcBGAsYHQ/s1600/hd-rank5.png",
    "Bronze III": "https://1.bp.blogspot.com/-Z3Yr_2GFtuo/Xm3Uab5XOQI/AAAAAAAAFyA/N5rkuLVl9BMsTJhiMnNC0GIGus_AmgHGwCLcBGAsYHQ/s1600/hd-rank6.png",
    "Bronze II": "https://1.bp.blogspot.com/-AMkIbb73sAE/Xm3UaqBe7pI/AAAAAAAAFyE/Vy8Z--BG7HUnEUWGMXEo3lCvnpT5loObQCLcBGAsYHQ/s1600/hd-rank7.png",
    "Bronze I": "https://1.bp.blogspot.com/-uv6DA0nC08c/Xm3Ua-u-9sI/AAAAAAAAFyI/hyIZs5_7Y5o-hzgRaYJELErGmIXQdsc3gCLcBGAsYHQ/s1600/hd-rank8.png",
    "Silver V": "https://1.bp.blogspot.com/-a2HE_ZV_NIA/Xm4n6qRlGyI/AAAAAAAAFyw/o_jn6KPzZxENEHODj0da2HUvmx8LPejFwCLcBGAsYHQ/s1600/1584277437510-0.png",
    "Silver IV": "https://1.bp.blogspot.com/-16ECHs-gf8c/Xm3UbG2mP3I/AAAAAAAAFyM/XUzlpo6jxSg_1DHAwzK2me7HaBCU5xFZACLcBGAsYHQ/s1600/hd-rank9.png",
    "Silver III": "https://1.bp.blogspot.com/-UuYDGymcwuw/Xm3UVeck1PI/AAAAAAAAFxA/izK0tdMQPCU_sGqVUxpzyiz7s2j3M9hwwCLcBGAsYHQ/s1600/hd-rank10.png",
    "Silver II": "https://1.bp.blogspot.com/-dVNLGMbHNmQ/Xm3UWLpkz1I/AAAAAAAAFxE/RhjGp4IN-SIELvbJmLEFUygVARx_bSJYwCLcBGAsYHQ/s1600/hd-rank11.png",
    "Silver I": "https://1.bp.blogspot.com/-kEeEijf-wEg/Xm3UWaLJEBI/AAAAAAAAFxI/si2ME65ClnwBZ4nhPGQaBYMXt_5VJumcACLcBGAsYHQ/s1600/hd-rank12.png",
    "Gold III": "https://1.bp.blogspot.com/-JPWKuujIk7M/Xm3UW-haWPI/AAAAAAAAFxQ/n0ji5v61RaIPpmadl7OyYQyn8tnCyQsWwCLcBGAsYHQ/s1600/hd-rank14.png",
    "Gold II": "https://1.bp.blogspot.com/-TCSPlsDcmaE/Xm3UXON-qrI/AAAAAAAAFxU/9JXHlACzbh0PD_3YQH6xPU7q_p0kmm7tACLcBGAsYHQ/s1600/hd-rank15.png",
    "Gold I": "https://1.bp.blogspot.com/-Yt5nUk_FslE/Xm3UXSKGV9I/AAAAAAAAFxY/YBfoZlcKhgIhLGfWUP3zBfG5pie3p44fwCLcBGAsYHQ/s1600/hd-rank16.png",
    "Platinum III": "https://1.bp.blogspot.com/-qU29YefqO5s/Xm3UXrim_RI/AAAAAAAAFxc/rYoiVnpFA3My3gxV0Z62WXu2-sgihgGKwCLcBGAsYHQ/s1600/hd-rank17.png",
    "Platinum II": "https://1.bp.blogspot.com/-kC86tmRCugM/Xm3UX1yy2-I/AAAAAAAAFxg/2dP3bfv5HcM-yUrf8jVryFNinjbLuuORACLcBGAsYHQ/s1600/hd-rank18.png",
    "Platinum I": "https://1.bp.blogspot.com/-YrDKPn6t_Wo/Xm3UYZsBteI/AAAAAAAAFxk/I3BdZa5fuRIG_4u0kg5nK4YV-KkvFVU1ACLcBGAsYHQ/s1600/hd-rank19.png",
    "Diamond": "https://1.bp.blogspot.com/-uBlYBPbiyCA/Xm3UY_DLCeI/AAAAAAAAFxs/cUEIesyO5Eccyeg1fVjma17FfbUPmLUIACLcBGAsYHQ/s1600/hd-rank20.png",
    "Champions": "https://1.bp.blogspot.com/-BFJI_8pIaQ0/Xm3UZeqRDBI/AAAAAAAAFxw/QbXial45eQMf00UB0r_b480MmaOjbnOQQCLcBGAsYHQ/s1600/hd-rank21.png",
    "III": "3",
    "II": "2",
    "I": "1"
};
let RankTies2 = {
    "Not ranked yet.": "https://1.bp.blogspot.com/-mJplONtR7kE/Xm3UVIOKdKI/AAAAAAAAFw4/5OP_xi9nXTw5N3vZcCiPNV0wZCTRZmSwQCLcBGAsYHQ/s1600/hd-rank0.png",
    "Unranked": "https://1.bp.blogspot.com/-mJplONtR7kE/Xm3UVIOKdKI/AAAAAAAAFw4/5OP_xi9nXTw5N3vZcCiPNV0wZCTRZmSwQCLcBGAsYHQ/s1600/hd-rank0.png",
    "Copper 5": "https://1.bp.blogspot.com/-iCcUJjIGEjg/Xm4n9tVSoII/AAAAAAAAFy0/n9ZT7A28Ml4el7Ct3qe-eEglrb4MtSAzACLcBGAsYHQ/s1600/1584277437510-1.png",
    "Copper 4": "https://1.bp.blogspot.com/-9b-akS9x8pA/Xm3UVBSHKzI/AAAAAAAAFw8/F3dDPTOcd8sv1dBDZkL9Bxr7be84CoJUQCLcBGAsYHQ/s1600/hd-rank1.png",
    "Copper 3": "https://1.bp.blogspot.com/-hRzg2KandBE/Xm3UYlQ12_I/AAAAAAAAFxo/z9-CBJ7Q82gRX3bJyppJ6CqGVxOxenD4ACLcBGAsYHQ/s1600/hd-rank2.png",
    "Copper 2": "https://1.bp.blogspot.com/-XnHmrwz0Swg/Xm3UZopfftI/AAAAAAAAFx0/cHYQtBBccsMX7olAl1Um9b7819hnK_V3ACLcBGAsYHQ/s1600/hd-rank3.png",
    "Copper 1": "https://1.bp.blogspot.com/-ynFgImloahs/Xm3UZoQnqNI/AAAAAAAAFx4/igK8MiAsHy8lWe78wvENDQQLOA6CcO_bwCLcBGAsYHQ/s1600/hd-rank4.png",
    "Bronze 5": "https://1.bp.blogspot.com/-onnaOvmDpWw/Xm4oAOzlafI/AAAAAAAAFy4/zWkW4VmNfigLlVOZKEeZYVJupxChhSvgQCLcBGAsYHQ/s1600/1584277437510-2.png",
    "Bronze 4": "https://1.bp.blogspot.com/-xzz6MXrAacY/Xm3UaJqporI/AAAAAAAAFx8/AZDum8ywWr4zSTWhUl1r8VHAhpXLx2ZzgCLcBGAsYHQ/s1600/hd-rank5.png",
    "Bronze 3": "https://1.bp.blogspot.com/-Z3Yr_2GFtuo/Xm3Uab5XOQI/AAAAAAAAFyA/N5rkuLVl9BMsTJhiMnNC0GIGus_AmgHGwCLcBGAsYHQ/s1600/hd-rank6.png",
    "Bronze 2": "https://1.bp.blogspot.com/-AMkIbb73sAE/Xm3UaqBe7pI/AAAAAAAAFyE/Vy8Z--BG7HUnEUWGMXEo3lCvnpT5loObQCLcBGAsYHQ/s1600/hd-rank7.png",
    "Bronze 1": "https://1.bp.blogspot.com/-uv6DA0nC08c/Xm3Ua-u-9sI/AAAAAAAAFyI/hyIZs5_7Y5o-hzgRaYJELErGmIXQdsc3gCLcBGAsYHQ/s1600/hd-rank8.png",
    "Silver 5": "https://1.bp.blogspot.com/-a2HE_ZV_NIA/Xm4n6qRlGyI/AAAAAAAAFyw/o_jn6KPzZxENEHODj0da2HUvmx8LPejFwCLcBGAsYHQ/s1600/1584277437510-0.png",
    "Silver 4": "https://1.bp.blogspot.com/-16ECHs-gf8c/Xm3UbG2mP3I/AAAAAAAAFyM/XUzlpo6jxSg_1DHAwzK2me7HaBCU5xFZACLcBGAsYHQ/s1600/hd-rank9.png",
    "Silver 3": "https://1.bp.blogspot.com/-UuYDGymcwuw/Xm3UVeck1PI/AAAAAAAAFxA/izK0tdMQPCU_sGqVUxpzyiz7s2j3M9hwwCLcBGAsYHQ/s1600/hd-rank10.png",
    "Silver 2": "https://1.bp.blogspot.com/-dVNLGMbHNmQ/Xm3UWLpkz1I/AAAAAAAAFxE/RhjGp4IN-SIELvbJmLEFUygVARx_bSJYwCLcBGAsYHQ/s1600/hd-rank11.png",
    "Silver 1": "https://1.bp.blogspot.com/-kEeEijf-wEg/Xm3UWaLJEBI/AAAAAAAAFxI/si2ME65ClnwBZ4nhPGQaBYMXt_5VJumcACLcBGAsYHQ/s1600/hd-rank12.png",
    "Gold 3": "https://1.bp.blogspot.com/-JPWKuujIk7M/Xm3UW-haWPI/AAAAAAAAFxQ/n0ji5v61RaIPpmadl7OyYQyn8tnCyQsWwCLcBGAsYHQ/s1600/hd-rank14.png",
    "Gold 2": "https://1.bp.blogspot.com/-TCSPlsDcmaE/Xm3UXON-qrI/AAAAAAAAFxU/9JXHlACzbh0PD_3YQH6xPU7q_p0kmm7tACLcBGAsYHQ/s1600/hd-rank15.png",
    "Gold 1": "https://1.bp.blogspot.com/-Yt5nUk_FslE/Xm3UXSKGV9I/AAAAAAAAFxY/YBfoZlcKhgIhLGfWUP3zBfG5pie3p44fwCLcBGAsYHQ/s1600/hd-rank16.png",
    "Platinum 3": "https://1.bp.blogspot.com/-qU29YefqO5s/Xm3UXrim_RI/AAAAAAAAFxc/rYoiVnpFA3My3gxV0Z62WXu2-sgihgGKwCLcBGAsYHQ/s1600/hd-rank17.png",
    "Platinum 2": "https://1.bp.blogspot.com/-kC86tmRCugM/Xm3UX1yy2-I/AAAAAAAAFxg/2dP3bfv5HcM-yUrf8jVryFNinjbLuuORACLcBGAsYHQ/s1600/hd-rank18.png",
    "Platinum 1": "https://1.bp.blogspot.com/-YrDKPn6t_Wo/Xm3UYZsBteI/AAAAAAAAFxk/I3BdZa5fuRIG_4u0kg5nK4YV-KkvFVU1ACLcBGAsYHQ/s1600/hd-rank19.png",
    "Diamond": "https://1.bp.blogspot.com/-uBlYBPbiyCA/Xm3UY_DLCeI/AAAAAAAAFxs/cUEIesyO5Eccyeg1fVjma17FfbUPmLUIACLcBGAsYHQ/s1600/hd-rank20.png",
    "Champions": "https://1.bp.blogspot.com/-BFJI_8pIaQ0/Xm3UZeqRDBI/AAAAAAAAFxw/QbXial45eQMf00UB0r_b480MmaOjbnOQQCLcBGAsYHQ/s1600/hd-rank21.png",
    "III": "3",
    "II": "2",
    "I": "1"
};
let CasualTie = {
    "NOT RANKED YET.": "https://1.bp.blogspot.com/-mJplONtR7kE/Xm3UVIOKdKI/AAAAAAAAFw4/5OP_xi9nXTw5N3vZcCiPNV0wZCTRZmSwQCLcBGAsYHQ/s1600/hd-rank0.png",
    "UNRANKED": "https://1.bp.blogspot.com/-mJplONtR7kE/Xm3UVIOKdKI/AAAAAAAAFw4/5OP_xi9nXTw5N3vZcCiPNV0wZCTRZmSwQCLcBGAsYHQ/s1600/hd-rank0.png",
    "COPPER V": "https://1.bp.blogspot.com/-iCcUJjIGEjg/Xm4n9tVSoII/AAAAAAAAFy0/n9ZT7A28Ml4el7Ct3qe-eEglrb4MtSAzACLcBGAsYHQ/s1600/1584277437510-1.png",
    "COPPER IV": "https://1.bp.blogspot.com/-9b-akS9x8pA/Xm3UVBSHKzI/AAAAAAAAFw8/F3dDPTOcd8sv1dBDZkL9Bxr7be84CoJUQCLcBGAsYHQ/s1600/hd-rank1.png",
    "COPPER III": "https://1.bp.blogspot.com/-hRzg2KandBE/Xm3UYlQ12_I/AAAAAAAAFxo/z9-CBJ7Q82gRX3bJyppJ6CqGVxOxenD4ACLcBGAsYHQ/s1600/hd-rank2.png",
    "COPPER II": "https://1.bp.blogspot.com/-XnHmrwz0Swg/Xm3UZopfftI/AAAAAAAAFx0/cHYQtBBccsMX7olAl1Um9b7819hnK_V3ACLcBGAsYHQ/s1600/hd-rank3.png",
    "COPPER I": "https://1.bp.blogspot.com/-ynFgImloahs/Xm3UZoQnqNI/AAAAAAAAFx4/igK8MiAsHy8lWe78wvENDQQLOA6CcO_bwCLcBGAsYHQ/s1600/hd-rank4.png",
    "BRONZE V": "https://1.bp.blogspot.com/-onnaOvmDpWw/Xm4oAOzlafI/AAAAAAAAFy4/zWkW4VmNfigLlVOZKEeZYVJupxChhSvgQCLcBGAsYHQ/s1600/1584277437510-2.png",
    "BRONZE IV": "https://1.bp.blogspot.com/-xzz6MXrAacY/Xm3UaJqporI/AAAAAAAAFx8/AZDum8ywWr4zSTWhUl1r8VHAhpXLx2ZzgCLcBGAsYHQ/s1600/hd-rank5.png",
    "BRONZE III": "https://1.bp.blogspot.com/-Z3Yr_2GFtuo/Xm3Uab5XOQI/AAAAAAAAFyA/N5rkuLVl9BMsTJhiMnNC0GIGus_AmgHGwCLcBGAsYHQ/s1600/hd-rank6.png",
    "BRONZE II": "https://1.bp.blogspot.com/-AMkIbb73sAE/Xm3UaqBe7pI/AAAAAAAAFyE/Vy8Z--BG7HUnEUWGMXEo3lCvnpT5loObQCLcBGAsYHQ/s1600/hd-rank7.png",
    "BRONZE I": "https://1.bp.blogspot.com/-uv6DA0nC08c/Xm3Ua-u-9sI/AAAAAAAAFyI/hyIZs5_7Y5o-hzgRaYJELErGmIXQdsc3gCLcBGAsYHQ/s1600/hd-rank8.png",
    "SILVER V": "https://1.bp.blogspot.com/-a2HE_ZV_NIA/Xm4n6qRlGyI/AAAAAAAAFyw/o_jn6KPzZxENEHODj0da2HUvmx8LPejFwCLcBGAsYHQ/s1600/1584277437510-0.png",
    "SILVER IV": "https://1.bp.blogspot.com/-16ECHs-gf8c/Xm3UbG2mP3I/AAAAAAAAFyM/XUzlpo6jxSg_1DHAwzK2me7HaBCU5xFZACLcBGAsYHQ/s1600/hd-rank9.png",
    "SILVER III": "https://1.bp.blogspot.com/-UuYDGymcwuw/Xm3UVeck1PI/AAAAAAAAFxA/izK0tdMQPCU_sGqVUxpzyiz7s2j3M9hwwCLcBGAsYHQ/s1600/hd-rank10.png",
    "SILVER II": "https://1.bp.blogspot.com/-dVNLGMbHNmQ/Xm3UWLpkz1I/AAAAAAAAFxE/RhjGp4IN-SIELvbJmLEFUygVARx_bSJYwCLcBGAsYHQ/s1600/hd-rank11.png",
    "SILVER I": "https://1.bp.blogspot.com/-kEeEijf-wEg/Xm3UWaLJEBI/AAAAAAAAFxI/si2ME65ClnwBZ4nhPGQaBYMXt_5VJumcACLcBGAsYHQ/s1600/hd-rank12.png",
    "GOLD III": "https://1.bp.blogspot.com/-JPWKuujIk7M/Xm3UW-haWPI/AAAAAAAAFxQ/n0ji5v61RaIPpmadl7OyYQyn8tnCyQsWwCLcBGAsYHQ/s1600/hd-rank14.png",
    "GOLD II": "https://1.bp.blogspot.com/-TCSPlsDcmaE/Xm3UXON-qrI/AAAAAAAAFxU/9JXHlACzbh0PD_3YQH6xPU7q_p0kmm7tACLcBGAsYHQ/s1600/hd-rank15.png",
    "GOLD I": "https://1.bp.blogspot.com/-Yt5nUk_FslE/Xm3UXSKGV9I/AAAAAAAAFxY/YBfoZlcKhgIhLGfWUP3zBfG5pie3p44fwCLcBGAsYHQ/s1600/hd-rank16.png",
    "PLATINUM III": "https://1.bp.blogspot.com/-qU29YefqO5s/Xm3UXrim_RI/AAAAAAAAFxc/rYoiVnpFA3My3gxV0Z62WXu2-sgihgGKwCLcBGAsYHQ/s1600/hd-rank17.png",
    "PLATINUM II": "https://1.bp.blogspot.com/-kC86tmRCugM/Xm3UX1yy2-I/AAAAAAAAFxg/2dP3bfv5HcM-yUrf8jVryFNinjbLuuORACLcBGAsYHQ/s1600/hd-rank18.png",
    "PLATINUM I": "https://1.bp.blogspot.com/-YrDKPn6t_Wo/Xm3UYZsBteI/AAAAAAAAFxk/I3BdZa5fuRIG_4u0kg5nK4YV-KkvFVU1ACLcBGAsYHQ/s1600/hd-rank19.png",
    "DIAMOND": "https://1.bp.blogspot.com/-uBlYBPbiyCA/Xm3UY_DLCeI/AAAAAAAAFxs/cUEIesyO5Eccyeg1fVjma17FfbUPmLUIACLcBGAsYHQ/s1600/hd-rank20.png",
    "CHAMPIONS": "https://1.bp.blogspot.com/-BFJI_8pIaQ0/Xm3UZeqRDBI/AAAAAAAAFxw/QbXial45eQMf00UB0r_b480MmaOjbnOQQCLcBGAsYHQ/s1600/hd-rank21.png",
    "V": 5,
    "IV": 4,
    "III": 3,
    "II": 2,
    "I": 1
};
let KoreaTie = {
    "Not ranked yet.": "없음",
    "Unranked": "배치",
    "Copper V": "카퍼 5",
    "Copper IV": "카퍼 4",
    "Copper III": "카퍼 3",
    "Copper II": "카퍼 2",
    "Copper I": "카퍼 1",
    "Bronze V": "브론즈 5",
    "Bronze IV": "브론즈 4",
    "Bronze III": "브론즈 3",
    "Bronze II": "브론즈 2",
    "Bronze I": "브론즈 1",
    "Silver V": "실버 5",
    "Silver IV": "실버 4",
    "Silver III": "실버 3",
    "Silver II": "실버 2",
    "Silver I": "실버 1",
    "Gold III": "골드 3",
    "Gold II": "골드 2",
    "Gold I": "골드 1",
    "Platinum III": "플래티넘 3",
    "Platinum II": "플래티넘 2",
    "Platinum I": "플래티넘 1",
    "Diamond": "다이아몬드",
    "Champions": "챔피언"
};
let KoreaTie2 = {
    "Not ranked yet.": "없음",
    "Unranked": "배치",
    "Copper 5": "카퍼 5",
    "Copper 4": "카퍼 4",
    "Copper 3": "카퍼 3",
    "Copper 2": "카퍼 2",
    "Copper 1": "카퍼 1",
    "Bronze 5": "브론즈 5",
    "Bronze 4": "브론즈 4",
    "Bronze 3": "브론즈 3",
    "Bronze 2": "브론즈 2",
    "Bronze 1": "브론즈 1",
    "Silver 5": "실버 5",
    "Silver 4": "실버 4",
    "Silver 3": "실버 3",
    "Silver 2": "실버 2",
    "Silver 1": "실버 1",
    "Gold 3": "골드 3",
    "Gold 2": "골드 2",
    "Gold 1": "골드 1",
    "Platinum 3": "플래티넘 3",
    "Platinum 2": "플래티넘 2",
    "Platinum 1": "플래티넘 1",
    "Diamond": "다이아몬드",
    "Champions": "챔피언"
};
let User = null;

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (room == "● 레인보우식스 커뮤니티 since 2016" || room == "레인보우식스시즈PC" || room == "● 봇방" || room == "레식왕국 R6KD" || room == "레식레식" || room == "●" || room == "KOR | 레인보우식스시즈") {
        let target = "";
        let splitedMsg = msg.split(" ");
        if (splitedMsg[0] == "!전적") {
            if (splitedMsg.length == 1)
                target = sender
                .replace(/[^0-9a-z-_.]/gi, '');
            else
                target = splitedMsg.slice(1).join(" ");
            switch (splitedMsg[1]) {
                case String("나"):
                    target = sender
                        .replace(/[^0-9a-z-_.]/gi, '');
                    switch (splitedMsg[2]) {
                        case String("캐주얼"):
                            me = sender
                                .replace(/[^0-9a-z-_.]/gi, '');
                            replier.reply(`⟨ ${me} ⟩ 님 전적 검색중...`);
                            try {
                                if (User == null) { //중첩 명령어 금지
                                    User = sender; //닉네임을 인식하여 각각 다른사람이 이 명령어를 친다면 막음.
                                    let Code = Jsoup.connect(`https://r6.tracker.network/profile/pc/${me}`).get().toString().split("<meta property=\"og:image\" content=\"https://ubisoft-avatars.akamaized.net/")[1].split("/default_256_256.png\">")[0];
                                    let Player = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${Code}`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
                                    let main = Jsoup.connect(`https://r6.tracker.network/profile/pc/${me}/seasons`).ignoreHttpErrors(!0).get()
                                    let casual = main.select("div.r6-season").get(0)
                                    let fact = casual.select("div.r6-season__region").text()
                                    if (fact == "Ranked") {
                                        User = sender;
                                        let casual = main.select("div.r6-season").get(1)
                                        let casualTie = casual.select("div.trn-defstat__value").get(8).text();
                                        let casualTie2 = casual.select("div.trn-defstat__value").get(9).text();
                                        let casualkd = casual.select("div.trn-defstat__value").get(0).text();
                                        let casualwins = casual.select("div.trn-defstat__value").get(4).text()
                                        let casualaban = casual.select("div.trn-defstat__value").get(7).text()
                                        let casualskill = casual.select("div.r6-season__skill").text()
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45512),
                                            "template_args": {
                                                main_Title: Player["data"]["username"],
                                                image1: Player["data"]["avatar_url_146"],
                                                title1: "티어",
                                                explanation1: casualTie + " (" + casualTie2 + ")",
                                                image2: CasualTie[casualTie],
                                                title2: casualskill,
                                                explanation2: "",
                                                image3: "",
                                                title3: "킬뎃",
                                                explanation3: casualkd,
                                                image4: "",
                                                title4: "승률",
                                                explanation4: casualwins,
                                                image5: "",
                                                title5: "매치 포기",
                                                explanation5: casualaban,
                                                code: Player["data"]["uplay_id"]
                                            }
                                        }, "custom");
                                        User = null;
                                    } else {
                                        let casual = main.select("div.r6-season").get(0)
                                        let casualTie = casual.select("div.trn-defstat__value").get(8).text();
                                        let casualTie2 = casual.select("div.trn-defstat__value").get(9).text();
                                        let casualkd = casual.select("div.trn-defstat__value").get(0).text();
                                        let casualwins = casual.select("div.trn-defstat__value").get(4).text()
                                        let casualaban = casual.select("div.trn-defstat__value").get(7).text()
                                        let casualskill = casual.select("div.r6-season__skill").text()
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45512),
                                            "template_args": {
                                                main_Title: Player["data"]["username"],
                                                image1: Player["data"]["avatar_url_146"],
                                                title1: "티어",
                                                explanation1: casualTie + " (" + casualTie2 + ")",
                                                image2: CasualTie[casualTie],
                                                title2: casualskill,
                                                explanation2: "",
                                                image3: "",
                                                title3: "킬뎃",
                                                explanation3: casualkd,
                                                image4: "",
                                                title4: "승률",
                                                explanation4: casualwins,
                                                image5: "",
                                                title5: "매치 포기",
                                                explanation5: casualaban,
                                                code: Player["data"]["uplay_id"]
                                            }
                                        }, "custom");
                                        User = null;
                                    }
                                } else {
                                    replier.reply(`${User}님이 쓰고 계십니다.\n차례를 지켜주세요.`); //같은 명령어를 다른사람들끼리 친다면 먼저 친사람에게 양보하라는뜻.
                                }
                            } catch (e) {
                                if (e.message == "Cannot read property \"uplay_id\" from undefined") {
                                    return replier.reply("Uplay ID를 가져오지 못했습니다.\n서버 통신이 늦거나 알수없는 오류입니다.");
                                } else replier.reply(`검색 실패.${allsee}\n${e}`);
                                User = null;
                            }
                            break;
                        case "오퍼":
                            me = sender
                                .replace(/[^0-9a-z-_.]/gi, '');
                            replier.reply(`⟨ ${me} ⟩ 님 전적 검색중...`);
                            try {
                                if (User == null) {
                                    User = sender;
                                    let Data = JSON.parse(Jsoup.connect(`https://api2.r6stats.com/public-api${R6stats.operatorStats(me, "pc").url}`).header("Content-Type", "application/json").header("User-Agent", "R6Stats API Application").header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body());
                                    let JsonData = {};
                                    let Box = [];
                                    if (Data.error == "no_records_found") {
                                        let stat = Jsoup.connect(`https://r6.tracker.network/profile/pc/${me}`).get().toString().split("<meta property=\"og:image\" content=\"https://ubisoft-avatars.akamaized.net/")[1].split("/default_256_256.png\">")[0];
                                        let R6stat = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${stat}`).ignoreContentType(!0).execute().body());
                                        for (var i = 0; i < R6stat.data.operators.length; i++) {
                                            JsonData[R6stat.data.operators[i].operator.name] = R6stat.data.operators[i].playtime;
                                        }
                                        for (let number in JsonData) {
                                            Box.push([number, JsonData[number]]);
                                        }
                                        Box.sort(function(a, b) {
                                            return b[1] - a[1];
                                        });
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45515),
                                            "template_args": {
                                                main_Title: R6stat["data"]["username"],
                                                image1: operimg[Box[0][0]],
                                                title1: "",
                                                explanation1: OperKoreaName[Box[0][0]] + "\n" + TimeConvert(Box[0][1]),
                                                image2: operimg[Box[1][0]],
                                                title2: "",
                                                explanation2: OperKoreaName[Box[1][0]] + "\n" + TimeConvert(Box[1][1]),
                                                image3: operimg[Box[2][0]],
                                                title3: "",
                                                explanation3: OperKoreaName[Box[2][0]] + "\n" + TimeConvert(Box[2][1]),
                                                image4: operimg[Box[3][0]],
                                                title4: "",
                                                explanation4: OperKoreaName[Box[3][0]] + "\n" + TimeConvert(Box[3][1]),
                                                image5: operimg[Box[4][0]],
                                                title5: "",
                                                explanation5: OperKoreaName[Box[4][0]] + "\n" + TimeConvert(Box[4][1]),
                                                code: stat + "/operators"
                                            }
                                        }, "custom");
                                        User = null;
                                        Box = [];
                                        JsonData = {};
                                    } else {
                                        for (var i = 0; i < Data.operators.length; i++) {
                                            JsonData[Data.operators[i].name] = Data.operators[i].playtime;
                                        }
                                        for (let number in JsonData) {
                                            Box.push([number, JsonData[number]]);
                                        }
                                        Box.sort(function(a, b) {
                                            return b[1] - a[1];
                                        });
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45515),
                                            "template_args": {
                                                main_Title: Data["username"],
                                                image1: operimg[Box[0][0]],
                                                title1: "",
                                                explanation1: OperKoreaName[Box[0][0]] + "\n" + TimeConvert(Box[0][1]),
                                                image2: operimg[Box[1][0]],
                                                title2: "",
                                                explanation2: OperKoreaName[Box[1][0]] + "\n" + TimeConvert(Box[1][1]),
                                                image3: operimg[Box[2][0]],
                                                title3: "",
                                                explanation3: OperKoreaName[Box[2][0]] + "\n" + TimeConvert(Box[2][1]),
                                                image4: operimg[Box[3][0]],
                                                title4: "",
                                                explanation4: OperKoreaName[Box[3][0]] + "\n" + TimeConvert(Box[3][1]),
                                                image5: operimg[Box[4][0]],
                                                title5: "",
                                                explanation5: OperKoreaName[Box[4][0]] + "\n" + TimeConvert(Box[4][1]),
                                                code: Data["uplay_id"] + "/operators"
                                            }
                                        }, "custom");
                                        User = null;
                                        Box = [];
                                        JsonData = {};
                                    }
                                } else {
                                    replier.reply(`${User} 님이 쓰고 계십니다.\n차례를 지켜주세요.`); //같은 명령어를 다른사람들끼리 친다면 먼저 친사람에게 양보하라는뜻.
                                    Box = [];
                                    JsonData = {};
                                }
                            } catch (e) {
                                if (e.message == "Cannot read property \"uplay_id\" from undefined") {
                                    return replier.reply("Uplay ID를 가져오지 못했습니다.\n서버 통신이 늦거나 알수없는 오류입니다.");
                                } else replier.reply(`검색 실패.${allsee}\n${e}`);
                                User = null;
                                Box = [];
                                JsonData = {};
                            }
                            Box = [];
                            JsonData = {};
                            break;
                        case String("세부"):
                            me = sender
                                .replace(/[^0-9a-z-_.]/gi, '');
                            replier.reply(`⟨ ${me} ⟩ 님 전적 검색중...`);
                            try {
                                if (User == null) { //중첩 명령어 금지
                                    User = sender; //닉네임을 인식하여 각각 다른사람이 이 명령어를 친다면 막음.
                                    replier.reply(Details(me, "pc"));
                                    User = null; //중첩 명령어 종료
                                } else {
                                    replier.reply(`${User}님이 쓰고 계십니다.\n차례를 지켜주세요.`); //같은 명령어를 다른사람들끼리 친다면 먼저 친사람에게 양보하라는뜻.
                                }
                            } catch (e) {
                                if (e.message == "Cannot read property \"uplay_id\" from undefined") {
                                    return replier.reply("Uplay 고유 아이디 가 존재하지 않습니다.\n닉네임을 잘못 치셨거나, 해당 닉네임의 데이터가 없습니다.");
                                } else replier.reply(`검색 실패.${allsee}\n${e}`);
                                User = null;
                            }
                            break;
                        default:
                            me = sender
                                .replace(/[^0-9a-z-_.]/gi, '');
                            replier.reply(`⟨ ${me} ⟩ 님 전적 검색중...`);
                            try {
                                if (User == null) { //중첩 명령어 금지
                                    User = sender; //닉네임을 인식하여 각각 다른사람이 이 명령어를 친다면 막음.
                                    let Player = JSON.parse(Jsoup.connect(`https://api2.r6stats.com/public-api${R6stats.playerStats(me, "pc").url}`).header("Content-Type", "application/json").header("User-Agent", "R6Stats API Application").header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body());
                                    let Seasons = JSON.parse(Jsoup.connect(`https://api2.r6stats.com/public-api${R6stats.seasonalStats(me, "pc").url}`).header("Content-Type", "application/json").header("User-Agent", "R6Stats API Application").header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body());
                                    if (Player.error || Seasons.error == "no_records_found") {
                                        User = sender;
                                        let stat = Jsoup.connect(`https://r6.tracker.network/profile/pc/${me}`).get().toString().split("<meta property=\"og:image\" content=\"https://ubisoft-avatars.akamaized.net/")[1].split("/default_256_256.png\">")[0];
                                        let Player = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${stat}`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
                                        let Seasons = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${Player["data"]["uplay_id"]}/seasonal`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
                                        let ranks = Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["regions"]["ncsa"][0]["rank"]
                                        let max_ranks = Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["regions"]["ncsa"][0]["max_rank"]
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45512),
                                            "template_args": {
                                                main_image: "",
                                                main_Title: Player["data"]["username"],
                                                image1: Player["data"]["avatar_url_146"],
                                                title1: "레벨",
                                                explanation1: Player["data"]["progression"]["level"],
                                                image2: RankTies2[Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["ranks"][ranks]["name"]],
                                                title2: "티어",
                                                explanation2: KoreaTie2[Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["ranks"][ranks]["name"]],
                                                image3: "",
                                                title3: "플레이",
                                                explanation3: TimeConvert(Player["data"]["stats"][0]["general"]["playtime"]),
                                                image4: "",
                                                title4: "승률",
                                                explanation4: getWinRate(Player["data"]["stats"][0]["general"]["wins"], Player["data"]["stats"][0]["general"]["losses"]).toFixed(2) + "%",
                                                image5: "",
                                                title5: "킬뎃",
                                                explanation5: Player["data"]["stats"][0]["general"]["kd"].toFixed(2),
                                                code: Player["data"]["uplay_id"]
                                            }
                                        }, "custom");
                                        User = null; //중첩 명령어 종료
                                    } else {
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45512),
                                            "template_args": {
                                                main_image: "",
                                                main_Title: Player["username"],
                                                image1: Player["avatar_url_146"],
                                                title1: "레벨",
                                                explanation1: Player["progression"]["level"],
                                                image2: RankTies[Seasons["seasons"][Object.keys(Seasons["seasons"])[0]]["regions"]["ncsa"][0]["rank_text"]],
                                                title2: "티어",
                                                explanation2: KoreaTie[Seasons["seasons"][Object.keys(Seasons["seasons"])[0]]["regions"]["ncsa"][0]["rank_text"]],
                                                image3: "",
                                                title3: "플레이",
                                                explanation3: TimeConvert(Player["stats"]["general"]["playtime"]),
                                                image4: "",
                                                title4: "승률",
                                                explanation4: [getWinRate(Player["stats"]["general"]["wins"], Player["stats"]["general"]["losses"]).toFixed(2) + "%"],
                                                image5: "",
                                                title5: "킬뎃",
                                                explanation5: Player["stats"]["general"]["kd"].toFixed(2),
                                                code: Player["uplay_id"]
                                            }
                                        }, "custom");
                                        User = null; //중첩 명령어 종료
                                    }
                                } else {
                                    replier.reply(`${User}님이 쓰고 계십니다.\n차례를 지켜주세요.`); //같은 명령어를 다른사람들끼리 친다면 먼저 친사람에게 양보하라는뜻.
                                }
                            } catch (e) {
                                if (e.message == "Cannot read property \"uplay_id\" from undefined") {
                                    return replier.reply("Uplay 고유 아이디 가 존재하지 않습니다.\n닉네임을 잘못 치셨거나, 해당 닉네임의 데이터가 없습니다.");
                                } else replier.reply(`검색 실패.${allsee}\n${e}`);
                                User = null;
                            }
                            break;
                    }
                    break;
                default:
                    switch (splitedMsg[2]) {
                        case String("캐주얼"):
                            replier.reply(`⟨ ${splitedMsg[1]} ⟩ 님 전적 검색중...`);
                            try {
                                if (User == null) { //중첩 명령어 금지
                                    User = sender; //닉네임을 인식하여 각각 다른사람이 이 명령어를 친다면 막음.
                                    let Code = Jsoup.connect(`https://r6.tracker.network/profile/pc/${splitedMsg[1]}`).get().toString().split("<meta property=\"og:image\" content=\"https://ubisoft-avatars.akamaized.net/")[1].split("/default_256_256.png\">")[0];
                                    let Player = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${Code}`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
                                    if (Player.error == "no_records_found") {
                                        replier.reply("레코드 오류!");
                                    } else {
                                        let main = Jsoup.connect(`https://r6.tracker.network/profile/pc/${splitedMsg[1]}/seasons`).get()
                                        let casual = main.select("div.r6-season").get(0)
                                        let fact = casual.select("div.r6-season__region").text()
                                        if (fact == "Ranked") {
                                            User = sender;
                                            let casual = main.select("div.r6-season").get(1)
                                            let casualTie = casual.select("div.trn-defstat__value").get(8).text();
                                            let casualTie2 = casual.select("div.trn-defstat__value").get(9).text();
                                            let casualkd = casual.select("div.trn-defstat__value").get(0).text();
                                            let casualwins = casual.select("div.trn-defstat__value").get(4).text()
                                            let casualaban = casual.select("div.trn-defstat__value").get(7).text()
                                            let casualskill = casual.select("div.r6-season__skill").text()
                                            Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                                "link_ver": "4.0",
                                                "template_id": (45512),
                                                "template_args": {
                                                    main_Title: Player["data"]["username"],
                                                    image1: Player["data"]["avatar_url_146"],
                                                    title1: "티어",
                                                    explanation1: casualTie + " (" + casualTie2 + ")",
                                                    image2: CasualTie[casualTie],
                                                    title2: casualskill,
                                                    explanation2: "",
                                                    image3: "",
                                                    title3: "킬뎃",
                                                    explanation3: casualkd,
                                                    image4: "",
                                                    title4: "승률",
                                                    explanation4: casualwins,
                                                    image5: "",
                                                    title5: "매치 포기",
                                                    explanation5: casualaban,
                                                    code: Player["data"]["uplay_id"]
                                                }
                                            }, "custom");
                                            User = null;
                                        } else {
                                            let casual = main.select("div.r6-season").get(0)
                                            let casualTie = casual.select("div.trn-defstat__value").get(8).text();
                                            let casualTie2 = casual.select("div.trn-defstat__value").get(9).text();
                                            let casualkd = casual.select("div.trn-defstat__value").get(0).text();
                                            let casualwins = casual.select("div.trn-defstat__value").get(4).text()
                                            let casualaban = casual.select("div.trn-defstat__value").get(7).text()
                                            let casualskill = casual.select("div.r6-season__skill").text()
                                            Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                                "link_ver": "4.0",
                                                "template_id": (45512),
                                                "template_args": {
                                                    main_Title: Player["data"]["username"],
                                                    image1: Player["data"]["avatar_url_146"],
                                                    title1: "티어",
                                                    explanation1: casualTie + " (" + casualTie2 + ")",
                                                    image2: CasualTie[casualTie],
                                                    title2: casualskill,
                                                    explanation2: "",
                                                    image3: "",
                                                    title3: "킬뎃",
                                                    explanation3: casualkd,
                                                    image4: "",
                                                    title4: "승률",
                                                    explanation4: casualwins,
                                                    image5: "",
                                                    title5: "매치 포기",
                                                    explanation5: casualaban,
                                                    code: Player["data"]["uplay_id"]
                                                }
                                            }, "custom");
                                            User = null;
                                        }
                                        User = null;
                                    }
                                } else {
                                    replier.reply(`${User}님이 쓰고 계십니다.\n차례를 지켜주세요.`); //같은 명령어를 다른사람들끼리 친다면 먼저 친사람에게 양보하라는뜻.
                                }
                                User = null;
                            } catch (e) {
                                if (e.message == "Cannot read property \"uplay_id\" from undefined") {
                                    return replier.reply("Uplay 고유 아이디 가 존재하지 않습니다.\n닉네임을 잘못 치셨거나, 해당 닉네임의 데이터가 없습니다.");
                                } else replier.reply(`검색 실패.${allsee}\n${e}`);
                                User = null;
                            }
                            break;
                        case String("오퍼"):
                            replier.reply(`⟨ ${splitedMsg[1]} ⟩ 님 전적 검색중...`);
                            try {
                                if (User == null) {
                                    User = sender;
                                    let Data = JSON.parse(Jsoup.connect(`https://api2.r6stats.com/public-api${R6stats.operatorStats(splitedMsg[1], "pc").url}`).header("Content-Type", "application/json").header("User-Agent", "R6Stats API Application").header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body());
                                    let JsonData = {};
                                    let Box = [];
                                    if (Data.error == "no_records_found") {
                                        let stat = Jsoup.connect(`https://r6.tracker.network/profile/pc/${splitedMsg[1]}`).get().toString().split("<meta property=\"og:image\" content=\"https://ubisoft-avatars.akamaized.net/")[1].split("/default_256_256.png\">")[0];
                                        let Data = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${stat}`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
                                        for (var i = 0; i < Data.data.operators.length; i++) {
                                            JsonData[Data.data.operators[i].operator.name] = Data.data.operators[i].playtime;
                                        }
                                        for (let number in JsonData) {
                                            Box.push([number, JsonData[number]]);
                                        }
                                        Box.sort(function(a, b) {
                                            return b[1] - a[1];
                                        });
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45515),
                                            "template_args": {
                                                main_Title: Data["data"]["username"],
                                                image1: operimg[Box[0][0]],
                                                title1: "",
                                                explanation1: OperKoreaName[Box[0][0]] + "\n" + TimeConvert(Box[0][1]),
                                                image2: operimg[Box[1][0]],
                                                title2: "",
                                                explanation2: OperKoreaName[Box[1][0]] + "\n" + TimeConvert(Box[1][1]),
                                                image3: operimg[Box[2][0]],
                                                title3: "",
                                                explanation3: OperKoreaName[Box[2][0]] + "\n" + TimeConvert(Box[2][1]),
                                                image4: operimg[Box[3][0]],
                                                title4: "",
                                                explanation4: OperKoreaName[Box[3][0]] + "\n" + TimeConvert(Box[3][1]),
                                                image5: operimg[Box[4][0]],
                                                title5: "",
                                                explanation5: OperKoreaName[Box[4][0]] + "\n" + TimeConvert(Box[4][1]),
                                                code: stat + "/operators"
                                            }
                                        }, "custom");
                                        User = null;
                                        Box = [];
                                        JsonData = {};
                                    } else {
                                        for (var i = 0; i < Data.operators.length; i++) {
                                            JsonData[Data.operators[i].name] = Data.operators[i].playtime;
                                        }
                                        for (let number in JsonData) {
                                            Box.push([number, JsonData[number]]);
                                        }
                                        Box.sort(function(a, b) {
                                            return b[1] - a[1];
                                        });
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45515),
                                            "template_args": {
                                                main_Title: Data["username"],
                                                image1: operimg[Box[0][0]],
                                                title1: "",
                                                explanation1: OperKoreaName[Box[0][0]] + "\n" + TimeConvert(Box[0][1]),
                                                image2: operimg[Box[1][0]],
                                                title2: "",
                                                explanation2: OperKoreaName[Box[1][0]] + "\n" + TimeConvert(Box[1][1]),
                                                image3: operimg[Box[2][0]],
                                                title3: "",
                                                explanation3: OperKoreaName[Box[2][0]] + "\n" + TimeConvert(Box[2][1]),
                                                image4: operimg[Box[3][0]],
                                                title4: "",
                                                explanation4: OperKoreaName[Box[3][0]] + "\n" + TimeConvert(Box[3][1]),
                                                image5: operimg[Box[4][0]],
                                                title5: "",
                                                explanation5: OperKoreaName[Box[4][0]] + "\n" + TimeConvert(Box[4][1]),
                                                code: Data["uplay_id"] + "/operators"
                                            }
                                        }, "custom");
                                        User = null;
                                        Box = [];
                                        JsonData = {};
                                    }
                                } else {
                                    replier.reply(`${User}님이 쓰고 계십니다.\n차례를 지켜주세요.`); //같은 명령어를 다른사람들끼리 친다면 먼저 친사람에게 양보하라는뜻.
                                    User = null;
                                    Box = [];
                                    JsonData = {};
                                }
                            } catch (error) {
                                if (error.message == "Cannot read property \"uplay_id\" from undefined") {
                                    return replier.reply("Uplay 고유 아이디 가 존재하지 않습니다.\n닉네임을 잘못 치셨거나, 해당 닉네임의 데이터가 없습니다.");
                                } else replier.reply(`검색 실패.${allsee}\n${error}`);
                                User = null;
                                Box = [];
                                JsonData = {};
                            }
                            Box = [];
                            JsonData = {};
                            break;
                        case String("세부"):
                            replier.reply(`⟨ ${splitedMsg[1]} ⟩ 님 전적 검색중...`);
                            try {
                                if (User == null) { //중첩 명령어 금지
                                    User = sender; //닉네임을 인식하여 각각 다른사람이 이 명령어를 친다면 막음.
                                    replier.reply(Details(splitedMsg[1], "pc"));
                                    User = null; //중첩 명령어 종료
                                } else {
                                    replier.reply(`${User}님이 쓰고 계십니다.\n차례를 지켜주세요.`); //같은 명령어를 다른사람들끼리 친다면 먼저 친사람에게 양보하라는뜻.
                                }
                            } catch (e) {
                                if (e.message == "Cannot read property \"uplay_id\" from undefined") {
                                    return replier.reply("Uplay 고유 아이디 가 존재하지 않습니다.\n닉네임을 잘못 치셨거나, 해당 닉네임의 데이터가 없습니다.");
                                } else replier.reply(`검색 실패.${allsee}\n${e}`);
                                User = null;
                            }
                            break;
                        default:
                            replier.reply(`⟨ ${target} ⟩ 님 전적 검색중...`);
                            try {
                                if (User == null) { //중첩 명령어 금지
                                    User = sender; //닉네임을 인식하여 각각 다른사람이 이 명령어를 친다면 막음.
                                    let Player = JSON.parse(Jsoup.connect(`https://api2.r6stats.com/public-api${R6stats.playerStats(target, "pc").url}`).header("Content-Type", "application/json").header("User-Agent", "R6Stats API Application").header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body());
                                    let Seasons = JSON.parse(Jsoup.connect(`https://api2.r6stats.com/public-api${R6stats.seasonalStats(target, "pc").url}`).header("Content-Type", "application/json").header("User-Agent", "R6Stats API Application").header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body());
                                    if (Player.error || Seasons.error == "no_records_found") {
                                        let stat = Jsoup.connect(`https://r6.tracker.network/profile/pc/${target}`).get().toString().split("<meta property=\"og:image\" content=\"https://ubisoft-avatars.akamaized.net/")[1].split("/default_256_256.png\">")[0];
                                        let Player = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${stat}`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
                                        let Seasons = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${Player["data"]["uplay_id"]}/seasonal`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
                                        let ranks = Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["regions"]["ncsa"][0]["rank"]
                                        let max_ranks = Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["regions"]["ncsa"][0]["max_rank"]
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45512),
                                            "template_args": {
                                                main_image: "",
                                                main_Title: Player["data"]["username"],
                                                image1: Player["data"]["avatar_url_146"],
                                                title1: "레벨",
                                                explanation1: Player["data"]["progression"]["level"],
                                                image2: RankTies2[Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["ranks"][ranks]["name"]],
                                                title2: "티어",
                                                explanation2: KoreaTie2[Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["ranks"][ranks]["name"]],
                                                image3: "",
                                                title3: "플레이",
                                                explanation3: TimeConvert(Player["data"]["stats"][0]["general"]["playtime"]),
                                                image4: "",
                                                title4: "승률",
                                                explanation4: getWinRate(Player["data"]["stats"][0]["general"]["wins"], Player["data"]["stats"][0]["general"]["losses"]).toFixed(2) + "%",
                                                image5: "",
                                                title5: "킬뎃",
                                                explanation5: Player["data"]["stats"][0]["general"]["kd"].toFixed(2),
                                                code: Player["data"]["uplay_id"]
                                            }
                                        }, "custom");
                                        User = null; //중첩 명령어 종료
                                    } else {
                                        Bridge.getScopeOf("Kakao").Kakao.sendLink(String(room), {
                                            "link_ver": "4.0",
                                            "template_id": (45512),
                                            "template_args": {
                                                main_image: "",
                                                main_Title: Player["username"],
                                                image1: Player["avatar_url_146"],
                                                title1: "레벨",
                                                explanation1: Player["progression"]["level"],
                                                image2: RankTies[Seasons["seasons"][Object.keys(Seasons["seasons"])[0]]["regions"]["ncsa"][0]["rank_text"]],
                                                title2: "티어",
                                                explanation2: KoreaTie[Seasons["seasons"][Object.keys(Seasons["seasons"])[0]]["regions"]["ncsa"][0]["rank_text"]],
                                                image3: "",
                                                title3: "플레이",
                                                explanation3: TimeConvert(Player["stats"]["general"]["playtime"]),
                                                image4: "",
                                                title4: "승률",
                                                explanation4: getWinRate(Player["stats"]["general"]["wins"], Player["stats"]["general"]["losses"]).toFixed(2) + "%",
                                                image5: "",
                                                title5: "킬뎃",
                                                explanation5: Player["stats"]["general"]["kd"].toFixed(2),
                                                code: Player["uplay_id"]
                                            }
                                        }, "custom");
                                        User = null; //중첩 명령어 종료
                                    }
                                } else {
                                    replier.reply(`${User}님이 쓰고 계십니다.\n차례를 지켜주세요.`); //같은 명령어를 다른사람들끼리 친다면 먼저 친사람에게 양보하라는뜻.
                                }
                            } catch (e) {
                                if (e.message == "Cannot read property \"uplay_id\" from undefined") {
                                    replier.reply("Uplay 고유 아이디 가 존재하지 않습니다.\n닉네임을 잘못 치셨거나, 해당 닉네임의 데이터가 없습니다.");
                                    User = null;
                                } else replier.reply(`검색 실패.${allsee}\n${e}`);
                                User = null;
                            }
                            break;
                    }
                    User = null;
            }
            Box = [];
            JsonData = {};
        }
        Box = [];
        JsonData = {};
    }
}

const Details = (username, platform) => {
    try {
        let Player = JSON.parse(Jsoup.connect(`https://api2.r6stats.com/public-api${R6stats.playerStats(username, platform).url}`).header("Content-Type", "application/json").header("User-Agent", "R6Stats API Application").header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body());
        let Seasons = JSON.parse(Jsoup.connect(`https://api2.r6stats.com/public-api${R6stats.seasonalStats(username, platform).url}`).header("Content-Type", "application/json").header("User-Agent", "R6Stats API Application").header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body());
        if (Player.error || Seasons.error == "no_records_found") {
            let stat = Jsoup.connect(`https://r6.tracker.network/profile/pc/${username}`).get().toString().split("<meta property=\"og:image\" content=\"https://ubisoft-avatars.akamaized.net/")[1].split("/default_256_256.png\">")[0];
            let Player = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${stat}`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
            let Seasons = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${stat}/seasonal`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
            let ranks = Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["regions"]["ncsa"][0]["rank"]
            let max_ranks = Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["regions"]["ncsa"][0]["max_rank"]
            return `⬪ 닉네임 : ${Player["data"]["username"]}\n━ ❛ 간략 ❜ ━━━━━━━━\n• 레벨 : ${Player["data"]["progression"]["level"]}\n• 현재 티어 : ${KoreaTie2[Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["ranks"][ranks]["name"]]}\n➥ 최고 티어 : ${KoreaTie2[Seasons["data"]["seasons"][Object.keys(Seasons["data"]["seasons"])[0]]["ranks"][max_ranks]["name"]]}\n• 오퍼 순위\n${OperRanking(username, platform)}\n• 사살률 : ${Player["data"]["stats"][0]["general"]["kd"].toFixed(2)}\n• 승률 : ${[getWinRate(Player["data"]["stats"][0]["general"]["wins"], Player["data"]["stats"][0]["general"]["losses"]).toFixed(2) +"%"]}\n[ 전체 내용 보려면 클릭 ]${allsee}\n━ ❛ 총합 ❜ ━━━━━━━━\n• 사살 : ${Player["data"]["stats"][0]["general"]["kills"]}\n• 죽음 : ${Player["data"]["stats"][0]["general"]["deaths"]}\n• 헤드샷 : ${Player["data"]["stats"][0]["general"]["headshots"]}\n• 근접 킬 : ${Player["data"]["stats"][0]["general"]["melee_kills"]}\n• 관통 킬 : ${Player["data"]["stats"][0]["general"]["penetration_kills"]}\n• 사살률 : ${Player["data"]["stats"][0]["general"]["kd"].toFixed(2)}\n• 승리 : ${Player["data"]["stats"][0]["general"]["wins"]}\n• 패배 : ${Player["data"]["stats"][0]["general"]["losses"]}\n• 승률 : ${[getWinRate(Player["data"]["stats"][0]["general"]["wins"], Player["data"]["stats"][0]["general"]["losses"]).toFixed(2) +"%"]}\n• 레펠 브리칭 : ${Player["data"]["stats"][0]["general"]["rappel_breaches"]}\n• 레인포스 강화 : ${Player["data"]["stats"][0]["general"]["reinforcements_deployed"]}\n• 부활 : ${Player["data"]["stats"][0]["general"]["revives"]}\n• 자살 : ${Player["data"]["stats"][0]["general"]["suicides"]}\n━ ❛ 캐주얼 ❜ ━━━━━━━\n• 사살 : ${Player["data"]["stats"][0]["queue"]["casual"]["kills"]}\n• 죽음 : ${Player["data"]["stats"][0]["queue"]["casual"]["deaths"]}\n• 사살률 : ${Player["data"]["stats"][0]["queue"]["casual"]["kd"].toFixed(2)}\n• 승리 : ${Player["data"]["stats"][0]["queue"]["casual"]["wins"]}\n• 패배 : ${Player["data"]["stats"][0]["queue"]["casual"]["losses"]}\n• 승률 : ${[getWinRate(Player["data"]["stats"][0]["queue"]["casual"]["wins"], Player["data"]["stats"][0]["queue"]["casual"]["losses"]).toFixed(2) +"%"]}\n• 플레이 타임 : ${TimeConvert(Player["data"]["stats"][0]["queue"]["casual"]["playtime"])}\n━ ❛ 랭크 ❜ ━━━━━━━━\n• 사살 : ${Player["data"]["stats"][0]["queue"]["ranked"]["kills"]}\n• 죽음 : ${Player["data"]["stats"][0]["queue"]["ranked"]["deaths"]}\n• 사살률 : ${Player["data"]["stats"][0]["queue"]["ranked"]["kd"].toFixed(2)}\n• 승리 : ${Player["data"]["stats"][0]["queue"]["ranked"]["wins"]}\n• 패배 : ${Player["data"]["stats"][0]["queue"]["ranked"]["losses"]}\n• 승률 : ${[getWinRate(Player["data"]["stats"][0]["queue"]["ranked"]["wins"], Player["data"]["stats"][0]["queue"]["ranked"]["losses"]).toFixed(2) +"%"]}\n• 플레이 타임 : ${TimeConvert(Player["data"]["stats"][0]["queue"]["ranked"]["playtime"])}\n• 고유 번호 : ${stat}`;
        } else {
            return `⬪ 닉네임 : ${Player["username"]}\n━ ❛ 간략 ❜ ━━━━━━━━\n• 레벨 : ${Player["progression"]["level"]}\n• 현재 티어 : ${KoreaTie[Seasons["seasons"][Object.keys(Seasons["seasons"])[0]]["regions"]["ncsa"][0]["rank_text"]]}\n➥ 최고 티어 : ${KoreaTie[Seasons["seasons"][Object.keys(Seasons["seasons"])[0]]["regions"]["ncsa"][0]["max_rank_text"]]}\n• 오퍼 순위\n${OperRanking(username, platform)}\n• 사살률 : ${Player["stats"]["general"]["kd"].toFixed(2)}\n• 승률 : ${[getWinRate(Player["stats"]["general"]["wins"], Player["stats"]["general"]["losses"]).toFixed(2) +"%"]}\n[ 전체 내용 보려면 클릭 ]${allsee}\n━ ❛ 총합 ❜ ━━━━━━━━\n• 사살 : ${Player["stats"]["general"]["kills"]}\n• 죽음 : ${Player["stats"]["general"]["deaths"]}\n• 헤드샷 : ${Player["stats"]["general"]["headshots"]}\n• 근접 킬 : ${Player["stats"]["general"]["melee_kills"]}\n• 관통 킬 : ${Player["stats"]["general"]["penetration_kills"]}\n• 사살률 : ${Player["stats"]["general"]["kd"].toFixed(2)}\n• 승리 : ${Player["stats"]["general"]["wins"]}\n• 패배 : ${Player["stats"]["general"]["losses"]}\n• 승률 : ${[getWinRate(Player["stats"]["general"]["wins"], Player["stats"]["general"]["losses"]).toFixed(2) +"%"]}\n• 레펠 브리칭 : ${Player["stats"]["general"]["rappel_breaches"]}\n• 레인포스 강화 : " ${Player["stats"]["general"]["reinforcements_deployed"]}\n• 부활 : ${Player["stats"]["general"]["revives"]}\n• 자살 : ${Player["stats"]["general"]["suicides"]}\n━ ❛ 캐주얼 ❜ ━━━━━━━\n• 사살 : ${Player["stats"]["queue"]["casual"]["kills"]}\n• 죽음 : ${Player["stats"]["queue"]["casual"]["deaths"]}\n• 사살률 : ${Player["stats"]["queue"]["casual"]["kd"].toFixed(2)}\n• 승리 : ${Player["stats"]["queue"]["casual"]["wins"]}\n• 패배 : ${Player["stats"]["queue"]["casual"]["losses"]}\n• 승률 : ${[getWinRate(Player["stats"]["queue"]["casual"]["wins"], Player["stats"]["queue"]["casual"]["losses"]).toFixed(2) +"%"]}\n• 플레이 타임 : ${TimeConvert(Player["stats"]["queue"]["casual"]["playtime"])}\n━ ❛ 랭크 ❜ ━━━━━━━━\n• 사살 : ${Player["stats"]["queue"]["ranked"]["kills"]}\n• 죽음 : ${Player["stats"]["queue"]["ranked"]["deaths"]}\n• 사살률 : ${Player["stats"]["queue"]["ranked"]["kd"].toFixed(2)}\n• 승리 : ${Player["stats"]["queue"]["ranked"]["wins"]}\n• 패배 : ${Player["stats"]["queue"]["ranked"]["losses"]}\n• 승률 : ${[getWinRate(Player["stats"]["queue"]["ranked"]["wins"], Player["stats"]["queue"]["ranked"]["losses"]).toFixed(2) +"%"]}\n• 플레이 타임 : ${TimeConvert(Player["stats"]["queue"]["ranked"]["playtime"])}\n• 고유 번호 : ${Player["uplay_id"]}`;
        }
    } catch (error) {
        return `검색 실패.\n아이디가 다르거나 없습니다.\n${error}`;
    }
};

const OperRanking = (username, platform) => {
    try {
        let Box = [];
        let JsonData = {};
        let Data = JSON.parse(Jsoup.connect(`https://api2.r6stats.com/public-api${R6stats.operatorStats(username, platform).url}`).header("Content-Type", "application/json").header("User-Agent", "R6Stats API Application").header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body());
        if (Data.error == "no_records_found") {
            let stat = Jsoup.connect(`https://r6.tracker.network/profile/pc/${username}`).get().toString().split("<meta property=\"og:image\" content=\"https://ubisoft-avatars.akamaized.net/")[1].split("/default_256_256.png\">")[0];
            let Data = JSON.parse(Jsoup.connect(`https://r6stats.com/api/stats/${stat}`).ignoreContentType(!0).ignoreHttpErrors(!0).execute().body())
            for (var i = 0; i < Data.data.operators.length; i++) {
                JsonData[Data.data.operators[i].operator.name] = Data.data.operators[i].playtime;
            }
            for (let number in JsonData) {
                Box.push([number, JsonData[number]]);
            }
            Box.sort(function(a, b) {
                return b[1] - a[1];
            });
            return [`➊ ${OperKoreaName[Box[0][0]]} ( ${TimeConvert(Box[0][1])} )\n➋ ${OperKoreaName[Box[1][0]]} ( ${TimeConvert(Box[1][1])} )\n➌ ${OperKoreaName[Box[2][0]]} ( ${TimeConvert(Box[2][1])} )`, Box = []].join(``);
            Box = [];
        } else {
            for (var i = 0; i < Data.operators.length; i++) {
                JsonData[Data.operators[i].name] = Data.operators[i].playtime;
            }
            for (let number in JsonData) {
                Box.push([number, JsonData[number]]);
            }
            Box.sort(function(a, b) {
                return b[1] - a[1];
            });
            return [`➊ ${OperKoreaName[Box[0][0]]}( ${TimeConvert(Box[0][1])} )\n➋ ${OperKoreaName[Box[1][0]]} ( ${TimeConvert(Box[1][1])} )\n➌ ${OperKoreaName[Box[2][0]]} ( ${TimeConvert(Box[2][1])} )`, Box = []].join(``);
            Box = [];
        }
    } catch (error) {
        return "값을 가져올수 없음.";
    }
};

const getWinRate = (t, e) => {
    return 0 != t ? t / (t + e) * 100 : 0;
};

const TimeConvert = m => (m = parseInt(m), d = m / 86400, dd = parseInt(m / 86400), hd = 24 * (d - dd), hh = parseInt(24 * (d - dd)), mmed = 60 * (hd - hh), mm = parseInt(60 * (hd - hh)), ss = parseInt(60 * (mmed - mm)), result = (dd < 1 ? "" : dd + "일") + (hh < 1 ? "" : " " + hh + "시간") + (mm < 1 ? "" : " " + mm + "분"), result.trim());
