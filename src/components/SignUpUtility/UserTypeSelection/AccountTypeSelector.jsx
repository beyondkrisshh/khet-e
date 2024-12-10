import React, { useState } from "react";
import styles from "./AccountTypeSelector.module.css";

function AccountTypeSelector({ onChange }) {
    const [selectedType, setSelectedType] = useState("");
    // const [data, setData] = useState("");

    function handleAccountTypeChange(e) {
        const val = e.target.value;
        setSelectedType(val);
        onChange(val);
        // console.log("----------------", e.target.id);
    }

    const accountTypes = [
        { id: "farmer", label: "Farmer" },
        { id: "buyer", label: "Buyer" },
    ];

    return (
        <div className={styles.accountTypeSelectorWrapper}>
            {accountTypes.map((type) => (
                <div key={type.id} className={styles.accountTypeOption}>
                    <div className={styles.accountTypeBackground} />
                    <label
                        htmlFor={type.id}
                        className={styles.accountTypeLabel}
                    >
                        {type.label}
                    </label>
                    <div className={styles.radioWrapper}>
                        <input
                            type="radio"
                            id={type.id}
                            name="accountType"
                            value={type.id}
                            checked={selectedType === type.id}
                            onChange={handleAccountTypeChange}
                            className={styles.radioInput}
                        />
                        <span
                            className={`${styles.customRadio} ${
                                selectedType === type.id ? styles.selected : ""
                            }`}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AccountTypeSelector;
