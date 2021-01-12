package dash.controller;

import dash.dto.PieMap;
import dash.repository.CarLoanIntentionRepository;
import dash.repository.MonthRepository;
import dash.repository.POAUserAnswerRepository;
import dash.utils.MapUtils;
import com.dragonsoftbravo.libs.PssDateWrapper;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class MonthController {

  @Autowired private MonthRepository repository;

  @Autowired private CarLoanIntentionRepository carRepository;

  @Autowired private POAUserAnswerRepository poaRepository;

  /*private Date month = PssDateWrapper.instance(new Date()).toMonthBegin().toDate();*/

  private Date month = MapUtils.month;



  @RequestMapping(value = "/monthSource", method = {RequestMethod.GET})
  public Object monthSource() {
    System.out.println(month);
    return MapUtils.makePie(repository.monthSource(month));
  }

  @RequestMapping(value = "/monthStatus", method = {RequestMethod.GET})
  public Object monthStatus() {
    List<PieMap> list = MapUtils.makePie(repository.monthStatus(month));
    System.out.println(list);
    PieMap map = list.get(2);
    PieMap error = new PieMap("ERROR", map.getValue());
    list.remove(2);
    list.add(error);
    return list;
  }

  @RequestMapping(value = "/monthCategory", method = {RequestMethod.GET})
  public Object monthCategory() {
    return MapUtils.makePie(repository.monthCategory(month));
  }

  @RequestMapping(value = "/dailyLincoln", method = {RequestMethod.GET})
  public Object dailyLincoln() {
    List<String> list = Lists.newArrayList("FordFinance_H5","FordFinance","PUBLICS","CAF");
    return MapUtils.makeDayMap(repository.dailySource(list,month));
  }

  @RequestMapping(value = "/dailyFord", method = {RequestMethod.GET})
  public Object dailyFord() {
    List<String> list = Lists.newArrayList("LincolnFinance_H5","APPLETS","LincolnWay_H5","Lincoln_mall");
    return MapUtils.makeDayMap(repository.dailySource(list,month));
  }

}
