xui.Class('App', 'xui.Module',{
    Instance:{
        $word1:"n",
        $charge1:"n",
        $capps:0,
        $numms:0,
        $symbs:0,
        $changed:"hi",
        $tota:[],
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setQueryURL("https://api.datamuse.com/words?ml=ringing+in+the+ears")
                .setRequestDataSource([
                    "https://api.datamuse.com/words?ml=ringing+in+the+ears"
                ])
                .setResponseDataTarget([
                    "https://api.datamuse.com/words?ml=ringing+in+the+ears"
                ])
                .setResponseCallback([
                    "https://api.datamuse.com/words?ml=ringing+in+the+ears"
                ])
                .setQueryData({
                })
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label4")
                .setLeft("7.666666666666667em")
                .setTop("1.8333333333333333em")
                .setWidth("52.583333333333336em")
                .setHeight("3.8333333333333335em")
                .setCaption("Tell us about your password requirements:")
                .setHAlign("center")
                .setFontSize("22px")
                .setFontFamily("monospace")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput9")
                .setLeft("17.15em")
                .setTop("3.6em")
                .setWidth("21.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("Number Input:")
                .setType("number")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "20px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput34")
                .setLeft("17.1em")
                .setTop("5.6em")
                .setWidth("21.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("Number Input:")
                .setType("number")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "20px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"capTrack")
                .setLeft("2.5em")
                .setTop("40.833333333333336em")
                .setWidth("6.75em")
                .setHeight("3.8333333333333335em")
                .setCaption("0")
            );
            
            append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs8")
                .setItems([
                    {
                        "id" : "Home",
                        "caption" : "Home"
                    },
                    {
                        "id" : "Specifications",
                        "caption" : "Specifications"
                    },
                    {
                        "id" : "Generator",
                        "caption" : "Generator"
                    },
                    {
                        "id" : "Temp",
                        "caption" : "Temp"
                    },
                    {
                        "id" : "Rhyme",
                        "caption" : "Temp"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("Home")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#31081F"
                    }
                })
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper42")
                .setLeft("1.8333333333333333em")
                .setTop("0.6666666666666666em")
                .setWidth("22em")
                .setHeight("17.5em"),
                "Temp"
            );
            
            host.xui_ui_svgpaper42.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"movies_treegrid")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id" : "col1",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col1"
                    },
                    {
                        "id" : "col2",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col2"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : "A1"
                            },
                            {
                                "value" : "B1"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A2"
                            },
                            {
                                "value" : "B2"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A3"
                            },
                            {
                                "value" : "B3"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A4"
                            },
                            {
                                "value" : "B4"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A5"
                            },
                            {
                                "value" : "B5"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A6"
                            },
                            {
                                "value" : "B6"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A7"
                            },
                            {
                                "value" : "B7"
                            }
                        ]
                    }
                ])
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper138")
                .setLeft("26em")
                .setTop("1.5em")
                .setWidth("22em")
                .setHeight("13.333333333333334em"),
                "Temp"
            );
            
            host.xui_ui_svgpaper138.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"songs_treegrid")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id" : "col1",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col1"
                    },
                    {
                        "id" : "col2",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col2"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : "A1"
                            },
                            {
                                "value" : "B1"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A2"
                            },
                            {
                                "value" : "B2"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A3"
                            },
                            {
                                "value" : "B3"
                            }
                        ]
                    },
                    {
                        "iniFold" : false,
                        "cells" : [
                            {
                                "value" : "A5"
                            },
                            {
                                "value" : "B5"
                            }
                        ]
                    }
                ])
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper148")
                .setLeft("27.666666666666668em")
                .setTop("14.833333333333334em")
                .setWidth("22em")
                .setHeight("10.833333333333334em"),
                "Temp"
            );
            
            host.xui_ui_svgpaper148.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"books_treegrid")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id" : "col1",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col1"
                    },
                    {
                        "id" : "col2",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col2"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : "A1"
                            },
                            {
                                "value" : "B1"
                            },
                            {
                                "value" : "C1"
                            },
                            {
                                "value" : "D1"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A2"
                            },
                            {
                                "value" : "B2"
                            },
                            {
                                "value" : "C2"
                            },
                            {
                                "value" : "D2"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            }
                        ]
                    },
                    {
                        "iniFold" : false,
                        "cells" : [
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            }
                        ]
                    }
                ])
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div20")
                .setLeft("2.6666666666666665em")
                .setTop("21.5em")
                .setWidth("21.666666666666668em")
                .setHeight("17.5em"),
                "Temp"
            );
            
            host.xui_ui_div20.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"quotes_treegrid")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id" : "col1",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col1"
                    },
                    {
                        "id" : "col2",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col2"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : "A1"
                            },
                            {
                                "value" : "B1"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A2"
                            },
                            {
                                "value" : "B2"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A3"
                            },
                            {
                                "value" : "B3"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A4"
                            },
                            {
                                "value" : "B4"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A5"
                            },
                            {
                                "value" : "B5"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A6"
                            },
                            {
                                "value" : "B6"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A7"
                            },
                            {
                                "value" : "B7"
                            }
                        ]
                    }
                ])
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper10")
                .setLeft("32.666666666666664em")
                .setTop("31.5em")
                .setWidth("27.833333333333332em")
                .setHeight("13.333333333333334em"),
                "Temp"
            );
            
            host.xui_ui_svgpaper10.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid21")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id" : "col1",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col1"
                    },
                    {
                        "id" : "col2",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col2"
                    },
                    {
                        "id" : "col3",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col3"
                    },
                    {
                        "id" : "col4",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col4"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : "A1"
                            },
                            {
                                "value" : "B1"
                            },
                            {
                                "value" : "C1"
                            },
                            {
                                "value" : "D1"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A2"
                            },
                            {
                                "value" : "B2"
                            },
                            {
                                "value" : "C2"
                            },
                            {
                                "value" : "D2"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            }
                        ],
                        "sub" : [
                            {
                                "cells" : [
                                    "A4",
                                    "B4",
                                    "C4",
                                    "D4"
                                ]
                            }
                        ]
                    },
                    {
                        "iniFold" : false,
                        "cells" : [
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            }
                        ],
                        "sub" : [
                            {
                                "cells" : [
                                    {
                                        "value" : ""
                                    },
                                    {
                                        "value" : ""
                                    },
                                    {
                                        "value" : ""
                                    },
                                    {
                                        "value" : ""
                                    }
                                ]
                            }
                        ]
                    }
                ])
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Input")
                .setHost(host,"inputter")
                .setLeft("24.333333333333332em")
                .setTop("14.833333333333334em")
                .setWidth("27em")
                .setHeight("5em")
                .setLabelSize("8em"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"finaly")
                .setLeft("4.166666666666667em")
                .setTop("32.5em")
                .setWidth("12.583333333333334em")
                .setHeight("6em")
                .setVisibility("hidden")
                .setCaption("Label"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"finaly2")
                .setLeft("45.166666666666664em")
                .setTop("37.333333333333336em")
                .setWidth("17.583333333333332em")
                .setHeight("3.5em")
                .setVisibility("hidden")
                .setCaption("Label"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Button")
                .setHost(host,"clicker")
                .setLeft("20.166666666666668em")
                .setTop("9em")
                .setWidth("29.75em")
                .setHeight("13.5em")
                .setCaption("Click here for your password!")
                .setFontColor("#31081F")
                .onClick("_homonymer")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#31081F",
                        "background-color" : "#31081F"
                    }
                }),
                "Generator"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image8")
                .setLeft("1em")
                .setTop("1.5em")
                .setWidth("64.16666666666667em")
                .setHeight("5.083333333333333em")
                .setSrc("{/}Publication2.jpg"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block104")
                .setLeft("0.16666666666666666em")
                .setTop("26.5em")
                .setWidth("64.83333333333333em")
                .setHeight("19.166666666666668em")
                .setZIndex(0)
                .setBackground("#31081F"),
                "Home"
            );
            
            host.xui_ui_block104.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox_quotes")
                .setLeft("2.0416666666666665em")
                .setTop("3.6666666666666665em")
                .setWidth("5.75em")
                .setHeight("3.1666666666666665em")
                .setCaption("Quotes")
                .onChange("_mat1")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FFFFFF",
                        "font-size" : "24px"
                    }
                })
            );
            
            host.xui_ui_block104.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox_lyrics")
                .setLeft("9.125em")
                .setTop("3.6666666666666665em")
                .setWidth("4.75em")
                .setHeight("1.65em")
                .setCaption("Lyrics")
                .onChange("_mat2")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FFFFFF",
                        "font-size" : "24px"
                    }
                })
            );
            
            host.xui_ui_block104.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox_books")
                .setLeft("14.958333333333334em")
                .setTop("3.6666666666666665em")
                .setWidth("7.25em")
                .setHeight("1.65em")
                .setCaption("Book Titles")
                .onChange("_mat3")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FFFFFF",
                        "font-size" : "24px"
                    }
                })
            );
            
            host.xui_ui_block104.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox_movies")
                .setLeft("22.875em")
                .setTop("3.6666666666666665em")
                .setWidth("7.75em")
                .setHeight("1.65em")
                .setCaption("Movie Titles")
                .onChange("_mat4")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FFFFFF",
                        "font-size" : "24px"
                    }
                })
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image47")
                .setLeft("4.333333333333333em")
                .setTop("9em")
                .setWidth("57.5em")
                .setHeight("5.083333333333333em")
                .setSrc("{/}Publication3.jpg"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block150")
                .setLeft("0.16666666666666666em")
                .setTop("-0.16666666666666666em")
                .setWidth("65.83333333333333em")
                .setHeight("45.833333333333336em")
                .setZIndex(0)
                .setBackground("#31081F"),
                "Specifications"
            );
            
            host.xui_ui_block150.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"capInput")
                .setLeft("32.416666666666664em")
                .setTop("12.416666666666666em")
                .setWidth("18.833333333333332em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setType("spin")
                .setPrecision(0)
                .setMin(0)
                .setMax(6)
                .setValue(1)
            );
            
            host.xui_ui_block150.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"numInput")
                .setLeft("32.416666666666664em")
                .setTop("20.75em")
                .setWidth("18.833333333333332em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setType("spin")
                .setPrecision(0)
                .setMin(0)
                .setMax(6)
                .setValue(1)
            );
            
            host.xui_ui_block150.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"symbInput")
                .setLeft("32.416666666666664em")
                .setTop("29.083333333333332em")
                .setWidth("18.833333333333332em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setType("spin")
                .setPrecision(0)
                .setMin(0)
                .setMax(6)
                .setValue(1)
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image54")
                .setLeft("1.8333333333333333em")
                .setTop("3.1666666666666665em")
                .setWidth("60.833333333333336em")
                .setHeight("5.583333333333333em")
                .setSrc("{/}Publication5 (2).jpg"),
                "Specifications"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image55")
                .setLeft("6.833333333333333em")
                .setTop("12.333333333333334em")
                .setWidth("21.5em")
                .setHeight("4.166666666666667em")
                .setSrc("{/}Publication6 (2).jpg"),
                "Specifications"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image56")
                .setLeft("7.666666666666667em")
                .setTop("19.833333333333332em")
                .setWidth("19.833333333333332em")
                .setHeight("4.25em")
                .setSrc("{/}Publication6 (3).jpg"),
                "Specifications"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image57")
                .setLeft("7.666666666666667em")
                .setTop("29em")
                .setWidth("20.416666666666668em")
                .setHeight("4.75em")
                .setSrc("{/}Publication6 (4).jpg"),
                "Specifications"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image127")
                .setLeft("9.333333333333334em")
                .setTop("18.166666666666668em")
                .setWidth("14.583333333333334em")
                .setHeight("7.666666666666667em")
                .setSrc("{/}next.jpg"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image135")
                .setLeft("51em")
                .setTop("19.833333333333332em")
                .setWidth("9em")
                .setHeight("10.833333333333334em")
                .setSrc("{/}music note.png"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Button")
                .setHost(host,"switchNext")
                .setLeft("24.333333333333332em")
                .setTop("39.833333333333336em")
                .setWidth("17.916666666666668em")
                .setHeight("3.6666666666666665em")
                .setCaption("Add more specifics")
                .setFontColor("#31081F")
                .setFontSize("22px")
                .onClick("_switch1")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#31081F"
                    }
                }),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Button")
                .setHost(host,"switchNext2")
                .setLeft("26.833333333333332em")
                .setTop("37.333333333333336em")
                .setWidth("17.916666666666668em")
                .setHeight("5.333333333333333em")
                .setCaption("Go to Generator ")
                .setFontColor("#31081F")
                .setFontSize("22px")
                .onClick("_switch2")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#31081F"
                    }
                }),
                "Specifications"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Input")
                .setHost(host,"gen_inpt_passspace")
                .setLeft("2.6666666666666665em")
                .setTop("33.166666666666664em")
                .setWidth("26.666666666666668em")
                .setHeight("3.5em"),
                "Generator"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image94")
                .setLeft("3.5em")
                .setTop("29em")
                .setWidth("25em")
                .setHeight("2.4166666666666665em")
                .setSrc("{/}publication7 (2).jpg"),
                "Generator"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image97")
                .setLeft("35.166666666666664em")
                .setTop("29em")
                .setWidth("28.333333333333332em")
                .setHeight("2.8333333333333335em")
                .setSrc("{/}publication7 (3).jpg"),
                "Generator"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Input")
                .setHost(host,"gen_inpt_passswpace")
                .setLeft("36em")
                .setTop("33.166666666666664em")
                .setWidth("26.666666666666668em")
                .setHeight("3.5em"),
                "Generator"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"pickCat")
                .setLeft("4.333333333333333em")
                .setTop("29em")
                .setCaption("Pick a Category:")
                .setFontColor("#FFFFFF")
                .setFontSize("26px"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link1")
                .setLeft("31.916666666666668em")
                .setTop("28.083333333333332em")
                .setWidth("28.666666666666668em")
                .setHeight("4.333333333333333em")
                .setCaption("https://www.datamuse.com/api/"),
                "Temp"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("51.833333333333336em")
                .setTop("20.666666666666668em")
                .setWidth("10.583333333333334em")
                .setHeight("2.6666666666666665em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "api_1",
                        "args" : [ ],
                        "method" : "invoke",
                        "okFlag" : "_DI_succeed",
                        "koFlag" : "_DI_fail",
                        "event" : 1,
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "Action 2",
                        "type" : "control",
                        "target" : "aplabel",
                        "args" : [
                            "{page.aplabel.setCaption()}",
                            undefined,
                            undefined,
                            "{temp.okData}"
                        ],
                        "method" : "setCaption",
                        "redirection" : "other:callback:call"
                    }
                ]),
                "Temp"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"aplabel")
                .setLeft("54.333333333333336em")
                .setTop("14em")
                .setWidth("5.916666666666667em")
                .setHeight("2.6666666666666665em")
                .setCaption("Label"),
                "Temp"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Button")
                .setHost(host,"rice_button")
                .setLeft("21em")
                .setTop("5.666666666666667em")
                .setWidth("12.25em")
                .setHeight("5.166666666666667em")
                .setCaption("Button")
                .onClick("_ricefunc"),
                "Rhyme"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        _homonymer:function(){
            this._material();
            var initial = this.inputter.getUIValue();
            var final = " ";
            if (initial.includes("altar"))
                final = initial.replace("altar","alter");
            else if (initial.includes("alter"))
                final = initial.replace("alter","altar");
            else if (initial.includes("arc"))
                final = initial.replace("arc","ark");
            else if (initial.includes("ark"))
                final = initial.replace("ark","arc");
            else if (initial.includes("ate"))
                final = initial.replace("ate","eight");
            else if (initial.includes("eight"))
                final = initial.replace("eight","ate");
            else if (initial.includes("aural"))
                final = initial.replace("aural","oral");
            else if (initial.includes("bald"))
                final = initial.replace("bald","bawled");
            else if (initial.includes("bawled"))
                final = initial.replace("bawled","bald");
            else if (initial.includes("ball"))
                final = initial.replace("ball","bawl");
            else if (initial.includes("bawl"))
                final = initial.replace("bawl","ball");
            else if (initial.includes("band"))
                final = initial.replace("band","banned");
            else if (initial.includes("banned"))
                final = initial.replace("banned","band");
            else if (initial.includes("bard"))
                final = initial.replace("bard","barred");
            else if (initial.includes("barred"))
                final = initial.replace("barred","bard");
            else if (initial.includes("bare"))
                final = initial.replace("bare","bear");
            else if (initial.includes("bear"))
                final = initial.replace("bear","bare");
            else if (initial.includes("baron"))
                final = initial.replace("baron","barren");
            else if (initial.includes("barren"))
                final = initial.replace("barrren","baron");
            else if (initial.includes("be"))
                final = initial.replace("be","bee");
    else if (initial.includes("bee"))
                final = initial.replace("bee","be");
    else if (initial.includes("beach"))
                final = initial.replace("beach","bee");
    else if (initial.includes("bee"))
                final = initial.replace("bee","beach");
     if (initial.includes("beer"))
                final = initial.replace("beer","bier");
    else if (initial.includes("bier"))
                final = initial.replace("bier","beer");
    else if (initial.includes("berry"))
                final = initial.replace("berry","bury");
    else if (initial.includes("bury"))
                    final = initial.replace("bury","berry");
    else if (initial.includes("billed"))
                final = initial.replace("billed","build");
    else if (initial.includes("build"))
                final = initial.replace("build","billed");
    else if (initial.includes("blue"))
                final = initial.replace("blue","blew");
    else if (initial.includes("blew"))
                final = initial.replace("blew","blue");
    else if (initial.includes("board"))
                final = initial.replace("board","bored");
    else if (initial.includes("bored"))
                final = initial.replace("bored","board");
    else if (initial.includes("braid"))
                final = initial.replace("braid","brayed");
    else if (initial.includes("brayed"))
                final = initial.replace("brayed","braid");
    else if (initial.includes("break"))
                final = initial.replace("break","brake");
    else if (initial.includes("brake"))
                final = initial.replace("brake","break");
else if (initial.includes("brews"))
                final = initial.replace("brews","bruise");
else if (initial.includes("bruise"))
                final = initial.replace("bruise","brews");
else if (initial.includes("bridal"))
                final = initial.replace("bridal","bridle");
else if (initial.includes("bridle"))
                final = initial.replace("bridle","bridal");
else if (initial.includes("broach"))
                final = initial.replace("broach","brooch");
else if (initial.includes("buy"))
                final = initial.replace("buy","bye");
else if (initial.includes("bye"))
                final = initial.replace("bye","buy");
else if (initial.includes("capital"))
                final = initial.replace("capital","capitol");
else if (initial.includes("capitol"))
                final = initial.replace("capitol","capital");
else if (initial.includes("cellar"))
                final = initial.replace("cellar","seller");
else if (initial.includes("sellar"))
                final = initial.replace("seller","cellar");
else if (initial.includes("cereal"))
                final = initial.replace("cereal","serial");
else if (initial.includes("serial"))
                final = initial.replace("serial","cereal");
else if (initial.includes("chili"))
                final = initial.replace("chili","chilly");
else if (initial.includes("chilly"))
                final = initial.replace("chilly","chili");
else if (initial.includes("choral"))
                final = initial.replace("choral","coral");
else if (initial.includes("coral"))
                final = initial.replace("coral","choral");
else if (initial.includes("cite"))
                final = initial.replace("cite","sight");
else if (initial.includes("sight"))
                final = initial.replace("sight","cite");
else if (initial.includes("coarse"))
                final = initial.replace("coarse","course");
else if (initial.includes("course"))
                final = initial.replace("course","coarse");
else if (initial.includes("complement"))
                final = initial.replace("complement","compliment");
else if (initial.includes("compliment"))
                final = initial.replace("compliment","complement");
else if (initial.includes("deer"))
                final = initial.replace("deer","dear");
else if (initial.includes("dear"))
                final = initial.replace("dear","deer");
else if (initial.includes("die"))
                final = initial.replace("die","dye");
else if (initial.includes("dye"))
                final = initial.replace("dye","die");
else if (initial.includes("discreet"))
                final = initial.replace("discreet","discrete");
else if (initial.includes("discrete"))
                final = initial.replace("discrete","discreet");
else if (initial.includes("doe"))
                final = initial.replace("doe","dough");
else if (initial.includes("dough"))
                final = initial.replace("dough","doe");
else if (initial.includes("dual"))
                final = initial.replace("dual","duel");
else if (initial.includes("duel"))
                final = initial.replace("duel","dual");
else if (initial.includes("earn"))
                final = initial.replace("earn","urn");
else if (initial.includes("urn"))
                final = initial.replace("urn","earn");
else if (initial.includes("ewe"))
                final = initial.replace("ewe","you");
else if (initial.includes("you"))
                final = initial.replace("you","ewe");
else if (initial.includes("faze"))
                final = initial.replace("faze","phase");
else if (initial.includes("phase"))
                final = initial.replace("phase","faze");
else if (initial.includes("faze"))
                final = initial.replace("faze","phase");
else if (initial.includes("file")) 
    final = initial.replace("file","phial");               
else if (initial.includes("phial"))
                final = initial.replace("phial","file");
else if (initial.includes("find"))
                final = initial.replace("find","fined");
else if (initial.includes("fined"))
                final = initial.replace("fined","find");
else if (initial.includes("fir"))
                final = initial.replace("fir","fur");
else if (initial.includes("fur"))
                final = initial.replace("fur","fir");
else if (initial.includes("flea"))
                final = initial.replace("flea","flee");
else if (initial.includes("flee"))
                final = initial.replace("flee","flea");
else if (initial.includes("flew"))
                final = initial.replace("flew","flu");
else if (initial.includes("flu"))
                final = initial.replace("flu","flew");
else if (initial.includes("flex"))
                final = initial.replace("flex","flecks");
else if (initial.includes("flecks"))
                final = initial.replace("flecks","flex");
else if (initial.includes("flour"))
                final = initial.replace("flour","flower");
else if (initial.includes("flower"))
                final = initial.replace("flower","flour");
else if (initial.includes("for"))
                final = initial.replace("for","four");
else if (initial.includes("four"))
                final = initial.replace("four","for");
else if (initial.includes("foreword"))
                final = initial.replace("foreword","forward");
else if (initial.includes("forward"))
                final = initial.replace("forward","foreward");
else if (initial.includes("foul"))
                final = initial.replace("foul","fowl");
else if (initial.includes("fowl"))
                final = initial.replace("fowl","foul");
else if (initial.includes("gait"))
                final = initial.replace("gait","gate");
else if (initial.includes("gate"))
                final = initial.replace("gate","gait");
else if (initial.includes("genes"))
                final = initial.replace("genes","jeans");
else if (initial.includes("jeans"))
                final = initial.replace("jeans","genes");
else if (initial.includes("gored"))
                final = initial.replace("gored","gourd");
else if (initial.includes("gourd"))
                final = initial.replace("gourd","gored");
else if (initial.includes("great"))
                final = initial.replace("great","grate");
else if (initial.includes("grate"))
                final = initial.replace("grate","great");
else if (initial.includes("groan"))
                final = initial.replace("groan","grown");
else if (initial.includes("grown"))
                final = initial.replace("grown","groan");
else if (initial.includes("hear"))
                final = initial.replace("hear","here");
else if (initial.includes("here"))
                final = initial.replace("here","hear");
else if (initial.includes("heel"))
                final = initial.replace("heel","heal");
else if (initial.includes("heal"))
                final = initial.replace("heal","heel");
else if (initial.includes("hi"))
                final = initial.replace("hi","high");
else if (initial.includes("high"))
                final = initial.replace("high","hi");
else if (initial.includes("him"))
                final = initial.replace("him","hymn");
else if (initial.includes("hymn"))
                final = initial.replace("hymn","him");
else if (initial.includes("hoard"))
                final = initial.replace("hoard","horde");
else if (initial.includes("horde"))
                final = initial.replace("horde","hoard");
else if (initial.includes("hole"))
                final = initial.replace("hole","whole");
else if (initial.includes("whole"))
                final = initial.replace("whole","hole");
else if (initial.includes("holy"))
                final = initial.replace("holy","wholly");
else if (initial.includes("wholly"))
                final = initial.replace("wholly","holy");
else if (initial.includes("hour"))
                final = initial.replace("hour","our");
else if (initial.includes("our"))
                final = initial.replace("our","hour");
else if (initial.includes("idle"))
                final = initial.replace("idle","idol");
else if (initial.includes("idol"))
                final = initial.replace("idol","idle"); //good word: idol/idle
else if (initial.includes("incite"))
                final = initial.replace("incite","insight");
else if (initial.includes("insight"))
                final = initial.replace("insight","incite");
else if (initial.includes("knead"))
                final = initial.replace("knead","need");
else if (initial.includes("need"))
                final = initial.replace("need","knead");
else if (initial.includes("knew"))
                final = initial.replace("knew","new");
else if (initial.includes("new"))
                final = initial.replace("new","knew");
else if (initial.includes("knight"))
                final = initial.replace("knight","night");
else if (initial.includes("night"))
                final = initial.replace("night","knight");
else if (initial.includes("knot"))
                final = initial.replace("knot","not");
else if (initial.includes("not"))
                final = initial.replace("not","knot");
else if (initial.includes("know"))
                final = initial.replace("know","no");
else if (initial.includes("no"))
                final = initial.replace("no","know");
else if (initial.includes("leak"))
                final = initial.replace("leak","leek");
else if (initial.includes("leek"))
                final = initial.replace("leek","leak");
else if (initial.includes("lessen"))
                final = initial.replace("lessen","lesson");
else if (initial.includes("lesson"))
                final = initial.replace("lesson","lessen");
else if (initial.includes("links"))
                final = initial.replace("links","lynx");
else if (initial.includes("lynx"))
                final = initial.replace("lynx","links");
else if (initial.includes("loan"))
                final = initial.replace("loan","lone");
else if (initial.includes("lone"))
                final = initial.replace("lone","loan");
else if (initial.includes("loot"))
                final = initial.replace("loot","lute");
else if (initial.includes("lute"))
                final = initial.replace("lute","loot");
else if (initial.includes("made"))
                final = initial.replace("made","maid");
else if (initial.includes("maid"))
                final = initial.replace("maid","made");
else if (initial.includes("mail"))
                final = initial.replace("mail","male");
else if (initial.includes("male"))
                final = initial.replace("male","mail");
else if (initial.includes("main"))
                final = initial.replace("main","mane");
else if (initial.includes("mane"))
                final = initial.replace("mane","main");
else if (initial.includes("marshal"))
                final = initial.replace("marshal","martial");
else if (initial.includes("martial"))
                final = initial.replace("martial","marshal");
else if (initial.includes("medal"))
                final = initial.replace("medal","meddle");
else if (initial.includes("meddle"))
                final = initial.replace("meddle","medal");
else if (initial.includes("meet"))
                final = initial.replace("meet","meat");
else if (initial.includes("meat"))
                final = initial.replace("meat","meet");
else if (initial.includes("might"))
                final = initial.replace("might","mite");
else if (initial.includes("mite"))
                final = initial.replace("mite","might");
else if (initial.includes("mist"))
                final = initial.replace("mist","missed");
else if (initial.includes("missed"))
                final = initial.replace("missed","mist");
else if (initial.includes("moose"))
                final = initial.replace("moose","mousse");
else if (initial.includes("mousse"))
                final = initial.replace("mousse","moose");
else if (initial.includes("muscle"))
                final = initial.replace("muscle","mussel");
else if (initial.includes("mussel"))
                final = initial.replace("mussel","muscle");
else if (initial.includes("none"))
                final = initial.replace("none","nun");
else if (initial.includes("nun"))
                final = initial.replace("nun","none");
else if (initial.includes("oar"))
                final = initial.replace("oar","or");
else if (initial.includes("or"))
                final = initial.replace("or","oar");
else if (initial.includes("overdo"))
                final = initial.replace("overdo","overdue");
else if (initial.includes("overdue"))
                final = initial.replace("overdue","overdo");
else if (initial.includes("pail"))
                final = initial.replace("pail","pale");
else if (initial.includes("pale"))
                final = initial.replace("pale","pail");
else if (initial.includes("pain"))
                final = initial.replace("pain","pane");
else if (initial.includes("pane"))
                final = initial.replace("pane","pain");
else if (initial.includes("pair"))
                final = initial.replace("pair","pear");
else if (initial.includes("pear"))
                final = initial.replace("pear","pair");
else if (initial.includes("passed"))
                final = initial.replace("passed","past");
else if (initial.includes("past"))
                final = initial.replace("past","passed");
else if (initial.includes("peace"))
                final = initial.replace("peace","piece");
else if (initial.includes("piece"))
                final = initial.replace("piece","peace");
else if (initial.includes("peak"))
                final = initial.replace("peak","peek");
else if (initial.includes("peek"))
                final = initial.replace("peek","peak");
else if (initial.includes("pedal"))
                final = initial.replace("pedal","peddle");
else if (initial.includes("peddle"))
                final = initial.replace("peddle","pedal");
else if (initial.includes("plane"))
                final = initial.replace("plane","plain");
else if (initial.includes("plain"))
                final = initial.replace("plain","plane");
else if (initial.includes("principal"))
                final = initial.replace("principal","principle");            
else if (initial.includes("principle"))
                final = initial.replace("principle","principal");
else if (initial.includes("profit"))
                final = initial.replace("profit","prophet");
else if (initial.includes("prophet"))
                final = initial.replace("prophet","profit");
else if (initial.includes("rain"))
                final = initial.replace("rain","reign");
else if (initial.includes("reign"))
                final = initial.replace("reign","rain");
else if (initial.includes("red"))
                final = initial.replace("red","read");
else if (initial.includes("read"))
                final = initial.replace("read","red");
else if (initial.includes("right"))
                final = initial.replace("right","write");
else if (initial.includes("write"))
                final = initial.replace("write","right");
else if (initial.includes("ring"))
                final = initial.replace("ring","wring");
else if (initial.includes("wring"))
                final = initial.replace("wring","ring");
else if (initial.includes("rode"))
                final = initial.replace("rode","road");
else if (initial.includes("road"))
                final = initial.replace("road","rode");
else if (initial.includes("role"))
                final = initial.replace("role","roll");
else if (initial.includes("roll"))
                final = initial.replace("roll","role");
else if (initial.includes("rung"))
                final = initial.replace("rung","wrung");
else if (initial.includes("wrung"))
                final = initial.replace("wrung","rung");
else if (initial.includes("sail"))
                final = initial.replace("sail","sale");
else if (initial.includes("sale"))
                final = initial.replace("sale","sail");
else if (initial.includes("see"))
                final = initial.replace("see","sea");
else if (initial.includes("sea"))
                final = initial.replace("sea","see");
else if (initial.includes("shoe"))
                final = initial.replace("shoe","shoo");
else if (initial.includes("shoo"))
                final = initial.replace("shoo","shoe");
else if (initial.includes("side"))
                final = initial.replace("side","sighed");
else if (initial.includes("sighed"))
                final = initial.replace("sighed","side");
else if (initial.includes("slay"))
                final = initial.replace("slay","sleigh");
else if (initial.includes("sleigh"))
                final = initial.replace("sleigh","slay");
else if (initial.includes("soar"))
                final = initial.replace("soar","sore");
else if (initial.includes("sore"))
                final = initial.replace("sore","soar");
else if (initial.includes("sole"))
                final = initial.replace("sole","soul");
else if (initial.includes("soul"))
                final = initial.replace("soul","sole");
else if (initial.includes("some"))
                final = initial.replace("some","sum");
else if (initial.includes("sum"))
                final = initial.replace("sum","some");
else if (initial.includes("stare"))
                final = initial.replace("stare","stair");
else if (initial.includes("stair"))
                final = initial.replace("stair","stare");
else if (initial.includes("stationary"))
                final = initial.replace("stationary","stationery");            
else if (initial.includes("stationery"))
                final = initial.replace("stationery","stationary");
else if (initial.includes("steal"))
                final = initial.replace("steal","steel");
else if (initial.includes("steel"))
                final = initial.replace("steel","steal");
else if (initial.includes("stile"))
                final = initial.replace("stile","style");
else if (initial.includes("style"))
                final = initial.replace("style","stile");
else if (initial.includes("sun"))
                final = initial.replace("sun","son");
else if (initial.includes("son"))
                final = initial.replace("son","sun");
else if (initial.includes("tail"))
                final = initial.replace("tail","tale");
else if (initial.includes("tale"))
                final = initial.replace("tale","tail");
else if (initial.includes("team"))
                final = initial.replace("team","teem");
else if (initial.includes("teem"))
                final = initial.replace("teem","team");
else if (initial.includes("than"))
                final = initial.replace("than","then");
else if (initial.includes("then"))
                final = initial.replace("then","than");
else if (initial.includes("their"))
                final = initial.replace("their","there");
else if (initial.includes("there"))
                final = initial.replace("there","their");
else if (initial.includes("throne"))
                final = initial.replace("throne","thrown");
else if (initial.includes("thrown"))
                final = initial.replace("thrown","throne");
else if (initial.includes("tide"))
                final = initial.replace("tide","tied");
else if (initial.includes("tied"))
                final = initial.replace("tied","tide");
else if (initial.includes("to"))
                final = initial.replace("to","two");
else if (initial.includes("too"))
                final = initial.replace("too","two");
else if (initial.includes("two"))
                final = initial.replace("two","too");
else if (initial.includes("toe"))
                final = initial.replace("toe","tow");
else if (initial.includes("tow"))
                final = initial.replace("tow","toe");
else if (initial.includes("vain"))
                final = initial.replace("vain","vein");
else if (initial.includes("vein"))
                final = initial.replace("vein","vain");
else if (initial.includes("vary"))
                final = initial.replace("vary","very");
else if (initial.includes("very"))
                final = initial.replace("very","vary");
else if (initial.includes("wail"))
                final = initial.replace("wail","whale");
else if (initial.includes("whale"))
                final = initial.replace("whale","wail");
else if (initial.includes("waste"))
                final = initial.replace("waste","waist");
else if (initial.includes("waist"))
                final = initial.replace("waist","waste");
else if (initial.includes("way"))
                final = initial.replace("way","weigh");
else if (initial.includes("weigh"))
                final = initial.replace("weigh","way");
else if (initial.includes("weak"))
                final = initial.replace("weak","week");
else if (initial.includes("week"))
                final = initial.replace("week","weak");
else if (initial.includes("weather"))
                final = initial.replace("weather","whether");
else if (initial.includes("whether"))
                final = initial.replace("whether","weather");
else if (initial.includes("where"))
                final = initial.replace("where","wear");
else if (initial.includes("wear"))
                final = initial.replace("wear","where");
else if (initial.includes("which"))
                final = initial.replace("which","witch");
else if (initial.includes("witch"))
                final = initial.replace("witch","which");
else if (initial.includes("who's"))
                final = initial.replace("who's","whose");
else if (initial.includes("whose"))
                final = initial.replace("whose","who's");
else if (initial.includes("won"))
                final = initial.replace("won","one");
else if (initial.includes("one"))
                final = initial.replace("one","won");
else if (initial.includes("would"))
                final = initial.replace("would","wood");
else if (initial.includes("wood"))
                final = initial.replace("wood","would");
else if (initial.includes("you're"))
                final = initial.replace("you're","your");
else if (initial.includes("your"))
                final = initial.replace("your","you're");
else 
    final = initial;
            

            this.finaly.setCaption(final);

            this._getInput();
        },
        
        
        
        _getInput:function(){            
            var beg = this.finaly.getCaption(); 
            this.$word = ["no", "no", "no"];            
            for (var a = 0; a < beg.length; a++) {
                this.$word[a] = new Array(3);
            }
            for(var b = 0; b < beg.length; b++) {
                this.$word[b] = beg[b];
            }
            
            var build = "";
            var build2 = "";

            for (var c = 0; c<this.$word.length; c++) {
                var x = -1; 
                if (this.$word[c]=="a")    {
                        build2 = "@"; 
                    this.$symbs++;
                }
                else if (this.$word[c]=="b") {
                    build2 = "b";           }    
                else if (this.$word[c]=="c") {
                        build2 = "(";
                    this.$symbs++;
                }
                else if (this.$word[c]=="d") {
                    build2 = "d";
                }
                else if (this.$word[c]=="e") {
                    build2 = "e";              }
                else if (this.$word[c]=="f") {
                    build2 = "f";
                }
                else if (this.$word[c]=="g") {
                    build2 = "g";
                }
                else if (this.$word[c]=="h") {
                    build2 = "h";
                }
                else if (this.$word[c]=="i") {
                    x = Math.round(Math.random() * 1);
                    if (x===0) {
                        build2 = "!";
                    }
                    else if (x==1) {
                        build2 = ";";
                    }
                    this.$symbs++;
                }
                else if (this.$word[c]=="j") {
                    build2 = "j";
                }
                else if (this.$word[c]=="k") {
                    build2 = "k";
                }
                else if (this.$word[c]=="l") {
                    x = Math.round(Math.random() * 1);
                    if (x===0) {
                        build2 = "1";
                        this.$numms++;
                    }
                    else if (x==1) {
                        build2 = "/";
                        this.$symbs++;
                    }                    
                }
                else if (this.$word[c]=="m") {
                    build2 = "m";
                }
                else if (this.$word[c]=="n") {
                    build2 = "n";
                }
                else if (this.$word[c]=="o") {
                    build2 = "0";
                    this.$numms++;
                }
                else if (this.$word[c]=="p") {
                    build2 = "p";
                }
                else if (this.$word[c]=="q") {
                    build2 = "q";
                }
                else if (this.$word[c]=="r") {
                    build2 = "r";
                }
                else if (this.$word[c]=="s") {
                    build2 = "$";
                    this.$symbs++;
                }
                else if (this.$word[c]=="t") {
                    build2 = "+";
                    this.$symbs++;
                }
                else if (this.$word[c]=="u") {
                    build2 = "u";
                }
                else if (this.$word[c]=="v") {
                    build2 = "v";
                }
                else if (this.$word[c]=="w") {
                    build2 = "w";
                }
                else if (this.$word[c]=="x") {
                    build2 = "x";
                }
                else if (this.$word[c]=="y") {
                    build2 = "y";
                }
                else if (this.$word[c]=="z") {
                    build2 = "z";
                }
                else if (this.$word[c]==" ") {
                    build2 = "  ";
                }
                
                //capitals addition
                
                else if (this.$word[c]=="A")    {            
                        build2 = "A";
                    this.$capps++;
                }
                else if (this.$word[c]=="B") {
                    build2 = "B";  
                    this.$capps++;
                }    
                else if (this.$word[c]=="C") {
                        build2 = "C";
                    this.$capps++;
                }
                else if (this.$word[c]=="D") {
                    build2 = "D";
                    this.$capps++;
                }
                else if (this.$word[c]=="E") {
                    build2 = "E";  
                this.$capps++;
                }
                else if (this.$word[c]=="F") {
                    build2 = "F";
                    this.$capps++;
                }
                else if (this.$word[c]=="G") {
                    build2 = "G";
                    this.$capps++;
                }
                else if (this.$word[c]=="H") {
                    build2 = "H";
                    this.$capps++;
                }
                else if (this.$word[c]=="I") {
                    build2 = "I";
                    this.$capps++;
                }
                else if (this.$word[c]=="J") {
                    build2 = "J";
                    this.$capps++;
                }
                else if (this.$word[c]=="K") {
                    build2 = "K";
                    this.$capps++;
                }
                else if (this.$word[c]=="L") {
                    build2 = "L";
                    this.$capps++;
                }
                else if (this.$word[c]=="M") {
                    build2 = "M";
                    this.$capps++;
                }
                else if (this.$word[c]=="N") {
                    build2 = "N";
                    this.$capps++;
                }
                else if (this.$word[c]=="O") {
                    build2 = "O";
                    this.$capps++;
                }
                else if (this.$word[c]=="P") {
                    build2 = "P";
                    this.$capps++;
                }
                else if (this.$word[c]=="Q") {
                    build2 = "Q";
                    this.$capps++;
                }
                else if (this.$word[c]=="R") {
                    build2 = "R";
                    this.$capps++;
                }
                else if (this.$word[c]=="S") {
                    build2 = "S";
                    this.$capps++;
                }
                else if (this.$word[c]=="T") {
                    build2 = "T";
                    this.$capps++;
                }
                else if (this.$word[c]=="U") {
                    build2 = "U";
                    this.$capps++;
                }
                else if (this.$word[c]=="V") {
                    build2 = "V";
                    this.$capps++;
                }
                else if (this.$word[c]=="W") {
                    build2 = "W";
                    this.$capps++;
                }
                else if (this.$word[c]=="X") {
                    build2 = "X";
                    this.$capps++;
                }
                else if (this.$word[c]=="Y") {
                    build2 = "Y";
                    this.$capps++;
                }
                else if (this.$word[c]=="Z") {
                    build2 = "Z";
                    this.$capps++;
                }
                
                // numbers addition
                
                else if (this.$word[c]=="0") {
                    build2 = "0";
                    this.$numms++;
                }
                else if (this.$word[c]=="1") {
                    build2 = "1";
                    this.$numms++;
                }
                else if (this.$word[c]=="2") {
                    build2 = "2";
                    this.$numms++;
                }
                else if (this.$word[c]=="3") {
                    build2 = "3";
                    this.$numms++;
                }
                else if (this.$word[c]=="4") {
                    build2 = "4";
                    this.$numms++;
                }
                else if (this.$word[c]=="4") {
                    build2 = "1";
                    this.$numms++;
                }
                else if (this.$word[c]=="4") {
                    build2 = "4";
                    this.$numms++;
                }
                else if (this.$word[c]=="5") {
                    build2 = "5";
                    this.$numms++;
                }
                else if (this.$word[c]=="6") {
                    build2 = "6";
                    this.$numms++;
                }
                else if (this.$word[c]=="7") {
                    build2 = "7";
                    this.$numms++;
                }
                else if (this.$word[c]=="8") {
                    build2 = "8";
                    this.$numms++;
                }
                else if (this.$word[c]=="9") {
                    build2 = "9";
                    this.$numms++;
                }
                
                
                build = build.concat(build2);
                //alert(build);
                
            }
            this.finaly2.setCaption(build);
            this.$changed = build;
            //alert("Modified password: "+build);
           this._fixer();
        },
        
        _fixer:function(){
            symbols = this.symbInput.getUIValue();
            //alert(symbols);
            
            // adding capital letters
            var beg = this.$changed;
            var beg2 = " ";
            this.$charge = ["no", "no", "no"];            
            for (var a = 0; a < beg.length; a++) {
                this.$charge[a] = new Array(3);
            }
            for(var b = 0; b < beg.length; b++) {
                this.$charge[b] = beg[b];
            }
            while (this.$capps < Number(this.capInput.getUIValue()))
            {
                var c = Math.round(Math.random() * (beg.length)) - 1;
                // turning lowercases into capitals
                if (this.$charge[c]==" " || this.$charge[c]=="@" || this.$charge[c]=="(" || this.$charge[c]=="!" || this.$charge[c]==";" || this.$charge[c]=="%" || this.$charge[c]=="1" || this.$charge[c]=="/" || this.$charge[c]=="0" || this.$charge[c]=="*" || this.$charge[c]=="?" || this.$charge[c]=="{" || this.$charge[c]=="8" || this.$charge[c]=="$" || this.$charge[c]=="+" || this.$charge[c]==">" || this.$charge[c]=="<" || this.$charge[c]=="/") {        
                }
                else if (this.$charge[c] == (this.$charge[c].toLowerCase())) {
                    this.$charge[c] = (this.$charge[c].toUpperCase());
                    this.$capps++;   
                }
                else {               
                }               
            }
            for(var h = 0; h < beg.length; h++) {
                beg2 = beg2.concat(this.$charge[h]);
            }
            
            // adding numbers
            while (this.$numms < Number(this.numInput.getUIValue()))
            {
                var d = (Math.round(Math.random() * 9));
                beg2 = beg2.concat(d.toString());
                this.$numms++;
            }
            
            // adding symbols
            var build2 = " ";
            while (this.$symbs < Number(this.symbInput.getUIValue()))
            {
                var e = (Math.round(Math.random() * 14));
                if (e == 1) {
                    build2 = "@";
                }
                else if (e==2) {
                    build2 = "(";
                }
                else if (e==3) {
                    build2 = "!";
                }
                else if (e==4) {
                    build2 = ";";
                }
                else if (e==5) {
                    build2 = "%";
                }
                else if (e==6) {
                    build2 = "/";
                }
                else if (e==7) {
                    build2 = "*";
                }
                else if (e==8) {
                    build2 = "?";
                }
                else if (e==9) {
                    build2 = "{";
                }
                else if (e==10) {
                    build2 = "$";
                }
                else if (e==11) {
                    build2 = "+";
                }
                else if (e==12) {
                    build2 = ">";
                }
                else if (e==13) {
                    build2 = "<";
                }
                else if (e==14) {
                    build2 = "/";
                }
                //beg2 = beg2.concat(build2);
                beg2 += String(build2);
                this.$symbs++;

            }
            
            this.$capps = 0;
            this.$numms = 0;
            this.$symbs = 0;
            this.checkbox_books.setUIValue(false);
            this.checkbox_lyrics.setUIValue(false);
            this.checkbox_movies.setUIValue(false);
            this.checkbox_quotes.setUIValue(false);
            var index, len=beg2.length;
            alert(beg2);
            var newStr="";
            for (index= 0; index < len; ++index) {
                // newStr += String(beg2[index]);
                switch (beg2[index]) {
                    case '@': newStr += "@";
                        break;
                    case '!': newStr += "!"; 
                        break;   
                    case '$': newStr += "$";
                        break;
                    case '(': newStr += "(";
                        break;
                    case ' ': newStr += " ";
                        break;
                    default: newStr += String(beg2[index]);
                        break;
                }
                //alert("Each char: " + Char(beg2[index]))
            }
            //newStr[index] = '\0';
            //alert("Newstr: " + newStr)         
            this.gen_inpt_passspace.setUIValue(newStr);
            var index2, len2 = newStr.length;
            var newStr2 = "";
            for (index2 = 0; index2 < len2; ++index2) {
                switch (newStr[index2]) {
                    case '@': newStr2 += "@";
                        break;
                    case '!': newStr2 += "!";
                        break;
                    case '$': newStr2 += "$";
                        break;
                    case '(': newStr2 += "(";
                        break;
                    case ' ': newStr2 += "";
                        break;
                    default: newStr2 += String(newStr[index2]);
                        break;
                }
            }
            this.gen_inpt_passswpace.setUIValue(newStr2);
            
        },
        
        _material:function(){            
            //var input = this.categories.getUIValue(); 
            if (this.checkbox_quotes.getUIValue() === true) {
                rows = this.quotes_treegrid.getRows();
                length = rows.length;
                for (index= 1; index < length; ++index) {
                    this.$tota.push(this.quotes_treegrid.getCellbyRowCol(index, "col1").value);
                }
            }
            
            if (this.checkbox_lyrics.getUIValue() === true) {
                rows = this.songs_treegrid.getRows();
                length = rows.length;
                for (index= 1; index < length; ++index) {
                    this.$tota.push(this.songs_treegrid.getCellbyRowCol(index, "col1").value);
                }
            }
            
            if (this.checkbox_books.getUIValue() === true) {
                rows = this.books_treegrid.getRows();
                length = rows.length;
                for (index= 1; index < length; ++index) {
                     this.$tota.push(this.books_treegrid.getCellbyRowCol(index, "col1").value);
                }
            }
            
            if (this.checkbox_movies.getUIValue() === true) {
                rows = this.movies_treegrid.getRows();
                length = rows.length;
                for (index= 1; index < length; ++index) {
                    this.$tota.push(this.movies_treegrid.getCellbyRowCol(index, "col1").value);
                }
            }

            var fin = "";
            var rando = 0; 
            rando = (Math.round(Math.random() * this.$tota.length-1));
            fin = this.$tota[rando];   
            this.inputter.setUIValue(fin);   
            this.$tota = [];
            
            
        },
        
        
        _mat1:function(){
            //var quotes = ["No guts, no glory", "Screw it, lets do it", "She believed she could, so she did", "Believe you can and you're halfway there", "You get what you give", "Spread love everywhere", "You are enough", "Be the change that you wish to see"];
            //for (i = 0; i<quotes.length; i++) {
            //    this.$tota.push(quotes[i]);
            //}
            
            var ns = this;
            xui.Ajax("./json/quotes3.json","",function(rsp){
                var data = rsp;
                if(!data)alert("no data");
                else{
                    if(data.header)
                        ns.quotes_treegrid.setHeader(data.header);
                    if(data.rows) 
                        ns.quotes_treegrid.setRows(data.rows);
                }
            }).start();
        },
        
        _mat2:function(){
            var ns = this;
            xui.Ajax("./json/songs.json","",function(rsp){
                var data = rsp;
                if(!data)alert("no data");
                else{
                    if(data.header)
                        ns.songs_treegrid.setHeader(data.header);
                    if(data.rows) 
                        ns.songs_treegrid.setRows(data.rows);
                }
            }).start();
        },
        
        _mat3:function(){
            var ns = this;
            xui.Ajax("./json/books.json","",function(rsp){
                var data = rsp;
                if(!data)alert("no data");
                else{
                    if(data.header)
                        ns.books_treegrid.setHeader(data.header);
                    if(data.rows) 
                        ns.books_treegrid.setRows(data.rows);
                }
            }).start();
        },
        
        _mat4:function(){
            var ns = this;
            xui.Ajax("./json/movies.json","",function(rsp){
                var data = rsp;
                if(!data)alert("no data");
                else{
                    if(data.header)
                        ns.movies_treegrid.setHeader(data.header);
                    if(data.rows) 
                        ns.movies_treegrid.setRows(data.rows);
                }
            }).start();
        },
        
        
        
        _switch1:function(){
            this.xui_ui_tabs8.setValue("Specifications",true);   
        },
        
        _switch2:function(){
            this.xui_ui_tabs8.setValue("Generator",true);
        },
        
        _bcfunc:function(){            
            var ns = this;
            xui.Ajax("./json/quotes3.json","",function(rsp){
                var data = rsp;
                if(!data)alert("no data");
                else{
                    if(data.header)
                        ns.quotes_treegrid.setHeader(data.header);
                    if(data.rows) 
                        ns.quotes_treegrid.setRows(data.rows);
                }
            }).start();
        },
        
        _getRowCol:function(){
            rows = this.quotes_treegrid.getRows();
            length = rows.length;
            alert(length);
            for (index= 1; index < length; ++index) {
                machine = this.quotes_treegrid.getCellbyRowCol(index, "col1").value;
                manufac = this.quotes_treegrid.getCellbyRowCol(index, "col2").value;
            }
        },
        
        _datamuser:function(){
            
        },
        
        _ricefunc:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();

        //alert("Entering button 2");
            xui.fetch("https://api.datamuse.com/words", {
                "ml": ns.i_ml.getUIValue()
            }, function(rsp){
                alert ( JSON.stringify(rsp) );
            }, function(err){
                alert ( err );
            });
            alert("After button 2");
        }
        
        
        
        
    }
});