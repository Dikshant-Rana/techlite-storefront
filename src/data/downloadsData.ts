export interface DownloadFile {
  name: string;
  version: string;
  size: string;
  type: string;
  description: string;
  downloadUrl: string;
}

export interface DownloadFolder {
  name: string;
  files: DownloadFile[];
  subfolders?: DownloadFolder[];
}

export const downloadsData: DownloadFolder[] = [
  {
    name: "Antivirus",
    files: [
      {
        name: "drweb-12.0-ss-win.exe",
        version: "12.0",
        size: "413.7 MB",
        type: "exe",
        description: "Dr.Web Security Space antivirus installer for Windows.",
        downloadUrl: "https://mega.nz/file/dEoAjCJK#nk0T0kRJ_njiYYay0ynHCXIrYyUXt6Dihx27njvFcLo"
      }
    ]
  },
  {
    name: "Designing Software",
    files: [
      {
        name: "Adobe PageMaker 7.0.rar",
        version: "7.0",
        size: "117.2 MB",
        type: "rar",
        description: "Adobe PageMaker desktop publishing software.",
        downloadUrl: "https://mega.nz/file/1YhVzaTL#7meF4N-k2Z6MVNoWZaxBJD3SX50VsmMOUYUkv08xC88"
      },
      {
        name: "Adobe Photoshop 7.0.rar",
        version: "7.0",
        size: "153.6 MB",
        type: "rar",
        description: "Adobe Photoshop 7.0 image editing software.",
        downloadUrl: "https://mega.nz/file/1YhVzaTL#7meF4N-k2Z6MVNoWZaxBJD3SX50VsmMOUYUkv08xC88"
      },
      {
        name: "Adobe Photoshop 2021 v22.2.0.183 (x64) Multilingual (Pre-Activated) [FileCR].rar",
        version: "22.2.0.183",
        size: "2.17 GB",
        type: "rar",
        description: "Adobe Photoshop 2021 (64-bit) multilingual edition.",
        downloadUrl: "https://mega.nz/file/1MwgCRqb#a5lQRakxvMbQ-XTxuuL663H_ukfxHUGH4cFRpVSqpVs"
      },
      {
        name: "Adobe Photoshop CC 2014 (32 bit) (Crack) [ChingLiu].rar",
        version: "CC 2014",
        size: "692.6 MB",
        type: "rar",
        description: "Adobe Photoshop CC 2014 (32-bit).",
        downloadUrl: "https://mega.nz/file/sN5REB5b#CAFfofhCfOkR5MH6T7lrCU2sp1W3yrfppXbvOa7sios"
      },
      {
        name: "ArcGIS Desktop 10.5.rar",
        version: "10.5",
        size: "1002.5 MB",
        type: "rar",
        description: "ArcGIS Desktop 10.5 GIS software.",
        downloadUrl: "https://mega.nz/file/URRnlAAZ#LvR6NCnWKgwh02SX6R_HuLct_e8sDqI2bWHxyK2fvKg"
      },
      {
        name: "artcut2009.rar",
        version: "2009",
        size: "450.2 MB",
        type: "rar",
        description: "ArtCut 2009 vinyl cutting and sign-making software.",
        downloadUrl: "https://mega.nz/file/hBIglLZC#5RbeQawanthY7by8pFspgDWSAFdnG32U7L6XbymuWXw"
      },
      {
        name: "Autodesk AutoCAD 2007.rar",
        version: "2007",
        size: "554.8 MB",
        type: "rar",
        description: "Autodesk AutoCAD 2007 CAD software.",
        downloadUrl: "https://mega.nz/file/hBIglLZC#5RbeQawanthY7by8pFspgDWSAFdnG32U7L6XbymuWXw"
      }
    ]
  },
  {
    name: "Office Software",
    files: [
      {
        name: "608 Nepali Fonts.rar",
        version: "-",
        size: "49.4 MB",
        type: "rar",
        description: "Collection of 608 Nepali fonts.",
        downloadUrl: "https://mega.nz/file/4cBSHYDS#1SF1bieUC6OfGcVKHCvL5Dk8usCyKxXFtvRqZKO3UxI"
      },
      {
        name: "AdbeRdr1010_en_US_LATEST.exe",
        version: "10.1.0",
        size: "37.9 MB",
        type: "exe",
        description: "Adobe Reader installer for Windows.",
        downloadUrl: "https://mega.nz/file/FQ4yQaKa#5AmMrJuCOPKyAy3LG2HsjMRwmWV1Yj-8TcpgXmZl3rA"
      },
      {
        name: "Adobe Acrobat Writer 6.0.05.rar",
        version: "6.0.05",
        size: "159.0 MB",
        type: "rar",
        description: "Adobe Acrobat Writer software.",
        downloadUrl: "https://mega.nz/file/sIwShYgT#jEbR-29s-bggGbZ5wswNpO9dcinEz147GyzzEgL7b8o"
      },
      {
        name: "foxit-reader.rar",
        version: "-",
        size: "160.4 MB",
        type: "rar",
        description: "Foxit Reader PDF software.",
        downloadUrl: "https://mega.nz/file/tQgjQL5a#DiHfHElASI5XSp64ysKq8hNohsmyvIEzzP6s9n8_WWc"
      },
      {
        name: "GoogleInputToolsNepali.rar",
        version: "-",
        size: "5.9 MB",
        type: "rar",
        description: "Google Input Tools for Nepali typing.",
        downloadUrl: "https://mega.nz/file/1J5k0SiS#JQlb63g1pFb6ZxCepajulCtC13XrcbsMQtztGEDd4n8"
      },
      {
        name: "Nitro Pro 14.3.1.193 Enterprise FULL [TheWindowsForum.com].rar",
        version: "14.3.1.193",
        size: "239.8 MB",
        type: "rar",
        description: "Nitro Pro Enterprise PDF editor.",
        downloadUrl: "https://mega.nz/file/Yd5TjRbL#P53MRBK26mAcZjdWNzk4AsNhiHSn46sq42A1iSYBbnU"
      },
      {
        name: "Office 2010 final.rar",
        version: "2010",
        size: "647.1 MB",
        type: "rar",
        description: "Microsoft Office 2010 package.",
        downloadUrl: "https://mega.nz/file/UUI2ARZA#mN14jpp2WYA86uO6Ex8LKUxkVVW3_CDQmR9SyHszl7k"
      },
      {
        name: "Office 2021 preactivated.rar",
        version: "2021",
        size: "3.12 GB",
        type: "rar",
        description: "Microsoft Office 2021 pre-activated package.",
        downloadUrl: "https://mega.nz/file/Zd4AGCwS#iS3ooZTRCR-9HZhMuBroR0Q5j5cDrSVaGkKPqIbRoPk"
      },
      {
        name: "Office_Professional_Plus_2016_64Bit.rar",
        version: "2016",
        size: "830.4 MB",
        type: "rar",
        description: "Microsoft Office Professional Plus 2016 (64-bit).",
        downloadUrl: "https://mega.nz/file/wEYBFAKS#-I59UeWSw6q9QG_jMsnVoMYUaLhTqz7eK6s-zMUld3Y"
      },
      {
        name: "TeamViewerQS_x64.rar",
        version: "x64",
        size: "31.4 MB",
        type: "rar",
        description: "TeamViewer QuickSupport for Windows.",
        downloadUrl: "https://mega.nz/file/VcB3ADyC#KESdpwA1wqwHtv63SaEiIAhOc7lO1w3I8Xgg_Wx0NNk"
      },
      {
        name: "Unicode nepali_Traditional.zip",
        version: "-",
        size: "675 KB",
        type: "zip",
        description: "Traditional Nepali Unicode fonts.",
        downloadUrl: "https://mega.nz/file/gNBDnDCL#wFAdHg7-6tEWYlKHVLSHBZDimzGqQ1rhC3usxd0WCXo"
      },
      {
        name: "unicode.rar",
        version: "-",
        size: "616 KB",
        type: "rar",
        description: "Nepali Unicode typing tools.",
        downloadUrl: "https://mega.nz/file/ldQ03B7Q#rKKNIRFCQpX4KKrhmuKPXfSkpitFLf3cHujKoweGnCU"
      }
    ]
  },
  {
    name: "Printer Tools",
    files: [
      {
        name: "Epson-L3110-Resetter.zip",
        version: "-",
        size: "1.5 MB",
        type: "zip",
        description: "Reset utility for Epson L3110 printer.",
        downloadUrl: "https://mega.nz/file/MIRBzT7J#W0hcEZRM7eFtW47072r5sGItFjHvGZEjy50p_PzZbDs"
      }
    ], // Empty if you want everything categorized into subfolders instead
    subfolders: [
      {
        name: "Brother Printer Drivers",
        files: [
          {
            name: "Brother 2710 Printer Driver.zip",
            version: "-",
            size: "406.5 MB",
            type: "zip",
            description: "Brother 2710 printer driver package.",
            downloadUrl: "https://mega.nz/file/cRgz0a7Y#9Re5DhffcvwJsjYQpS4REzhXtYDAPKWRciqiPo76aco"
          },
          {
            name: "Brother DCP-510DW.zip",
            version: "-",
            size: "400.8 MB",
            type: "zip",
            description: "Brother DCP-510DW printer driver.",
            downloadUrl: "https://mega.nz/file/QNxAhRAb#X4j9oBl28Kldc14aIzVdl8gwXEwdAmiW6hSUA-r19oE"
          },
          {
            name: "Brother DCP-520DW.zip",
            version: "-",
            size: "227.1 MB",
            type: "zip",
            description: "Brother DCP-520DW printer driver.",
            downloadUrl: "https://mega.nz/file/YQ5mjR6S#MlPbPfcvanSFVM6ATRh1GfhhjPfEpqdMdmO1gZa_fPA"
          },
          {
            name: "Brother DCP-1610W.rar",
            version: "-",
            size: "163.9 MB",
            type: "rar",
            description: "Brother DCP-1610W printer driver.",
            downloadUrl: "https://mega.nz/file/0MhhXKDC#txlTzTKVvx9VlbmWimyBPrXqZlrW1DFhDRI_dtt81hI"
          },
          {
            name: "Brother DCP-7055.rar",
            version: "-",
            size: "90.4 MB",
            type: "rar",
            description: "Brother DCP-7055 printer driver.",
            downloadUrl: "https://mega.nz/file/MI5ywZgS#XpxAN0_bmL3uEe6ToK2AqVZjoDbJPwEEmao0MJENCTQ"
          },
          {
            name: "Brother DCP-L2535D.rar",
            version: "-",
            size: "394.8 MB",
            type: "rar",
            description: "Brother DCP-L2535D printer driver.",
            downloadUrl: "https://mega.nz/file/9NAxHRJS#GRhzH7vS2Lcs6po02K8qh9PQX-Y5IspaBoaaIQKyOaQ"
          },
          {
            name: "Brother DCP-T420W.zip",
            version: "-",
            size: "227.9 MB",
            type: "zip",
            description: "Brother DCP-T420W printer driver.",
            downloadUrl: "https://mega.nz/file/oU40GQIS#Y7Dcm-it7JlAUUJAb0cTtKaouV8tZeqLuW5MpGLZmCg"
          },
          {
            name: "Brother DCP-T720DW.zip",
            version: "-",
            size: "235.6 MB",
            type: "zip",
            description: "Brother DCP-T720DW printer driver.",
            downloadUrl: "https://mega.nz/file/1ZJgkYAR#BMd5wp9xEdr7HLSbJfdqRPLkrcchm2BNF5_l6zOtSy0"
          },
          {
            name: "Brother HL-1110.rar",
            version: "-",
            size: "34.8 MB",
            type: "rar",
            description: "Brother HL-1110 printer driver.",
            downloadUrl: "https://mega.nz/file/tMwWxJDJ#AceCSiJaHnNTor6aMmcL3g9cVpTJAxnVwk8GQQqFqBY"
          },
          {
            name: "Brother HL-L2320D.rar",
            version: "-",
            size: "41.0 MB",
            type: "rar",
            description: "Brother HL-L2320D printer driver.",
            downloadUrl: "https://mega.nz/file/tNAliYRL#q6Id6qL5pGSLxfnsjKl26oqsx7WPj_zxYuTrotCliiE"
          },
          {
            name: "Brother HL-L2370DW(XL).rar",
            version: "-",
            size: "204.4 MB",
            type: "rar",
            description: "Brother HL-L2370DW(XL) printer driver.",
            downloadUrl: "https://mega.nz/file/RYBigbRa#pP8ohpOM4j0YOv15eDrCrR01rGwL-oFNCfC4u_n5554"
          },
          {
            name: "Brother MFC-7360.rar",
            version: "-",
            size: "90.4 MB",
            type: "rar",
            description: "Brother MFC-7360 printer driver.",
            downloadUrl: "https://mega.nz/file/cVATQAKZ#6jYvlbRFj4FmK_9BeJCdHw4kr_g2r0Qz-xmM155SIuw"
          },
          {
            name: "Brother T220 Printer.rar",
            version: "-",
            size: "216.9 MB",
            type: "rar",
            description: "Brother T220 printer driver package.",
            downloadUrl: "https://mega.nz/file/8NYRwSiJ#3lwKZSBxFr6pJSM1WedEdMSh344J9PWN0DSRCeDy9vw"
          },
          {
            name: "Brother T310 Driver.zip",
            version: "-",
            size: "393.6 MB",
            type: "zip",
            description: "Brother T310 printer driver.",
            downloadUrl: "https://mega.nz/file/RVo33BgC#rMP0N_WvrZJdK4Wo6E6JcPNbCVvfl5Wmj0M8MB8kDlY"
          },
          {
            name: "DCP-1510-Printer Drive.zip",
            version: "-",
            size: "134.5 MB",
            type: "zip",
            description: "Brother DCP-1510 printer driver.",
            downloadUrl: "https://mega.nz/file/RYBjhKZb#8TxtZUjhVEvjhhFAJdBS2xmdR17bNGBBr2ZANOXt1Pg"
          },
          {
            name: "DCP-L2540DW-Printer Driver.zip",
            version: "-",
            size: "181.5 MB",
            type: "zip",
            description: "Brother DCP-L2540DW printer driver.",
            downloadUrl: "https://mega.nz/file/wZZBVK4Q#RZrFeHLC8WQ0BiO698UDdKarZymaG7SOZLOzsrOs70s"
          },
          {
            name: "HL-L2360DW.rar",
            version: "-",
            size: "41.1 MB",
            type: "rar",
            description: "Brother HL-L2360DW printer driver.",
            downloadUrl: "https://mega.nz/file/9RQl2IaL#YdTU7CxO5Ef2C9-_bAEmWXq0-mlafXVQnrH9CYMn2tY"
          }
        ]
      },
      {
        name: "Canon Printer Drivers",
        files: [
          {
            name: "Canon G2010 Driver.rar",
            version: "-",
            size: "19.8 MB",
            type: "rar",
            description: "Canon G2010 printer driver package.",
            downloadUrl: "https://mega.nz/file/INwAkAKI#a47O8NJEEdcFf2Spwa8PhYxMqiwHUbZ4Xd6K6zwBa3Y"
          },
          {
            name: "Canon G3010 Driver.rar",
            version: "-",
            size: "19.8 MB",
            type: "rar",
            description: "Canon G3010 printer driver package.",
            downloadUrl: "https://mega.nz/file/xB5iDKxI#ELTu-gwQGfFNRgkd2wfBb2-FwKiv-br3xKAX1mkJa3M"
          },
          {
            name: "Canon G3060 Driver.rar",
            version: "-",
            size: "19.6 MB",
            type: "rar",
            description: "Canon G3060 printer driver package.",
            downloadUrl: "https://mega.nz/file/MFAm2JAS#kYQBwxnEssfLGfxOzV5v0Sb9fq4ZUr8fuDZPi2XI22c"
          },
          {
            name: "Canon LBP 122 Driver.zip",
            version: "-",
            size: "36.3 MB",
            type: "zip",
            description: "Canon LBP 122 printer driver.",
            downloadUrl: "https://mega.nz/file/wMQxhL5C#lV9Lkg4qfCghdLZHmdxtjaqFxdwIOM7I-0jyvEkNX44"
          },
          {
            name: "Canon LBP 6030 Driver.rar",
            version: "-",
            size: "27.7 MB",
            type: "rar",
            description: "Canon LBP 6030 printer driver.",
            downloadUrl: "https://mega.nz/file/lNJA3ZYI#FmxlEgmKWAdGlyXZmsnNgsvr7d7a44o15byiL4DRh_M"
          },
          {
            name: "Canon LBP2900.rar",
            version: "-",
            size: "10.4 MB",
            type: "rar",
            description: "Canon LBP2900 printer driver.",
            downloadUrl: "https://mega.nz/file/1RxhDRgJ#zxkkcXRZa5gpZfmhtkr6StlU0mmevB3ItREltkOtsng"
          },
          {
            name: "Canon LBP6230 Driver.rar",
            version: "-",
            size: "32.8 MB",
            type: "rar",
            description: "Canon LBP6230 printer driver.",
            downloadUrl: "https://mega.nz/file/0MJQXQDC#bqttk1F1xv8KDls3wnWam2Xxq2Qmjg26xQY5xgHCoXM"
          },
          {
            name: "Canon MF 264D Driver.zip",
            version: "-",
            size: "64.8 MB",
            type: "zip",
            description: "Canon MF264D printer driver.",
            downloadUrl: "https://mega.nz/file/dBQyBLiT#-4tVTNfX5pz5nN1ssz3cZgsyFyt0mxDt1S4QN3GLMCE"
          },
          {
            name: "Canon MF241D.zip",
            version: "-",
            size: "229.1 MB",
            type: "zip",
            description: "Canon MF241D printer driver.",
            downloadUrl: "https://mega.nz/file/wVIwXC7K#lWLTOty2cC2EskDm2PUsIJLklY5COCuG7PLjbatzhc4"
          },
          {
            name: "Canon MF3010 Driver.zip",
            version: "-",
            size: "66.3 MB",
            type: "zip",
            description: "Canon MF3010 printer driver.",
            downloadUrl: "https://mega.nz/file/dJRwSBwK#DV9jLycAIRmWVQX7NzYifitxq4QAgjnAczFAMELU_Xs"
          }
        ]
      },
      {
        name: "Epson Printer Drivers",
        files: [
          {
            name: "Epson L805 Driver.rar",
            version: "-",
            size: "34.7 MB",
            type: "rar",
            description: "Epson L805 printer driver package.",
            downloadUrl: "https://mega.nz/file/dJRwSBwK#DV9jLycAIRmWVQX7NzYifitxq4QAgjnAczFAMELU_Xs"
          },
          {
            name: "Epson L3110 Driver.zip",
            version: "-",
            size: "107.4 MB",
            type: "zip",
            description: "Epson L3110 printer driver package.",
            downloadUrl: "https://mega.nz/file/pEQGwYhY#rHi8Rgmn9309tdjugI8YZ2hCHwQSNV4cY4MYP_UIo-4"
          },
          {
            name: "Epson LQ-310.zip",
            version: "-",
            size: "27.0 MB",
            type: "zip",
            description: "Epson LQ-310 dot matrix printer driver.",
            downloadUrl: "https://mega.nz/file/QUQFSCxD#OWcHlmtqVkPVQ8Kf4AclOSmYJVgeXsDakjIW01Q82S8"
          },
          {
            name: "Epson LQ-350.zip",
            version: "-",
            size: "5.0 MB",
            type: "zip",
            description: "Epson LQ-350 dot matrix printer driver.",
            downloadUrl: "https://mega.nz/file/oAQTyaJR#ClImi1UxHq1rh9zcUf20fiemdBGf94TfwPmxZ5_zFn0"
          },
          {
            name: "Epson-L3110-Resetter.zip",
            version: "-",
            size: "1.3 MB",
            type: "zip",
            description: "Reset utility for Epson L3110 printer.",
            downloadUrl: "https://mega.nz/file/QM5wXLLa#Yvx74SjUCf-v7234UK9VdAhHrxqzteo5gFeKGTn6pSA"
          }
        ]
      },
      {
        name: "Pantum Printer Drivers",
        files: [
          {
            name: "Pantum_M6200-M6500-M6550-M6600_Series_Windows_Driver_V1.13.46.zip",
            version: "V1.13.46",
            size: "252.1 MB",
            type: "zip",
            description: "Windows driver for Pantum M6200, M6500, M6550, and M6600 series printers.",
            downloadUrl: "https://mega.nz/file/BJZmBSSR#aFuaSK6SGbZu8f8jRy8uMeQ6b4rXzALbIKec6w_fpY0"
          },
          {
            name: "Pantum-M7100DN-M7100DW-Windows-Driver-V1.6.15.zip",
            version: "V1.6.15",
            size: "60.1 MB",
            type: "zip",
            description: "Windows driver for Pantum M7100DN and M7100DW printers.",
            downloadUrl: "https://mega.nz/file/4ZxxwZgJ#zf57-cvfUGL9MHNPX-7q6wZYxxUKFKptSiK8G4Fd07g"
          },
          {
            name: "Pantum-P2500-P2500W-P2506-P2506W-Windows-Driver-V2.1.4.zip",
            version: "V2.1.4",
            size: "39.7 MB",
            type: "zip",
            description: "Windows driver for Pantum P2500, P2500W, P2506, and P2506W printers.",
            downloadUrl: "https://mega.nz/file/BYIkjIjK#Qvhirvdn_oeU3K5WXMAToSVcFDPOOwRG5qtYN_-zgZ4"
          }
        ]
      }

    ]

  },
  {
    name: "Remote Access",
    files: [
      {
        name: "3DP_Chip_v2306.rar",
        version: "2306",
        size: "4.7 MB",
        type: "rar",
        description: "3DP Chip utility for detecting and updating hardware drivers.",
        downloadUrl: "https://mega.nz/file/1URkFD5S#liOFTvh9QZdBY_nc6r1N90rW5_Mn0UiBWRLYwD-WsVQ"
      },
      {
        name: "AnyDesk 6.3.exe",
        version: "6.3",
        size: "3.6 MB",
        type: "exe",
        description: "AnyDesk remote desktop software.",
        downloadUrl: "https://mega.nz/file/VQZBWDwR#C3GNaNvlMP8wzs8F4F0EZNob6BtDGfOKUoMsQsEwRC8"
      },
      {
        name: "AnyDesk7.exe",
        version: "7",
        size: "3.9 MB",
        type: "exe",
        description: "AnyDesk remote desktop software.",
        downloadUrl: "https://mega.nz/file/INQBHRoB#Bu9vxO_LQV7mXNz4QIajdLfZ72mCTGNwhBw0LJBCvoY"
      },
      {
        name: "CleanShortcutVirus.rar",
        version: "-",
        size: "449 B",
        type: "rar",
        description: "Utility to remove shortcut virus infections from USB drives.",
        downloadUrl: "https://mega.nz/file/kQJ13Brb#yZ91C8kjZPp4lVAkj0dr9MpOxafQRvQ0cvxEd25K9oE"
      },
      {
        name: "EaseUS Data Recovery Wizard Professional 7.0+Key.rar",
        version: "7.0",
        size: "4.9 MB",
        type: "rar",
        description: "EaseUS Data Recovery Wizard Professional with license key.",
        downloadUrl: "https://mega.nz/file/UYYU3QZL#RekJi-w73hKUvUz0zafwzaOB3-_sEl4FNJMrhJgpiv4"
      },
      {
        name: "TeamViewer_Setup_x64.exe",
        version: "x64",
        size: "56.4 MB",
        type: "exe",
        description: "TeamViewer remote access software for 64-bit Windows.",
        downloadUrl: "https://mega.nz/file/UYYU3QZL#RekJi-w73hKUvUz0zafwzaOB3-_sEl4FNJMrhJgpiv4"
      },
      {
        name: "UltraViewer_setup_6.6_en.exe",
        version: "6.6",
        size: "3.4 MB",
        type: "exe",
        description: "UltraViewer remote desktop software.",
        downloadUrl: "https://mega.nz/file/IIwhXRLT#KxmtxgkjA2XhLYv_JUhD4hMpm8M_Pt0pypcUxGah63Y"
      }
    ]
  },
  {
    name: "TG TOOLS",
    files: [
      {
        name: "winrar-x64-602.exe",
        version: "6.02",
        size: "3.2 MB",
        type: "exe",
        description: "WinRAR 64-bit file archiver.",
        downloadUrl: "https://mega.nz/file/UcgnGJZZ#nj9uDA5lubdYs25a72Tv0NCV3iZVGyeu-aJcccSk0cs"
      },
      {
        name: "winrar-x32-610b3.exe",
        version: "6.10 Beta 3",
        size: "3.1 MB",
        type: "exe",
        description: "WinRAR 32-bit beta release.",
        downloadUrl: "https://mega.nz/file/YAgT2B4S#1_i-EVqmBxcSd73queBtXEpZawiMYOBdwl9LKSXkhkM"
      },
      {
        name: "windows activation file TG.rar",
        version: "-",
        size: "1.6 MB",
        type: "rar",
        description: "Windows activation utility package.",
        downloadUrl: "https://mega.nz/file/NZxBRRyT#ZSAJic2et3DqsxDbnfBSzaczPBb2hGfcyMXOGqJDBr0"
      },
      {
        name: "Wifinetwatcher.exe",
        version: "-",
        size: "448 KB",
        type: "exe",
        description: "Wireless network monitoring utility.",
        downloadUrl: "https://mega.nz/file/xV4AVbSJ#W41-1IgyE281c0ULGOdWOHbwgC6GFDqB1dhFtGe6o1M"
      },
      {
        name: "revosetup.rar",
        version: "-",
        size: "1016 KB",
        type: "rar",
        description: "Revo Uninstaller setup package.",
        downloadUrl: "https://mega.nz/file/lERyRbYa#TA6G7aoaIw4YMBpdXcf4Ui26rb3giU6PAv11vS1imP4"
      },
      {
        name: "RemoveWAT.2.2.5.Hazar.carter67 win7.rar",
        version: "2.2.5",
        size: "3.8 MB",
        type: "rar",
        description: "RemoveWAT activation utility for Windows 7.",
        downloadUrl: "https://mega.nz/file/lIZFiAJQ#F3XXWDsFwL6fA4DKyWnKtHJybWEe6cl8KcdFiSiSSOU"
      },
      {
        name: "PotPlayerSetup64.exe",
        version: "64-bit",
        size: "33.8 MB",
        type: "exe",
        description: "PotPlayer multimedia player installer.",
        downloadUrl: "https://mega.nz/file/AUJkFK4Q#dmacOkwQzpisxBtTB8v59-jV48lBocjk_tssfcV1nDA"
      },
      {
        name: "Media_Player.rar",
        version: "-",
        size: "276.1 MB",
        type: "rar",
        description: "Media player software package.",
        downloadUrl: "https://mega.nz/file/INAjjbhB#u5Fg3eMGy6xGCftupahw66IYdj3fH3jkgSsZ-kUZLg4"
      },
      {
        name: "KMSAuto Net 2016 1.5.3 Portable [CracksNow].zip",
        version: "1.5.3",
        size: "6.7 MB",
        type: "zip",
        description: "Portable KMSAuto Net activation utility.",
        downloadUrl: "https://mega.nz/file/pVxQwKDS#Y5P18alK0H0EVseQtOHltfSwvwKrhF3TByEknLH_Gi8"
      },
      {
        name: "IDM 6.39 build 5 incl Patch [32bit + 64bit][CrackingPatching].rar",
        version: "6.39 Build 5",
        size: "14.8 MB",
        type: "rar",
        description: "Internet Download Manager with patch.",
        downloadUrl: "https://mega.nz/file/VJJVFZRA#onexQJ03Bmb2BqOKD28F0TyLxtumbbhLvQnHZmhh6Y4"
      },
      {
        name: "FormatFactory2019_04_24.rar",
        version: "2019",
        size: "68.3 MB",
        type: "rar",
        description: "Format Factory media conversion software.",
        downloadUrl: "https://mega.nz/file/gZ5l3bbC#Nfuondmn64382vH4voXm2UkPkSeFERlg8GRnDgo5V38"
      },
      {
        name: "cleanup-4.5.2.exe",
        version: "4.5.2",
        size: "331 KB",
        type: "exe",
        description: "System cleanup utility.",
        downloadUrl: "https://mega.nz/file/gI5GAITQ#PwxdQKUOiKxLoQnnNVn0YqU8uD87-_-FT-lpIi3XvAc"
      },
      {
        name: "anyconnect-win-4.10.03104-core-vpn-webdeploy-k9.msi",
        version: "4.10.03104",
        size: "15.7 MB",
        type: "msi",
        description: "Cisco AnyConnect Secure Mobility Client.",
        downloadUrl: "https://mega.nz/file/hVBUAJAJ#rYekq1-FcyeA5z_k7PqrE3ewteCjJwZbs1XT89WCg2o"
      },
      {
        name: "3DP_Net_v2101.exe",
        version: "2101",
        size: "119.9 MB",
        type: "exe",
        description: "3DP Net offline network driver installer.",
        downloadUrl: "https://mega.nz/file/9RxQkKLS#1ePHa39q5xYPglahXr_rlw-ErSd8vgRoQCsAJPOmSSA"
      }
    ]
  },
  {
    name: "Web Browsers",
    files: [
      {
        name: "ChromeStandaloneSetup64.exe",
        version: "64-bit",
        size: "102.8 MB",
        type: "exe",
        description: "Google Chrome standalone installer for 64-bit Windows.",
        downloadUrl: "https://mega.nz/file/gNAyDBIB#7Vgh9EYqdwUGgxgyU_Sr4fZI0Ay2N1De63McHigjetM"
      },
      {
        name: "Firefox_Setup_47.0.1.exe",
        version: "47.0.1",
        size: "45.0 MB",
        type: "exe",
        description: "Mozilla Firefox web browser installer.",
        downloadUrl: "https://mega.nz/file/AIRinBYR#Tvo6Mhrvxte11sjBrds_zcOmwcXvCSt3zmOvx0mOi3s"
      }
    ]
  }
];
