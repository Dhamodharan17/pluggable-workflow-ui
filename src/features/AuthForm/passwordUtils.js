export function validatePassword(password) {
  const rules = [
    { test: /.{8,}/, message: "Password must be at least 8 characters" },
    { test: /[a-z]/, message: "Password must contain a lowercase letter" },
    { test: /[A-Z]/, message: "Password must contain an uppercase letter" },
    { test: /[0-9]/, message: "Password must contain a number" },
    { test: /[^A-Za-z0-9]/, message: "Password must contain a special character" },
  ];

  for (let rule of rules) {
    if (!rule.test.test(password)) {
      return { valid: false, error: rule.message };
    }
  }

  return { valid: true, error: null };
}

export function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const strengthLevels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];

  return {
    score,
    label: strengthLevels[score],
  };
}
