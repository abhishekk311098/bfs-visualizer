import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Bfs.css";

var DUMMY_OBSTACLES = [
  '{"q":4,"r":-2,"s":-2}',
  '{"q":7,"r":-2,"s":-2}',
  '{"q":8,"r":-2,"s":-2}',
  '{"q":9,"r":-3,"s":-2}',
  '{"q":10,"r":-3,"s":-2}',
  '{"q":4,"r":-1,"s":-3}',
  '{"q":4,"r":0,"s":-4}',
  '{"q":4,"r":1,"s":-5}',
  '{"q":3,"r":2,"s":-5}',
  '{"q":2,"r":3,"s":-5}',
  '{"q":1,"r":4,"s":-5}',
  '{"q":0,"r":5,"s":-5}',
  '{"q":4,"r":5,"s":-5}',
  '{"q":4,"r":6,"s":-5}',
  '{"q":5,"r":6,"s":-5}',
  '{"q":5,"r":7,"s":-5}',
  '{"q":-1,"r":6,"s":-5}',
  '{"q":-2,"r":7,"s":-5}',
  '{"q":-4,"r":4,"s":-5}',
  '{"q":-3,"r":3,"s":-5}',
  '{"q":-5,"r":3,"s":-5}',
  '{"q":-4,"r":2,"s":-5}',
  '{"q":-4,"r":1,"s":-5}',
  '{"q":-6,"r":1,"s":-5}',
  '{"q":-6,"r":0,"s":-5}',
  '{"q":-6,"r":-1,"s":-5}',
  '{"q":-6,"r":-2,"s":-5}',
  '{"q":-6,"r":-4,"s":-5}',
  '{"q":-4,"r":-6,"s":-5}',
  '{"q":-3,"r":-7,"s":-5}',
  '{"q":-2,"r":-8,"s":-5}',
  '{"q":-5,"r":-5,"s":-5}',
  '{"q":-7,"r":-4,"s":-5}',
  '{"q":-6,"r":4,"s":-5}',
  '{"q":-7,"r":4,"s":-5}',
  '{"q":-8,"r":4,"s":-5}',
  '{"q":-9,"r":4,"s":-5}',
  '{"q":-10,"r":4,"s":-5}',
  '{"q":-11,"r":4,"s":-5}',
  '{"q":-12,"r":4,"s":-5}',
  '{"q":-5,"r":5,"s":-5}',
  '{"q":-5,"r":6,"s":-5}',
  '{"q":-5,"r":7,"s":-5}',
  '{"q":-5,"r":8,"s":-5}',
  '{"q":4,"r":-4,"s":-0}',
  '{"q":3,"r":-4,"s":1}',
  '{"q":2,"r":-4,"s":-2}',
  '{"q":1,"r":-4,"s":-2}',
  '{"q":2,"r":-5,"s":-2}',
  '{"q":3,"r":-6,"s":-2}',
  '{"q":4,"r":-7,"s":-2}',
  '{"q":-2,"r":-2,"s":-2}',
  '{"q":-2,"r":-1,"s":-2}',
  '{"q":12,"r":-2,"s":-2}',
  '{"q":11,"r":-1,"s":-2}',
  '{"q":11,"r":0,"s":-2}',
  '{"q":10,"r":1,"s":-2}',
  '{"q":10,"r":2,"s":-2}',
  '{"q":9,"r":3,"s":-2}',
  '{"q":9,"r":4,"s":-2}',
  '{"q":8,"r":5,"s":-2}',
  '{"q":8,"r":6,"s":-2}',
  '{"q":7,"r":7,"s":-2}',
  '{"q":7,"r":8,"s":-2}',
  '{"q":6,"r":9,"s":-2}',
  '{"q":5,"r":9,"s":-2}',
  '{"q":4,"r":9,"s":-2}',
  '{"q":3,"r":9,"s":-2}',
  '{"q":2,"r":9,"s":-2}',
  '{"q":1,"r":9,"s":-2}',
  '{"q":0,"r":9,"s":-2}',
  '{"q":-1,"r":9,"s":-2}',
  '{"q":-2,"r":9,"s":-2}',
  '{"q":-3,"r":9,"s":-2}',
  '{"q":-4,"r":9,"s":-2}',
  '{"q":-5,"r":9,"s":-2}',
  '{"q":-6,"r":9,"s":-2}',
  '{"q":-7,"r":9,"s":-2}',
  '{"q":-8,"r":9,"s":-2}',
  '{"q":-9,"r":9,"s":-2}',
  '{"q":-10,"r":9,"s":-2}',
  '{"q":-11,"r":9,"s":-2}',
  '{"q":-12,"r":9,"s":-2}',
  '{"q":-13,"r":9,"s":-2}',
  '{"q":-14,"r":9,"s":-2}',
  '{"q":-15,"r":9,"s":-2}',
  '{"q":-15,"r":8,"s":-2}',
  '{"q":-14,"r":7,"s":-2}',
  '{"q":-14,"r":6,"s":-2}',
  '{"q":-13,"r":5,"s":-2}',
  '{"q":-13,"r":4,"s":-2}',
  '{"q":-12,"r":3,"s":-2}',
  '{"q":-12,"r":2,"s":-2}',
  '{"q":-11,"r":1,"s":-2}',
  '{"q":-11,"r":0,"s":-2}',
  '{"q":-10,"r":-1,"s":-2}',
  '{"q":-10,"r":-2,"s":-2}',
  '{"q":-9,"r":-3,"s":-2}',
  '{"q":-9,"r":-4,"s":-2}',
  '{"q":-8,"r":-5,"s":-2}',
  '{"q":-8,"r":-6,"s":-2}',
  '{"q":-7,"r":-7,"s":-2}',
  '{"q":-7,"r":-8,"s":-2}',
  '{"q":-6,"r":-9,"s":-2}',
  '{"q":-5,"r":-9,"s":-2}',
  '{"q":-4,"r":-9,"s":-2}',
  '{"q":-3,"r":-9,"s":-2}',
  '{"q":-2,"r":-9,"s":-2}',
  '{"q":-1,"r":-9,"s":-2}',
  '{"q":0,"r":-9,"s":-2}',
  '{"q":1,"r":-9,"s":-2}',
  '{"q":2,"r":-9,"s":-2}',
  '{"q":3,"r":-9,"s":-2}',
  '{"q":4,"r":-9,"s":-2}',
  '{"q":5,"r":-9,"s":-2}',
  '{"q":6,"r":-9,"s":-2}',
  '{"q":7,"r":-9,"s":-2}',
  '{"q":8,"r":-9,"s":-2}',
  '{"q":9,"r":-9,"s":-2}',
  '{"q":10,"r":-9,"s":-2}',
  '{"q":11,"r":-9,"s":-2}',
  '{"q":12,"r":-9,"s":-2}',
  '{"q":13,"r":-9,"s":-2}',
  '{"q":14,"r":-9,"s":-2}',
  '{"q":15,"r":-9,"s":-2}',
  '{"q":15,"r":-8,"s":-2}',
  '{"q":14,"r":-7,"s":-2}',
  '{"q":14,"r":-6,"s":-2}',
  '{"q":13,"r":-5,"s":-2}',
  '{"q":13,"r":-4,"s":-2}',
  '{"q":12,"r":-3,"s":-2}',
];

class Bfs extends Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      hexSize: 20,
      hexOrigin: { x: 400, y: 300 },
      currentHex: { q: 0, r: 0, s: 0, x: 0, y: 0 },
      obstacles: DUMMY_OBSTACLES,
      playerPosition: { q: 0, r: 0, s: 0 },
      cameFrom: {},
      hexPathMap: [],
      path: [],
    };
  }

  componentWillMount() {
    let hexparameters = this.getHexparameters();
    this.setState({
      canvasSize: { canvasWidth: 800, canvasHeight: 600 },
      hexparameters: hexparameters,
    });
  }

  componentDidMount() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
    this.canvasInteraction.width = canvasWidth;
    this.canvasInteraction.height = canvasHeight;
    this.canvasView.width = canvasWidth;
    this.canvasView.height = canvasHeight;
    this.getCanvasPosition(this.canvasInteraction);
    this.drawHex(
      this.canvasInteraction,
      this.Point(this.state.playerPosition.x, this.state.playerPosition.y),
      1,
      "black",
      "grey",
      0.2,
    );
    this.drawHexes();
    this.drawObstacles();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.currentHex !== this.state.currentHex) {
      const { q, r, s, x, y } = nextState.currentHex;
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      const ctx = this.canvasInteraction.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      this.drawPath();
      return true;
    }
    if (nextState.cameFrom !== this.state.cameFrom) {
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      const ctx = this.canvasView.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      for (let l in nextState.cameFrom) {
        const { q, r, s } = JSON.parse(l);
        const { x, y } = this.hexToPixel(this.Hex(q, r));
        this.drawHex(
          this.canvasView,
          this.Point(x, y),
          1,
          "black",
          "grey",
          0.1,
        );
        var form = JSON.parse(nextState.cameFrom[l]);
        var fromCoord = this.hexToPixel(this.Hex(form.q, form.r));
        this.drawArrow(fromCoord.x, fromCoord.y, x, y);
      }

      return true;
    }

    return false;
  }

  getHexCornerCoord(center, i) {
    let angle_deg = 60 * i + 30;
    let angle_rad = (Math.PI / 180) * angle_deg;
    let x = center.x + this.state.hexSize * Math.cos(angle_rad);
    let y = center.y + this.state.hexSize * Math.sin(angle_rad);
    return this.Point(x, y);
  }

  Point(x, y) {
    return { x: x, y: y };
  }

  drawHex(canvasID, center, lineWidth, lineColor, fillColor) {
    for (let i = 0; i <= 5; i++) {
      let start = this.getHexCornerCoord(center, i);
      let end = this.getHexCornerCoord(center, i + 1);
      this.fillHex(canvasID, center, fillColor);
      this.drawLine(canvasID, start, end, lineWidth, lineColor);
    }
  }

  drawLine(canvasID, start, end, lineWidth, lineColor) {
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }

  drawHexes() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const {
      hexWidth,
      hexHeight,
      vertDist,
      horizDist,
    } = this.state.hexparameters;
    const hexOrigin = this.state.hexOrigin;
    var hexPathMap = [];
    let qLeftSide = Math.round(hexOrigin.x / hexWidth) * 4;
    let qRightSide = (Math.round(canvasWidth - hexOrigin.x) / hexWidth) * 2;
    let rTopSide = Math.round(hexOrigin.y / (hexHeight / 2));
    let rBottomSide = Math.round(
      (canvasHeight - hexOrigin.y) / (hexHeight / 2),
    );

    var p = 0;
    for (let r = 0; r <= rBottomSide; r++) {
      if (r % 2 === 0 && r !== 0) {
        p++;
      }
      for (let q = -qLeftSide; q <= qRightSide; q++) {
        const { x, y } = this.hexToPixel(this.Hex(q - p, r));
        if (
          x > hexWidth / 2 &&
          x < canvasWidth - hexWidth / 2 &&
          y > hexHeight / 2 &&
          y < canvasHeight - hexHeight / 2
        ) {
          this.drawHex(this.canvasHex, this.Point(x, y), 1, "black", "grey");
          //this.drawHexCoordinates(this.canvasHex, this.Point(x,y), this.Hex(q-p, r, - ( q - p) - r));
          var bottomH = JSON.stringify(this.Hex(q - p, r, -(q - p) - r));
          if (!this.state.obstacles.includes(bottomH)) {
            hexPathMap.push(bottomH);
          }
        }
      }
    }
    var n = 0;
    for (let r = -1; r >= -rTopSide; r--) {
      if (r % 2 !== 0) {
        n++;
      }
      for (let q = -qLeftSide; q <= qRightSide; q++) {
        const { x, y } = this.hexToPixel(this.Hex(q + n, r));
        if (
          x > hexWidth / 2 &&
          x < canvasWidth - hexWidth / 2 &&
          y > hexHeight / 2 &&
          y < canvasHeight - hexHeight / 2
        ) {
          this.drawHex(this.canvasHex, this.Point(x, y), 1, "black", "grey");
          //this.drawHexCoordinates(this.canvasHex, this.Point(x,y), this.Hex(q+n, r, - (q + n) - r));
          var topH = JSON.stringify(this.Hex(q + n, r, -(q + n) - r));
          if (!this.state.obstacles.includes(topH)) {
            hexPathMap.push(topH);
          }
        }
      }
    }
    hexPathMap = [].concat(hexPathMap);
    this.setState(
      { hexPathMap: hexPathMap },
      (this.breadthFirstSearchCallback = () =>
        this.breadthFirstSearch(this.state.playerPosition)),
    );
  }

  hexToPixel(h) {
    let hexOrigin = this.state.hexOrigin;
    let x = this.state.hexSize * Math.sqrt(3) * (h.q + h.r / 2) + hexOrigin.x;
    let y = ((this.state.hexSize * 3) / 2) * h.r + hexOrigin.y;
    return this.Point(x, y);
  }

  Hex(q, r, s) {
    return { q: q, r: r, s: s };
  }

  drawHexCoordinates(canvasID, center, h) {
    const ctx = canvasID.getContext("2d");
    ctx.fillText(h.q, center.x + 6, center.y);
    ctx.fillText(h.r, center.x - 3, center.y + 15);
    ctx.fillText(h.s, center.x - 12, center.y);
  }

  getHexparameters() {
    let hexHeight = this.state.hexSize * 2;
    let hexWidth = (Math.sqrt(3) / 2) * hexHeight;
    let vertDist = (hexHeight * 3) / 4;
    let horizDist = hexWidth;
    return { hexWidth, hexHeight, vertDist, horizDist };
  }

  handleMouseMove(e) {
    const { left, right, top, bottom } = this.state.canvasPosition;
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const {
      hexWidth,
      hexHeight,
      vertDist,
      horizDist,
    } = this.state.hexparameters;
    let offsetX = e.pageX - left;
    let offsetY = e.pageY - top;
    const { q, r, s } = this.cubeRound(
      this.pixelToHex(this.Point(offsetX, offsetY)),
    );
    const { x, y } = this.hexToPixel(this.Hex(q, r, s));
    let playerPosition = this.state.playerPosition;
    this.getDistanceLine(this.Hex(0, 0, 0), this.Hex(q, r, s));
    this.getPath(
      this.Hex(playerPosition.q, playerPosition.r, playerPosition.s),
      this.Hex(q, r, s),
    );
    console.log(this.state.currentDistanceLine);
    if (
      x > hexWidth / 2 &&
      x < canvasWidth - hexWidth / 2 &&
      y > hexHeight / 2 &&
      y < canvasHeight - hexHeight / 2
    ) {
      this.setState({
        currentHex: { q, r, s, x, y },
      });
    }
  }

  getCanvasPosition(canvasID) {
    let rect = canvasID.getBoundingClientRect();
    this.setState({
      canvasPosition: {
        left: rect.left,
        right: rect.right,
        top: rect.top,
        bottom: rect.bottom,
      },
    });
  }

  pixelToHex(p) {
    let size = this.state.hexSize;
    let origin = this.state.hexOrigin;
    let q =
      (((p.x - origin.x) * Math.sqrt(3)) / 3 - (p.y - origin.y) / 3) / size;
    let r = ((p.y - origin.y) * 2) / 3 / size;
    return this.Hex(q, r, -q - r);
  }

  cubeRound(cube) {
    var rx = Math.round(cube.q);
    var ry = Math.round(cube.r);
    var rz = Math.round(cube.s);

    var x_diff = Math.abs(rx - cube.q);
    var y_diff = Math.abs(ry - cube.r);
    var z_diff = Math.abs(rz - cube.s);

    if (x_diff > y_diff && x_diff > z_diff) {
      rx = -ry - rz;
    } else if (y_diff > z_diff) {
      ry = -rx - rz;
    } else {
      rz = -rx - ry;
    }
    return this.Hex(rx, ry, rz);
  }

  cubeDirections(direction) {
    const cubeDirections = [
      this.Hex(1, 0, -1),
      this.Hex(1, -1, 0),
      this.Hex(0, -1, 1),
      this.Hex(-1, 0, 1),
      this.Hex(-1, 1, 0),
      this.Hex(0, 1, -1),
    ];
    return cubeDirections[direction];
  }

  cubeAdd(a, b) {
    return this.Hex(a.q + b.q, a.r + b.r, a.s + b.s);
  }

  cubeSubstract(hexA, hexB) {
    return this.Hex(hexA.q - hexB.q, hexA.r - hexB.r, hexA.s - hexB.s);
  }

  getCubeNeighbour(h, direction) {
    return this.cubeAdd(h, this.cubeDirections(direction));
  }

  drawNeighbours(h) {
    for (let i = 0; i <= 5; i++) {
      const { q, r, s } = this.getCubeNeighbour(this.Hex(h.q, h.r, h.s), i);
      const { x, y } = this.hexToPixel(this.Hex(q, r, s));
      this.drawHex(this.canvasInteraction, this.Point(x, y), "red", 2);
    }
  }

  cubeDistance(hexA, hexB) {
    const { q, r, s } = this.cubeSubstract(hexA, hexB);
    return (Math.abs(q) + Math.abs(r) + Math.abs(s)) / 2;
  }

  linearInt(a, b, t) {
    return a + (b - a) * t;
  }

  cubeLinearInt(hexA, hexB, t) {
    return this.Hex(
      this.linearInt(hexA.q, hexB.q, t),
      this.linearInt(hexA.r, hexB.r, t),
      this.linearInt(hexA.s, hexB.s, t),
    );
  }

  getDistanceLine(hexA, hexB) {
    let dist = this.cubeDistance(hexA, hexB);
    var arr = [];
    for (let i = 0; i <= dist; i++) {
      let center = this.hexToPixel(
        this.cubeRound(this.cubeLinearInt(hexA, hexB, (1.0 / dist) * i)),
      );
      arr = [].concat(arr, center);
    }
    this.setState({
      currentDistanceLine: arr,
    });
  }

  fillHex(canvasId, center, fillColor) {
    let c0 = this.getHexCornerCoord(center, 0);
    let c1 = this.getHexCornerCoord(center, 1);
    let c2 = this.getHexCornerCoord(center, 2);
    let c3 = this.getHexCornerCoord(center, 3);
    let c4 = this.getHexCornerCoord(center, 4);
    let c5 = this.getHexCornerCoord(center, 5);
    const ctx = canvasId.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.globalAlpha = 0.1;
    ctx.moveTo(c0.x, c0.y);
    ctx.lineTo(c1.x, c1.y);
    ctx.lineTo(c2.x, c2.y);
    ctx.lineTo(c3.x, c3.y);
    ctx.lineTo(c4.x, c4.y);
    ctx.lineTo(c5.x, c5.y);
    ctx.closePath();
    ctx.fill();
  }

  handleClick() {
    const { currentHex, cameFrom } = this.state;
    const { q, r, s } = currentHex;
    if (cameFrom[JSON.stringify(this.Hex(q, r, s))]) {
      this.setState(
        {
          playerPosition: this.Hex(q, r, s),
        },
        (this.breadthFirstSearchCallback = () =>
          this.breadthFirstSearch(this.state.playerPosition)),
      );
    }
  }
  drawObstacles() {
    this.state.obstacles.map((l) => {
      const { q, r, s } = JSON.parse(l);
      const { x, y } = this.hexToPixel(this.Hex(q, r, s));
      this.drawHex(this.canvasHex, this.Point(x, y), 1, "black", "black");
    });
  }

  getNeighbours(h) {
    var arr = [];
    for (let i = 0; i <= 5; i++) {
      const { q, r, s } = this.getCubeNeighbour(this.Hex(h.q, h.r, h.s), i);
      arr.push(this.Hex(q, r, s));
    }
    return arr;
  }

  breadthFirstSearch(playerPosition) {
    var frontier = [playerPosition];
    var cameFrom = {};
    cameFrom[JSON.stringify(playerPosition)] = JSON.stringify(playerPosition);
    while (frontier.length !== 0) {
      var current = frontier.shift();
      let arr = this.getNeighbours(current);
      arr.map((l) => {
        if (
          !cameFrom.hasOwnProperty(JSON.stringify(l)) &&
          this.state.hexPathMap.includes(JSON.stringify(l))
        ) {
          frontier.push(l);
          cameFrom[JSON.stringify(l)] = JSON.stringify(current);
        }
      });
    }
    cameFrom = Object.assign({}, cameFrom);
    this.setState({
      cameFrom: cameFrom,
    });
  }

  getPath(start, current) {
    const { cameFrom } = this.state;
    start = JSON.stringify(start);
    current = JSON.stringify(current);
    if (cameFrom[current] !== undefined) {
      var path = [current];
      while (current !== start) {
        current = cameFrom[current];
        path.push(current);
      }
      path = [].concat(path);
      this.setState({
        path: path,
      });
    }
  }

  drawPath() {
    let path = this.state.path;
    for (let i = 0; i <= path.length - 1; i++) {
      const { q, r } = JSON.parse(path[i]);
      const { x, y } = this.hexToPixel(this.Hex(q, r));
      this.drawHex(
        this.canvasInteraction,
        this.Point(x, y),
        1,
        "black",
        "#05b9f5",
      );
    }
  }

  drawArrow(fromx, fromy, tox, toy) {
    var ctx = this.canvasView.getContext("2d");
    var headlen = 5;
    var angle = Math.atan2(toy - fromy, tox - fromx);
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.strokeStyle = "#05b9f5";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.globalAlpha = 0.3;

    ctx.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 7),
      toy - headlen * Math.sin(angle - Math.PI / 7),
    );
    ctx.lineTo(
      tox - headlen * Math.cos(angle + Math.PI / 7),
      toy - headlen * Math.sin(angle + Math.PI / 7),
    );
    ctx.lineTo(tox, toy);
    ctx.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 7),
      toy - headlen * Math.sin(angle - Math.PI / 7),
    );

    ctx.strokeStyle = "#o5b9f5";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#0fb9f5";
    ctx.fill();
  }
  render() {
    return (
      <div className="Bfs">
        <canvas ref={(canvasHex) => (this.canvasHex = canvasHex)}></canvas>
        <canvas
          ref={(canvasCoordinates) =>
            (this.canvasCoordinates = canvasCoordinates)
          }
        ></canvas>
        <canvas ref={(canvasView) => (this.canvasView = canvasView)}></canvas>
        <canvas
          ref={(canvasInteraction) =>
            (this.canvasInteraction = canvasInteraction)
          }
          onMouseMove={this.handleMouseMove}
          onClick={this.handleClick}
        ></canvas>
      </div>
    );
  }
}

export default Bfs;
