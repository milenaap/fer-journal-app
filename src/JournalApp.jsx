import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./modules/theme/AppTheme";

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
