function testCircleRadiusDefaultsTo10() {
  var circle = new Circle(10);
  assert.isTrue(circle.radius === 10);
};

testCircleRadiusDefaultsTo10();