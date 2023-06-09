function isInsideCircle(circle, point) {
    const { x, y } = point;
    const xMax = circle.center.x + circle.radius;
    const xMin = circle.center.x - circle.radius;
    const yMax = circle.center.y + circle.radius;
    const yMin = circle.center.y - circle.radius;
    console.log(xMin, xMax, yMin, yMax);
    if (x < xMax && x > xMin && y < yMax && yMin) {
        return true;
    }
    return false;
}

console.log(isInsideCircle({ center: { x: 2, y: 2 }, radius: 1 }, { x: 2.8, y: 2.8 }));
