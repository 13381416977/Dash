/*
package dash;

import dash.repository.CustomerRepository;
import dash.repository.MonthRepository;
import dash.utils.MapUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.stream.Collectors;

@SpringBootTest
public class EWasteApplicationTests {
  @Autowired private MonthRepository repository;
  @Autowired private CustomerRepository customerRepository;


    @Test
    void job() {
        List<Object[]> list = customerRepository.job(MapUtils.all);
        System.out.println(list);
        System.out.println(MapUtils.makeMap(list));
    }

  @Test
  void sex() {
    List<Object[]> list = customerRepository.sex(MapUtils.all);
    System.out.println(list);
    System.out.println(MapUtils.makePie(list));
  }

    @Test
    void income() {
        List<Long> income = customerRepository.income(MapUtils.all);
        System.out.println(income);
    List<Integer> list =
        income.stream().map(s -> (int)(s /(Math.random()*200))).collect(Collectors.toList());
    System.out.println(list);
    }

    @Test
    void house() {
        List<Object[]> list = customerRepository.house(MapUtils.all);
        System.out.println(list);
        list.remove(3);
        list.remove(3);
        list.remove(5);
        System.out.println(MapUtils.makePie(list));
    }

  @Test
  void marry() {
    List<Object[]> sex = customerRepository.marry(MapUtils.all);
    sex.remove(3);
    System.out.println(sex);
    System.out.println(MapUtils.makePie(sex));
  }

  public static void main(String[] args) {
    for (int i = 0; i < 100; i++) {
        System.out.println((int)(Math.random()*100));
    }

  }
}
*/
