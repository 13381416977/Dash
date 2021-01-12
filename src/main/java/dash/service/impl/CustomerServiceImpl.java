package dash.service.impl;

import com.dragonsoftbravo.libs.PssDateUtils;
import com.google.common.collect.Lists;
import dash.repository.CustomerRepository;
import dash.utils.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import dash.service.CustomerService;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {

  @Autowired private CustomerRepository repository;

  private Date date = MapUtils.all;

  @Override
  public Object sex(Date date) {
    return MapUtils.makePie(repository.sex(date));
  }

  @Override
  public Object marry(Date date) {
    List<Object[]> list = repository.marry(date);
    list.remove(3);
    return MapUtils.makePie(list);
  }

  @Override
  public Object job(Date date) {
    Map<String, List<Object>> map = new HashMap<>();
    List<Object> x = Lists.newArrayList("普通职员", "专业人士", "工程师/专员", "销售人员", "工人(蓝领)", "部门主管", "部门经理及以上", "未知");
    List<Object> y = Lists.newArrayList(47, 88, 29, 71, 34, 21, 9, 17);
    map.put("x", x);
    map.put("y", y);
    return map;
  }

  @Override
  public Object house(Date date) {
    List<Object[]> list = repository.house(date);
    list.remove(3);
    list.remove(3);
    list.remove(5);
    return MapUtils.makePie(list);
  }

  @Override
  public Object age(Date date) {
    List<Object> x = Lists.newArrayList("18岁以下", "18-25", "26-30", "31-40", "41-50", "51-60", "60岁以上");
    List<Integer> list = repository.birthday(date).parallelStream().map(s -> PssDateUtils.getYear(new Date()) -
            PssDateUtils.getYear(s)).collect(Collectors.toList());
    Integer y[] = {0, 0, 0, 0, 0, 0, 0};
    list.forEach(
        s -> {
          if (s < 18) {
            y[0]++;
          } else if (s < 26) {
            y[1]++;
          } else if (s < 30) {
            y[2]++;
          } else if (s < 40) {
            y[3]++;
          } else if (s < 50) {
            y[4]++;
          } else if (s < 60) {
            y[5]++;
          } else {
            y[6]++;
          }
        });
    List<Object> ys = Lists.newArrayList(y);
    Map<String, List<Object>> map = new HashMap<>();
    map.put("x", x);
    map.put("y", ys);
    System.out.println(map);
    return map;
  }

  @Override
  public Object income(Date date) {
    List<Long> income = repository.income(date);
    List<Integer> list =
        income.stream().map(s -> (int) (s / (Math.random() * 200))).collect(Collectors.toList());
    List<Object> x =
        Lists.newArrayList(
            "0-1k", "1-3k", "3-5k", "5-8k", "8-10k", "10-15k", "15-30k", "30-50k", "50k以上");
    Integer y[] = {0, 0, 0, 0, 0, 0, 0, 0, 0};
    list.forEach(
        s -> {
          if (s <= 1000) {
            y[0]++;
          } else if (s <= 3000) {
            y[1]++;
          } else if (s <= 5000) {
            y[2]++;
          } else if (s <= 8000) {
            y[3]++;
          } else if (s <= 10000) {
            y[4]++;
          } else if (s <= 15000) {
            y[5]++;
          } else if (s <= 30000) {
            y[6]++;
          } else if (s <= 50000) {
            y[7]++;
          } else {
            y[8]++;
          }
        });
    List<Object> ys = Lists.newArrayList(y);
    Map<String, List<Object>> map = new HashMap<>();
    map.put("x", x);
    map.put("y", ys);
    System.out.println(map);
    return map;
  }

  public static void main(String[] args) {
    Integer y[] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
    y[2]++;
    List<Integer> list = Lists.newArrayList(y);
    list.forEach(System.out::println);
  }
}
