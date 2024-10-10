package exam02;

public class Ex08 {
    public static void main(String[] args) {

        int[][] nums = {{10, 20, 30}, {45, 45, 50}};
        System.out.printf("nums.Length=%d%n", nums.length);
        System.out.printf("nums[0].length=%d%n", nums[0].length);

        int[] nums1 = nums[0];
        nums1[1] = 22;
        for (int i = 0; i < nums.length; i++) { // 0행, 1행
            for (int j = 0; j < nums[i].length; j++) { // 0열, 1열, 2열
                System.out.printf("%d행, %d열 = %d%n", i, j, nums[i][j]);
            }
        }
    }
}
