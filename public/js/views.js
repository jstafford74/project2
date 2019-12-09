const projKey = [];
const projKey1 = [];
const projKey2 = [];
const totalC = [];
const tCount = [];
const forks = [];
let id;

//-----Main Chart-----//
var chart1 = Highcharts.chart("chart1", {
  chart: {
    type: "column"
  },
  title: {
    text: "Total Repository Count by Project"
  },
  subtitle: {
    text: "Source: GitHub.com"
  },
  xAxis: {
    categories: [],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: "Total Repo Count"
    }
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [
    {
      data: [],
      name: "Repo Count",
      color: "#48B84A "
    }
  ]
});

//-----Pie Project Chart-----//
var chart2 = Highcharts.chart("chart2", {
  chart: {
    type: "pie"
  },
  title: {
    text: "User Type Breakdown"
  },
  subtitle: {
    text: "Source: GitHub.com"
  },
  xAxis: {
    categories: []
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      dataLabels: {
        enabled: true
      }
    }
  },
  tooltip: {
    pointFormat: "{point.name}: <b>{point.percentage:.1f}%</b>"
  },
  series: [
    {
      data: []
    }
  ]
});

//-----Forks Histogram Chart-----//
// var chart3 = Highcharts.chart("chart3", {
var chart3 = Highcharts.chart("chart3", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie"
  },

  title: {
    text: "Most Dominant RepoMasters"
  },
  tooltip: {
    pointFormat: "{point.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        inside: true,
        format: "{point.percentage:.1f} %",
        connectorColor: "silver"
      }
    }
  },
  series: [
    {
      data: []
    }
  ]
});
$("#countbtn").click(() => {
  event.preventDefault();
  $.get("/api/projs", function(data) {
    tc = Object.values(data);
    console.log(tc);
    // const newKeys = [];
    const newVals = [];
    tc.forEach(it => {
      // newKeys.push(Object.values(it)[0]);
      newVals.push(parseFloat(Object.values(it)[3]));
    });
    console.log(newVals);
    chart1.series[0].remove();
    chart1.setTitle({ text: "Total Count" });
    chart1.addSeries({
      name: "Repo Count",
      data: newVals,
      color: "#48B84A"
    });
  });
});

$("#forksbtn").click(() => {
  event.preventDefault();
  $.get("/api/forks", function(data) {
    fk = Object.values(data);
    // var series = chart1.series[0];
    // const newKeys = [];
    const newVals = [];
    fk.forEach(it => {
      // newKeys.push(Object.values(it)[0]);
      newVals.push(parseFloat(Object.values(it)[1]));
    });

    chart1.series[0].remove();
    chart1.setTitle({ text: "Avg Forks" });
    chart1.addSeries({
      name: "Forks",
      data: newVals,
      color: "#CE3821"
    });
  });
});

$("#scorebtn").click(() => {
  event.preventDefault();
  $.get("/api/scores", function(data) {
    sc = Object.values(data);
    const newVals = [];
    sc.forEach(it => {
      newVals.push(parseFloat(Object.values(it)[1]));
    });

    chart1.series[0].remove();
    chart1.setTitle({ text: "Avg Scores" });
    chart1.addSeries({
      name: "Scores",
      data: newVals,
      color: "#2719AB"
    });
  });
});

$("#langbtn").click(() => {
  event.preventDefault();
  // console.log(id);
  $.get("/api/langs/" + id, function(data) {
    lg = data;
    const projlang = [];

    lg.forEach(dit => {
      projlang.push([dit.lang, dit.langs]);
      // langss.push(dit.langs);;
    });
    console.log(projlang);

    chart2.series[0].remove();
    chart2.setTitle({ text: `Language Breakdown: ${id}` });
    chart2.addSeries({
      data: projlang
    });
  });
});

function getProjs() {
  $("#proj-butts").empty();
  var li1 = $("<li>");
  li1.addClass("nav-title");
  li1.text("Bootcamp Projects");
  $("#proj-butts").append(li1);
  $.get("/api/projs", function(data) {
    projs = data;
    projs.forEach(it => {
      projKey.push(it.projkey);
      tCount.push(it.totalCount);
    });
    $.get("/api/types/tc", function(data) {
      const datax = Object.values(data);

      chart2.series[0].remove();
      chart2.setTitle({ text: "All Projects by User Type" });
      chart2.addSeries({
        data: [
          [datax[1].type, datax[1].allTypes],
          [datax[0].type, datax[0].allTypes]
        ],
        color: "#2719AB"
      });
    });
    projKey1.push([...new Set(projKey)]);
    totalC.push([...new Set(tCount)]);

    chart1.series[0].setData(totalC[0]);
    chart1.xAxis[0].setCategories(projKey1[0]);
    console.log(projKey1[0]);

    projKey1[0].forEach(key => {
      var liBut = $("<li>");
      liBut.addClass("nav-item");
      var aBut = $("<a>");
      aBut.addClass("nav-link");
      aBut.attr("href", "#");
      aBut.click(myfunction);
      aBut.text(key);
      liBut.append(aBut);

      // projBut.addClass("btn btn-amber");
      aBut.attr("data-topic", key);
      // projBut.click(myfunction);
      // projBut.attr("type", "button");
      aBut.attr("value", key);
      // projBut.text(key);
      $("#proj-butts").append(liBut);
      // $("#proj-butts").append(projBut);
    });
  });
}

// let id;
// function getProj() {}
function myfunction() {
  event.preventDefault();

  id = $(this).data("topic");
  console.log(id);
  $.get("/api/projs/" + id, data => {
    const logins = [];
    const types = [];

    const createdAt = [];
    const lastUpdate = [];
    data.forEach(it => {
      logins.push(it.login);
      types.push(it.type);
      createdAt.push(it.createdAt);
      lastUpdate.push(lastUpdate);
    });
    // console.log(types);
    var countedTypes = types.reduce(function(allTypes, type) {
      if (type in allTypes) {
        allTypes[type]++;
      } else {
        allTypes[type] = 1;
      }
      return allTypes;
    }, {});

    let x = Object.entries(countedTypes);
    console.log(x);
    chart2.series[0].remove();
    chart2.setTitle({ text: `Login breakdown: ${id}` });
    chart2.addSeries({
      data: x,
      color: "#2719AB"
    });
  });
}
console.log(id);
getProjs();

function getrepoMasters() {
  $.get("/api/logins/repomasters", function(data) {
    logz = data;
    const z = [];
    let y = Object.values(logz[0]);

    y.forEach(it => {
      z.push(Object.values(it));
    });
    // console.log(z);
    chart3.series[0].setData(z);
    // console.log(Object.keys(logz[0]));
    // console.log(Object.values(logz[0]));
  });
}

getrepoMasters();
makeTable();
function makeTable() {
  $.get("/api/repomaster/table", data => {
    tbl = data[0];
    // console.log(data[0][0].login);
    const tblz = [];
    const userUrls = [];
    tbl.forEach(tblit => {
      tblz.push([
        tblit.login,
        tblit.pubRepos,
        tblit.pkeys,
        tblit.type,
        tblit.a_scor
      ]);
      userUrls.push(tblit.home);
    });
    // console.log(tblz, userUrls);
    displayResults(tblz, userUrls);
  });
}

function displayResults(dataArr, urlArr) {
  $("#projtbl").empty();
  for (j = 0; j < dataArr.length; j++) {
    const row = dataArr[j];
    const tr = $("<tr>");
    for (i = 0; i < row.length; i++) {
      const td = $("<td>");
      const ah = "<a href=\"" + urlArr[j] + "\">" + row[i] + "</a>";

      td.append(ah);
      tr.append(td);
    }
    $("#projtbl").append(tr);
  }
}
