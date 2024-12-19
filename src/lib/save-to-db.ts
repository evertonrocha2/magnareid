export async function saveImcToDatabase(imc: number) {
  try {
    const response = await fetch("/api/save-imc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imc }),
    });

    if (!response.ok) {
      throw new Error("Failed to save IMC");
    }

    const data = await response.json();
    console.log("IMC saved:", data);
  } catch (error) {
    console.error("Error saving IMC:", error);
  }
}

export async function saveCaloriesToDatabase(calories: number) {
  try {
    const response = await fetch("/api/save-calories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ calories }),
    });

    if (!response.ok) {
      throw new Error("Failed to save CALORIES");
    }

    const data = await response.json();
    console.log("CALORIES saved:", data);
  } catch (error) {
    console.error("Error saving IMC:", error);
  }
}