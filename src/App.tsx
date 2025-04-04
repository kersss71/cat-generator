import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import styles from "./App.module.css";
import LanguageSwitch from "./components/LanguageSwitch/LanguageSwitch";
import Controls from "./components/Controls/Controls";
import CatImage from "./components/CatImage/CatImage";
import "./i18n";
import Container from "./components/Container/Container";
const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = "https://api.thecatapi.com/v1/images/search";

function App() {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fetchCatImage = async () => {
    if (!enabled) return;

    try {
      const response = await axios.get(API_URL, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, [enabled]);

  useEffect(() => {
    let interval: number | undefined;

    if (autoRefresh && enabled) {
      interval = window.setInterval(fetchCatImage, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoRefresh, enabled]);

  return (
    <Container>
      <LanguageSwitch />
      <div className={styles.card}>
        <h1 className={styles.title}>{t("title")}</h1>
        <Controls
          enabled={enabled}
          autoRefresh={autoRefresh}
          onEnabledChange={setEnabled}
          onAutoRefreshChange={setAutoRefresh}
          onGetCat={fetchCatImage}
        />
        <CatImage imageUrl={imageUrl} />
      </div>
    </Container>
  );
}

export default App;
