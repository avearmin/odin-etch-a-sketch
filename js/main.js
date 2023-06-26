function main() {
  color = new ColorManager();
  mode = new ModeManager(color);
  grid = new GridManager(mode);
  utilities = new UtilitiesManager(mode);
}

main()