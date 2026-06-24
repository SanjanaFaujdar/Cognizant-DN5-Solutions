public class ForecastCalculator {

    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) return presentValue;
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static double calculateFutureValueMemo(double presentValue, double growthRate, int years, double[] memo) {
        if (years == 0) return presentValue;
        if (memo[years] != 0) return memo[years];
        memo[years] = calculateFutureValueMemo(presentValue, growthRate, years - 1, memo) * (1 + growthRate);
        return memo[years];
    }

    public static void main(String[] args) {
        double presentValue = 1000.0;
        double growthRate   = 0.05;
        int    years        = 10;

        double futureValue = calculateFutureValue(presentValue, growthRate, years);
        System.out.println("Future Value (recursive): $" + String.format("%.2f", futureValue));

        double[] memo = new double[years + 1];
        double futureValueMemo = calculateFutureValueMemo(presentValue, growthRate, years, memo);
        System.out.println("Future Value (memoized):  $" + String.format("%.2f", futureValueMemo));
    }
}
