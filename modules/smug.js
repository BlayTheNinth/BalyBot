function module() {
    return {
        id: "smug",
        name: "Smug Module",
        desc: "Provides the !smug command, which posts a random anime smug face."
    };
}

function configure() {
    return [
        {
            name: "userlevel.smug",
            value: "all",
            desc: "The minimum user level requires to run the !smug command."
        }
    ];
}

function commands() {
    return [
        {
            name: "smug",
            usage: "",
            func: smug
        }
    ];
}

var m_smugFaces = [
    "http://i.imgur.com/X7h7mmD.jpg",
    "http://i.imgur.com/pDHMOoE.jpg",
    "http://i.imgur.com/HmHMM0A.jpg",
    "http://i.imgur.com/htJQ5Qp.jpg",
    "http://i.imgur.com/QNpVZ51.jpg",
    "http://i.imgur.com/YM5RSMc.png",
    "http://i.imgur.com/UGaPaEl.jpg",
    "http://i.imgur.com/MOOSO5t.gif",
    "http://i.imgur.com/tffVgKx.jpg",
    "http://i.imgur.com/u2LfaGI.jpg",
    "http://i.imgur.com/nRUq6fu.jpg",
    "http://i.imgur.com/ALtfa7O.gif",
    "http://i.imgur.com/z9b28zI.jpg",
    "http://i.imgur.com/XcySO0I.gif",
    "http://i.imgur.com/lmgficj.jpg",
    "http://i.imgur.com/2dMpJRX.jpg",
    "http://i.imgur.com/Hr8oGSp.jpg",
    "http://i.imgur.com/oAeGHIy.jpg",
    "http://i.imgur.com/A3t0b0N.jpg",
    "http://i.imgur.com/Zp1w9hb.jpg",
    "http://i.imgur.com/ENd9d4X.jpg",
    "http://i.imgur.com/a9h13LU.jpg",
    "http://i.imgur.com/VeSFthX.jpg",
    "http://i.imgur.com/RH1bCe5.jpg",
    "http://i.imgur.com/RwHIxxx.jpg",
    "http://i.imgur.com/uARKmqG.jpg",
    "http://i.imgur.com/z6nSDtj.jpg",
    "http://i.imgur.com/F7nlTSM.jpg",
    "http://i.imgur.com/lkHoDZz.jpg",
    "http://i.imgur.com/lfZA8Ss.jpg",
    "http://i.imgur.com/Jayz3iP.jpg",
    "http://i.imgur.com/ytL5W9v.jpg",
    "http://i.imgur.com/j1Q6cNh.jpg",
    "http://i.imgur.com/hkAsD7z.gif",
    "http://i.imgur.com/7do458A.gif",
    "http://i.imgur.com/Ljip3Cu.gif",
    "http://i.imgur.com/V5g7Wxh.gif",
    "http://i.imgur.com/CfqHYKa.jpg",
    "http://i.imgur.com/6s0NLjM.gif",
    "http://i.imgur.com/oXqxz1E.jpg",
    "http://i.imgur.com/ejYBSuz.jpg",
    "http://i.imgur.com/NJE9LGO.jpg",
    "http://i.imgur.com/MZB4UKd.jpg",
    "http://i.imgur.com/G9tEoeH.jpg",
    "http://i.imgur.com/gho0F2Y.gif",
    "http://i.imgur.com/IICYxmo.jpg",
    "http://i.imgur.com/Ka3a8QY.jpg",
    "http://i.imgur.com/X5ALdid.jpg",
    "http://i.imgur.com/m92Y7cb.jpg",
    "http://i.imgur.com/61iLHcw.jpg",
    "http://i.imgur.com/uVedGYt.jpg",
    "http://i.imgur.com/frVcDVw.jpg",
    "http://i.imgur.com/TBP5VIZ.jpg",
    "http://i.imgur.com/B12ygAI.gif",
    "http://i.imgur.com/FQlfY1j.jpg",
    "http://i.imgur.com/YZM9PuO.jpg",
    "http://i.imgur.com/iYOxmlB.jpg",
    "http://i.imgur.com/3b34TRP.jpg",
    "http://i.imgur.com/MlkWOE1.jpg",
    "http://i.imgur.com/lU09gJI.jpg",
    "http://i.imgur.com/1DwWBhd.gif",
    "http://i.imgur.com/rTSv8pA.jpg",
    "http://i.imgur.com/8mQdUMW.jpg",
    "http://i.imgur.com/QhZJwqz.jpg",
    "http://i.imgur.com/fjEUhrK.jpg",
    "http://i.imgur.com/XNGhEn1.jpg",
    "http://i.imgur.com/frbIyRs.jpg",
    "http://i.imgur.com/3h7JfoQ.jpg",
    "http://i.imgur.com/ehJ4JRq.jpg",
    "http://i.imgur.com/hXwryHD.jpg",
    "http://i.imgur.com/PAWj8tL.jpg",
    "http://i.imgur.com/IF3l3m6.jpg",
    "http://i.imgur.com/ioZRrMb.jpg",
    "http://i.imgur.com/aFhY37H.jpg",
    "http://i.imgur.com/Gq3Pr8M.gif",
    "http://i.imgur.com/qg0ihjY.jpg",
    "http://i.imgur.com/D2wqtCY.jpg",
    "http://i.imgur.com/jzbcgzr.jpg",
    "http://i.imgur.com/SVW04G8.jpg",
    "http://i.imgur.com/EKWhTq8.jpg",
    "http://i.imgur.com/mNawysV.jpg",
    "http://i.imgur.com/6trN3KJ.jpg",
    "http://i.imgur.com/B8cG7to.jpg",
    "http://i.imgur.com/7fJPszh.jpg",
    "http://i.imgur.com/tLUGYoZ.jpg",
    "http://i.imgur.com/wOkvZyD.jpg",
    "http://i.imgur.com/3QS5nfl.jpg",
    "http://i.imgur.com/ImFBrbQ.jpg",
    "http://i.imgur.com/LOSmtGy.jpg",
    "http://i.imgur.com/rvTn0WK.jpg",
    "http://i.imgur.com/Z1U8fP6.jpg",
    "http://i.imgur.com/FWXzoWp.jpg",
    "http://i.imgur.com/ZUUb6sv.jpg",
    "http://i.imgur.com/EXyiszm.jpg",
    "http://i.imgur.com/l0wjGUE.jpg",
    "http://i.imgur.com/UQLPkFh.jpg",
    "http://i.imgur.com/Toi6Fnq.jpg",
    "http://i.imgur.com/ZadImIr.jpg",
    "http://i.imgur.com/irJGN1p.jpg",
    "http://i.imgur.com/5fBniuf.jpg",
    "http://i.imgur.com/y5kCUm0.jpg",
    "http://i.imgur.com/Bk7ZBf3.jpg",
    "http://i.imgur.com/OTpUW9E.gif",
    "http://i.imgur.com/Nv5QWEy.jpg",
    "http://i.imgur.com/ardP97K.jpg",
    "http://i.imgur.com/pKdX4tf.jpg",
    "http://i.imgur.com/H0hO45V.jpg",
    "http://i.imgur.com/RZWJJzS.jpg",
    "http://i.imgur.com/KFeQqoi.jpg",
    "http://i.imgur.com/KJz2FNO.jpg",
    "http://i.imgur.com/9rEt6Z9.jpg",
    "http://i.imgur.com/8hU4A9d.jpg",
    "http://i.imgur.com/8qscmwY.jpg",
    "http://i.imgur.com/1NwOrae.jpg",
    "http://i.imgur.com/TfWC51R.jpg",
    "http://i.imgur.com/cabdrcX.jpg",
    "http://i.imgur.com/Kpkt8og.jpg",
    "http://i.imgur.com/OcilrVf.jpg",
    "http://i.imgur.com/NhqdMwV.jpg",
    "http://i.imgur.com/Bp64bAy.jpg",
    "http://i.imgur.com/z7u4gJc.jpg",
    "http://i.imgur.com/mK8CTDx.jpg",
    "http://i.imgur.com/FumTF3e.jpg",
    "http://i.imgur.com/egYSqHC.jpg",
    "http://i.imgur.com/N6goo1B.jpg",
    "http://i.imgur.com/pMpllNS.jpg",
    "http://i.imgur.com/Y9Pi9Gk.jpg",
    "http://i.imgur.com/sa708sN.jpg",
    "http://i.imgur.com/8P6W6Qm.jpg",
    "http://i.imgur.com/yGIr5Wr.jpg",
    "http://i.imgur.com/I27FBcK.jpg",
    "http://i.imgur.com/bEz7DjN.jpg",
    "http://i.imgur.com/4uLi2Ll.jpg",
    "http://i.imgur.com/mNSfzz5.jpg",
    "http://i.imgur.com/sfLmg8U.jpg",
    "http://i.imgur.com/NRBW1t8.jpg",
    "http://i.imgur.com/LLLheuc.jpg",
    "http://i.imgur.com/24L2y87.jpg",
    "http://i.imgur.com/90rkFx4.jpg",
    "http://i.imgur.com/x1W3LdH.jpg",
    "http://i.imgur.com/TmWBzKM.jpg",
    "http://i.imgur.com/vW2gFWC.png",
    "http://i.imgur.com/vjVHwES.jpg",
    "http://i.imgur.com/4SilaeD.png",
    "http://i.imgur.com/0U90HMC.jpg",
    "http://i.imgur.com/McqjsjO.png",
    "http://i.imgur.com/hRfzpew.png",
    "http://i.imgur.com/mZkrUyf.png",
    "http://i.imgur.com/RaJzOhD.png",
    "http://i.imgur.com/JCaB4WJ.png",
    "http://i.imgur.com/X3dZmnJ.png",
    "http://i.imgur.com/QpnpxDA.png",
    "http://i.imgur.com/wYRpVKH.png",
    "http://i.imgur.com/QhqCi3Q.png",
    "http://i.imgur.com/kKomXDd.png",
    "http://i.imgur.com/eJJbOTx.png",
    "http://i.imgur.com/MKLaCvJ.png",
    "http://i.imgur.com/UC3bXpC.png",
    "http://i.imgur.com/Le9T40z.png",
    "http://i.imgur.com/ypWbF9K.png",
    "http://i.imgur.com/47F0oEV.png",
    "http://i.imgur.com/7Y1Vohu.png",
    "http://i.imgur.com/CLhXSY9.png",
    "http://i.imgur.com/tpE7bwH.png",
    "http://i.imgur.com/fJCCvff.png",
    "http://i.imgur.com/AHCiVvj.png",
    "http://i.imgur.com/Le4T3Qk.png",
    "http://i.imgur.com/l7ShF6A.png",
    "http://i.imgur.com/wkcJiu9.png",
    "http://i.imgur.com/YeeWlov.png",
    "http://i.imgur.com/owNlFap.png",
    "http://i.imgur.com/I2AvoRa.png",
    "http://i.imgur.com/MwnUYDV.png",
    "http://i.imgur.com/ty6ZXVn.png",
    "http://i.imgur.com/DcpLXcM.png",
    "http://i.imgur.com/6gi3Joz.png",
    "http://i.imgur.com/1FdFymA.png",
    "http://i.imgur.com/zb8b2YA.png",
    "http://i.imgur.com/3wsioNP.png",
    "http://i.imgur.com/npiDczL.png",
    "http://i.imgur.com/B7iytc2.png",
    "http://i.imgur.com/3KLKdrS.png",
    "http://i.imgur.com/isF7gaO.png",
    "http://i.imgur.com/JIH29iL.png",
    "http://i.imgur.com/CeCdGki.png",
    "http://i.imgur.com/upsiKcd.png",
    "http://i.imgur.com/XbuetkB.png",
    "http://i.imgur.com/ks5Sx85.png",
    "http://i.imgur.com/G4a4yLS.png",
    "http://i.imgur.com/aYk5Zcl.png",
    "http://i.imgur.com/iZv0piE.png",
    "http://i.imgur.com/BGu13lY.png",
    "http://i.imgur.com/aCwFSAW.png",
    "http://i.imgur.com/CE1Y3Ls.png",
    "http://i.imgur.com/13QQjfd.png",
    "http://i.imgur.com/XhNsoQM.png",
    "http://i.imgur.com/YbxLRN8.png",
    "http://i.imgur.com/Fj9F29x.png",
    "http://i.imgur.com/uekSFxN.png",
    "http://i.imgur.com/aTxqXSR.png",
    "http://i.imgur.com/NhHR3qA.png",
    "http://i.imgur.com/hmpwHhJ.png",
    "http://i.imgur.com/Sz4YAKz.png",
    "http://i.imgur.com/kEuvF6k.png",
    "http://i.imgur.com/Qqt304z.png",
    "http://i.imgur.com/nUuyrb8.png",
    "http://i.imgur.com/TFPfXEg.png",
    "http://i.imgur.com/Y0dawg6.png",
    "http://i.imgur.com/IHu7ngj.png",
    "http://i.imgur.com/oAaCv1A.png",
    "http://i.imgur.com/mgWLsRG.png",
    "http://i.imgur.com/dslFV1l.png",
    "http://i.imgur.com/ULkpcCy.png",
    "http://i.imgur.com/5kaLQB4.png",
    "http://i.imgur.com/vpyC7sS.png",
    "http://i.imgur.com/QZmbOoz.png",
    "http://i.imgur.com/HMnK3mo.png",
    "http://i.imgur.com/XmlzHQ9.png",
    "http://i.imgur.com/zS01A2U.png",
    "http://i.imgur.com/WcJU0aG.png",
    "http://i.imgur.com/iJJAPyI.png",
    "http://i.imgur.com/UabOGp9.png",
    "http://i.imgur.com/yspEAI9.gif",
    "http://i.imgur.com/uAhFCnr.png"
];

/**
 * @param channel : JChannel
 * @param user : JUser
 * @param args : [string]
 * @returns {string}
 */
function smug(channel, user, args) {
    return m_smugFaces[Math.floor(Math.random() * m_smugFaces.length)];
}